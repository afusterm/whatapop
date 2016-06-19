angular
    .module("whatapop")
    .directive("afmProductSelector", function(CategoryService) {
        return {
            restrict: "EA",
            
            templateUrl: "views/afm-product-selector.html",
            
            scope: {
                // notificar que el filtro de productos ProductsFilter ha cambiado
                onFilterChange: "&"
            },
            
            link: function(scope) {
                // inicializar la variable que se utilizará para construir el filtro. Este filtro se utilizará
                // en la lista de productos
                scope.ProductsFilter = { category: "", name: "" };
                
                // cargar las categorias
                CategoryService.getCategories().then(function(response) {
                    scope.categories = response.data;
                });
                
                // notificar que el filtro ha cambiado
                scope.notifyFilter = function() {
                    scope.onFilterChange({ filter: scope.ProductsFilter });
                };
            }
        };
    });