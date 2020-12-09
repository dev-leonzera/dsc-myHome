import { Application, IRoute } from "express";

export interface IController {
    forApp(app: Application) : IController;
    forRouter(path: string) : IRoute;
    routes() : void;
}