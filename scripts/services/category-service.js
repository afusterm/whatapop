"use strict";

angular
    .module("whatapop")
    .service("CategoryService", ["$http", "Config", function($http, Config) {
        // obtiene las categorias disponibles
        this.getCategories = function() {
            return $http.get(Config.urlServer + Config.endpointCategories);
        };
    }]);