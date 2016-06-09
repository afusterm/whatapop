// obtiene las categorias disponibles
angular
    .module("whatapop")
    .service("CategoryService", function($http) {
        this.getCategories = function() {
            // TODO: el puerto mejor en una constante
            return $http.get("http://localhost:8000/api/categories");
        };
    });