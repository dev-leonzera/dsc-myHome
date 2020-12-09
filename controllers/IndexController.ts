
import { injectable } from "inversify";

import { AbstractController } from "./AbstractController";

export class IndexController extends AbstractController{
    
    //variável prefix para receber o path da rota;
    protected prefix: string = '/';

    //métodos para criação das rotas
    dashboard(){
        return function(req : any, res : any, next : any) {
            res.send('Dashboard - BoletoApp');
        };
    }

    //instanciando a criação das rotas;
    routes(){
        this.forRouter('/').get(this.dashboard());
    }

}