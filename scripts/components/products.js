"use strict";

angular
    .module("whatapop")
    .component("products", {
        templateUrl: "views/products.html", 
        controller: ["ProductService", function(ProductService) {
            let self = this;

            this.ProductsFilter = { category: "", name: "" };

            ProductService.getProducts().then(function (response) {
                self.products = response.data;
            });

            this.getImageAbsolutePath = ProductService.getImageAbsolutePath;
            
            // actualizar el filtro
            this.updateFilter = function(filter) {
                this.ProductsFilter = filter;
            };
        }]
    });