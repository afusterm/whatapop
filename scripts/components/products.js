"use strict";

angular
    .module("whatapop")
    .component("products", {
        templateUrl: "views/products.html", 
        controller: function(ProductService, CategoryService) {
            let self = this;

            ProductService.getProducts().then(function (response) {
                self.products = response.data;
            });

            CategoryService.getCategories().then(function (response) {
                self.categories = response.data;
            });

            this.getImageAbsolutePath = ProductService.getImageAbsolutePath;

            // filtro de productos
            this.ProductsFilter = {category: "", name: ""};
        }
    });