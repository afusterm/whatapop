// obtiene todos los productos
angular
    .module("whatapop")
    .service("ProductService", function($http, Config) {
        this.getProducts = function() {
            return $http.get(Config.urlServer + Config.endpointProducts);
        };
        
        this.getImageAbsolutePath = function(path) {
            return path ? (Config.urlServer + "/" + path) : undefined;
        };
        
        this.getProductById = function(id) {
            console.log("Buscando producto con id " + id);
            return $http.get(Config.urlServer + Config.endpointProducts + "/" + id);
        };
    });