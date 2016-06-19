"use strict";

// componente que muestra la lista de productos
angular
    .module("whatapop")
    .component("products", {
        templateUrl: "views/products.html", 
        controller: ["ProductService", function(ProductService) {
            let self = this;

            // filtro de productos por categoría y nombre
            this.ProductsFilter = { category: "", name: "" };

            // obtener todos los productos
            ProductService.getProducts().then(function (response) {
                self.products = response.data;
            });

            // obtiene la ruta absoluta de la imagen de un producto a partir de la ruta que contiene el producto
            this.getImageAbsolutePath = ProductService.getImageAbsolutePath;
            
            // actualizar el filtro
            this.updateFilter = function(filter) {
                this.ProductsFilter = filter;
            };
        }]
    });