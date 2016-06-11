angular
    .module("whatapop")
    .value("Config", {
        urlServer: "http://localhost:8000",
        endpointCategories: "/api/categories",
        endpointProducts: "/api/products",
        endpointUsers: "/api/users"
    });