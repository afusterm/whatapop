// obtiene todos los usuarios
angular
    .module("whatapop")
    .service("UserService", function($http) {
        this.getUsers = function() {
            // TODO: el puerto mejor en una constante
            return $http.get("http://localhost:8000/api/users");
        };
    });