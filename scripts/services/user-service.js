// obtiene todos los usuarios
angular
    .module("whatapop")
    .service("UserService", function($http, Config) {
        this.getUsers = function() {
            // TODO: el puerto mejor en una constante
            return $http.get(Config.urlServer + Config.endpointUsers);
        };
    });