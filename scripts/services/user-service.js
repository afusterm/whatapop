"use strict";

angular
    .module("whatapop")
    .service("UserService", ["$http", "Config", function($http, Config) {
        // obtiene todos los usuarios
        this.getUsers = function() {
            return $http.get(Config.urlServer + Config.endpointUsers);
        };
        
        // crea un usuario nuevo
        this.createUser = function(user, image) {
            let promess;
            
            if (image) {
                // crear un FormData con la imagen
                let data = new FormData();
                data.append("img", image);
                
                // crear el content-type de la petición.
                // Hay que indicar como 'undefined' para que angular infiera el tipo de la petición
                let config = {
                    "headers": {
                        "Content-Type": undefined
                    }
                };
                
                // subir la imagen al servidor
                promess = $http.
                    post(
                        Config.urlServer + Config.endpointImages,
                        data,
                        config
                    ).then(function(response) {
                        // en la propiedad path viene la ruta relativa de la imagen subida
                        let path = response.data.path;
                    
                        // establecer la ruta de la imagen en el objeto user antes de guardarla
                        user.avatar = path;
                    
                        return $http.post(Config.urlServer + Config.endpointUsers, user);
                    });
            } else {
                // si no se ha indicado una imagen
                promess = $http.post(Config.urlServer + Config.endpointUsers, user);
            }
            
            return promess;
        };
    }]);