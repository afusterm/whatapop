"use strict";

angular
    .module("whatapop")
    .component("newUser", {
        templateUrl: "views/new-user.html",
        
        controller: ["UserService", function(UserService) {
            let self = this;
            
            // imagen para el documento de la imagen del avatar que se ha seleccionado
            let avatarImage;
            
            this.user = {
                name: "",
                nick: "",
                avatar: "",
                latitude: 0.0,
                longitude: 0.0,
                email: ""
            };
            
            this.createUser = function() {
                UserService.createUser(self.user, avatarImage).then(function() {
                    console.log("Usuario " + self.user.name + " creado");
                });
            };
            
            // guardar el documento de la imagen para almacenarlo en el servidor
            this.selectImage = function(image) {
                avatarImage = image;
            };
            
            // eliminar el documento de la imagen
            this.deselectImage = function() {
                avatarImage = undefined;  
            };
        }]
    });