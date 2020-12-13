import { AbstractController } from "./AbstractController";
import { Bill } from "../models/Bill";

export class BillController extends AbstractController{
    
    protected prefix: string = '/bill';

    list(){
        return async function(req: any, res: any, next: any){
            res.send(await Bill.find());
        }
    }

    retrieve(){
        return async function(req: any, res: any, next: any){
            let bill: Bill | undefined = await Bill.findOne({id: req.params.id})
            if(bill){
                res.send(bill)
            }
            else{
                res.status(404).send("Bill not found")
            }
        }
    }

    create(){
        return async function(req: any, res: any, next: any){
            let bill: Bill = new Bill()
            bill.titulo = req.body.titulo;
            bill.tipo = req.body.tipo;
            bill.valor = req.body.valor;
            bill.vencimento = req.body.vencimento
            await bill.save()
            res.status(201).send(bill)
        }
    }

    alter(){
        return async function(req: any, res: any, next: any){
            let bill: Bill | undefined = await Bill.findOne({id: req.params.id})
            if(bill){
                bill.vencimento = req.body.vencimento
                await bill.save()
                res.send(bill)
            }
            else{
                res.status(404).send("Bill not found")
            }
        }
    }

    delete(){
        return async function(req: any, res: any, next: any){
            let bill: Bill | undefined = await Bill.findOne({id: req.params.id})
            if(bill){
               await bill.remove()
                res.status(204).send("Bill deleted")
            }
        }
    }

    routes(){
        this.forRouter('/').get(this.list());
        this.forRouter('/').post(this.create());
        this.forRouter('/:id').get(this.retrieve());
        this.forRouter('/:id').put(this.alter());
        this.forRouter('/:id').delete(this.delete());
    }
}