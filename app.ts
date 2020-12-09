import { createConnection } from "typeorm";
import { IController } from "./controllers/IController";
import ControllerContainer from "./controllers/InversifyContainer/ControllerContainer";
import ControllerTypes from "./controllers/InversifyContainer/ControllerTypes";

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

createConnection().then(() => {
    console.log('DB Connected')
});

//inversão de controle com injeção de dependendcia;

//atribuindo ao controllers o container com as instancias dos controles;
const controllers: IController[]= ControllerContainer.getAll<IController>(ControllerTypes.Controller);

//chamada do metodo de criação das rotas de cada controller;
controllers.forEach(controller => {
    controller.forApp(app).routes();
});

module.exports = app;
