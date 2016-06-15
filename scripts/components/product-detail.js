angular
    .module("whatapop")
    .component("productDetail", {
        templateUrl: "views/product-detail.html",
        controller: function(ProductService, $scope) {
            let self = this;
            this.$routerOnActivate = function(next) {
                ProductService.getProductById(next.params.id).then(function(response) {
                    self.product = response.data;
                    $scope.descHTML = self.product.description;
                });
            };

            this.getImageAbsolutePath = ProductService.getImageAbsolutePath;
        }
    });