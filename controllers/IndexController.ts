import { AbstractController } from "./AbstractController";

export class IndexController extends AbstractController{
    
    protected prefix: string = '/';

    index(){
        return function(req : any, res : any, next : any) {
            res.send('Bem vindo ao myHome');
        };
    }
    
    routes(){
        this.forRouter('/').get(this.index());
    }
}