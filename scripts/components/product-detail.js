"use strict";

// componente que muestra los detalles de un producto

angular
    .module("whatapop")
    .component("productDetail", {
        templateUrl: "views/product-detail.html",
        controller: ["ProductService", "$scope", "$sce", "appSettings", function(ProductService, $scope, $sce, appSettings) {
            let self = this;

            this.$onInit = function() {
                if (!appSettings.storageIsSupported) {
                    console.log("WebStorage no está soportado");
                }
            }

            this.$routerOnActivate = function(next) {
                // obtiene los datos del producto con el id pasado en la URL
                ProductService.getProductById(next.params.id).then(function(response) {
                    self.product = response.data;
                    // por defecto el campo favorito es 0. Los valores false y true se almacenan como cadenas. Por
                    // simplificar se asigna el valor 0 como false y 1 como true
                    self.product.favorite = 0;
                    
                    // si se ha guardado el id del producto es porque es favorito
                    if (appSettings.storageIsSupported) {
                        // obtener el valor de "favoritos" que será una cadena con la lista de favoritos
                        let favStr = localStorage.getItem("favorites");

                        // transformar la cadena en un array con los id's
                        if (favStr !== null) {
                            let favorites = JSON.parse(favStr);

                            // buscar en el array el id del producto
                            if (favorites.ids.indexOf(self.product.id) >= 0) {
                                // si lo encuentra es favorito
                                self.product.favorite = 1;
                            }
                        }
                    }
                });
            };

            // obtiene la ruta absoluta de la imagen del producto
            this.getImageAbsolutePath = ProductService.getImageAbsolutePath;

            // guarda el identificador del producto en el array "favorites" de localStorage. Este array
            // contiene los identificadores de todos los productos que son favoritos
            this.saveFavorite = function(selected) {
                if (self.product !== 'undefined' && appSettings.storageIsSupported) {
                    // obtener el objeto JSON favorites que contiene el array donde guarda los id's
                    let favorites = { ids: [] };
                    let favStr = localStorage.getItem("favorites");
                    if (favStr !== null) {
                        favorites = JSON.parse(favStr);
                    }

                    // si selected es 0 buscar el id del producto y eliminarlo del array
                    if (selected == 0) {
                        let index = favorites.ids.indexOf(self.product.id);
                        if (index >= 0) {
                            favorites.ids.splice(index, 1);
                        }
                    } else if (selected == 1) {
                        // si selected es 1 añadirlo al array
                        favorites.ids.push(self.product.id);
                    }

                    // guardar el array en localStorage
                    favStr = JSON.stringify(favorites);
                    localStorage.setItem("favorites", favStr);
                }
            };

            // interpreta el texto html para mostrarlo en el navegador correctamente
            this.validateHtml = function(text) {
                return $sce.trustAsHtml(text);
            };
        }]
    });