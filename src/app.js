const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql= require ('mysql');
const myConnection = require('express-myconnection');
const app= express();
// importamos rutas
const customerRoutes = require('./routes/customer');

//Seting
/*"app.set" lo que realiza es una especie de valirable en donde damos la configuracion del puerto
en donde se trabajara: 'port' es el nombre de la variable y process.env.PORT guarda los valores de
los puertos en donde trabajaremos, con el or damos a entender que en caso de que se no exita ningun
puerto establecido usaremos el puerto 3000*/
app.set('port', process.env.PORT || 3000);
//Despues daremos la ruta de donde sera que se almacenaran las views con el metodo path
app.set('views', path.join(__dirname, 'views'));
/*Ahora aplicaremos unas plantillas con ejs para poder usarlas con html*/
app.set('view engine', 'ejs');
//imagen para el codigo de barras


//middelwares
app.use(morgan ('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user: 'pruebitas',
    password:'S0p0rt32017',
    port:3306,
    database:'userdatabase'
},'single'));
//middelware para el metodo post
app.use(express.urlencoded({extended: false}));

//rutes
app.use('/',customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting server port
app.listen(app.get ('port'), ()=> {console.log('Server on port 3000')});