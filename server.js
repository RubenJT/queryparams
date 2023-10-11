const express = require('express');
const usersRouter = require('./routes/users');

class Server{
    constructor(){
        this.app = express();//Instancia de express
        this.port = 3000;// Puerto para el servidor
    
        //  http://localhost:3000/api/v1/users

        this.basePath = '/api/v1';
        this.usersPath = `${this.basePath}/users`;

        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.json());//para poder interpretar texto
    }
    routes(){
        this.app.get(this.usersPath, usersRouter);
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Listening on port " + this.port);
    }
    )}
}
module.exports=Server;