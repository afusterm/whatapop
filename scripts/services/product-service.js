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
    });