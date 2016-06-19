// obtiene todos los usuarios
angular
    .module("whatapop")
    .service("UserService", ["$http", "Config", function($http, Config) {
        this.getUsers = function() {
            return $http.get(Config.urlServer + Config.endpointUsers);
        };
    }]);