//import para usar o @injectable()
import "reflect-metadata";
import { Application, IRoute } from "express";
import { injectable } from "inversify";
import { IController } from "./IController";

@injectable()

export abstract class AbstractController implements IController{
    
    private app?:Application;
    protected abstract prefix: string;

    forApp(app: Application): IController{
        this.app = app;
        return this;
    }

    forRouter(path: string): IRoute{
        return this.app?.route(`${this.prefix}${path}`) as IRoute;
    }

    abstract routes(): void;
}