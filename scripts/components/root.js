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
        }, {
            name: "NewUser",
            path: "/new-user",
            component: "newUser"
        }],
        templateUrl: "views/root.html",
        controller: ["Config", function(Config) {
            this.home = Config.urlHome;
        }]
    });