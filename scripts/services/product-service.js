"use strict";

angular
    .module("whatapop")
    .service("ProductService", ["$http", "Config", function($http, Config) {
        // obtiene todos los productos
        this.getProducts = function() {
            return $http.get(Config.urlServer + Config.endpointProducts);
        };

        // obtiene la ruta absoluta a partir de la ruta relativa pasada como parámetro
        this.getImageAbsolutePath = function(path) {
            return path ? (Config.urlServer + "/" + path) : undefined;
        };

        // obtiene un producto dado su id
        this.getProductById = function(id) {
            return $http.get(Config.urlServer + Config.endpointProducts + "/" + id);
        };
    }]);