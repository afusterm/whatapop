angular.module("whatapop", [
    "ngComponentRouter",
    "ngSanitize",
    "dahr.ng-image-picker"
]);

// modo de navegación HTML5 para que funcione el Single Page Application.
angular.module("whatapop").config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

// indicar el componente raíz
angular.module("whatapop").value("$routerRootComponent", "root");