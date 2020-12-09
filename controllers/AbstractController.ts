//import para usar o @injectable()
import "reflect-metadata";
import { Application, IRoute } from "express";
import { injectable } from "inversify";
import { IController } from "./IController";

//informando que as classes (controllers) poderão e serão usados em outras classes.
@injectable()

export abstract class AbstractController implements IController{
    
    //usando inversão de dependência para instanciar o application express no controller;
    //declarando propriedade app para receber o application express do middleware
    private app?:Application;
    protected abstract prefix: string;

    //método forApp para receber o application express passado como parâmetro;
    forApp(app: Application): IController{
        this.app = app;
        return this;
    }

    //encapsulamento da chamada para as rotas
    forRouter(path: string): IRoute{
        return this.app?.route(`${this.prefix}${path}`) as IRoute;
    }

    abstract routes(): void;
}