angular
    .module("whatapop")
    .component("categoriesList", {
        templateUrl: "views/categories-list.html",
        
        // TODO: inyeccion de dependencias con anotación de array en línea o con propiedad $inject
        controller: function(CategoryService) {
            let self = this;
            
            CategoryService.getCategories().then(function(response) {
                self.categories = response.data;
            });
        }
    });