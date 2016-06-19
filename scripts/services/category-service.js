// obtiene las categorias disponibles
angular
    .module("whatapop")
    .service("CategoryService", ["$http", "Config", function($http, Config) {
        this.getCategories = function() {
            return $http.get(Config.urlServer + Config.endpointCategories);
        };
    }]);