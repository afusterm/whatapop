angular
    .module("whatapop")
    .component("products", {
        templateUrl: "views/products.html",
        controller: function(ProductService) {
            let self = this;

            ProductService.getProducts().then(function(response) {
                self.products = response.data;
            });
            
            this.getImageAbsolutePath = ProductService.getImageAbsolutePath;
        }
    });