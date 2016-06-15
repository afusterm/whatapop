angular
    .module("whatapop")
    .component("root", {
        $routeConfig: [{
            name: "Products",
            path: "/products",
            component: "products",
            useAsDefault: true
        }, {
            name: "Detail",
            path: "/product-detail/:id",
            component: "productDetail"
        }],
        templateUrl: "views/root.html",
        controller: function(Config) {
            this.home = Config.urlHome;
        }
    });