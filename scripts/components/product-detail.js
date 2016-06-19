angular
    .module("whatapop")
    .component("productDetail", {
        templateUrl: "views/product-detail.html",
        controller: ["ProductService", "$scope", "$sce", function(ProductService, $scope, $sce) {
            let self = this;
            this.$routerOnActivate = function(next) {
                ProductService.getProductById(next.params.id).then(function(response) {
                    self.product = response.data;
                    self.product.favorite = 0;
                    
                    // si se ha guardado el id del producto es porque es favorito
                    if (typeof(Storage) !== 'undefined') {
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

            this.getImageAbsolutePath = ProductService.getImageAbsolutePath;
            
            this.saveFavorite = function(selected) {
                console.log("selected = " + selected);

                if (self.product !== 'undefined' && typeof(Storage) !== 'undefined') {
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
            
            this.validateHtml = function(text) {
                return $sce.trustAsHtml(text);
            };
        }]
    });