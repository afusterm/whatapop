// obtiene todos los productos
angular
    .module("whatapop")
    .service("ProductService", function($http) {
        this.getProducts = function() {
            // TODO: el puerto mejor en una constante
            return $http.get("http://localhost:8000/api/products");
        };
    });