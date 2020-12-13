import { AbstractController } from "./AbstractController";
import { Expenses } from "../models/Expenses";

export class ExpensesController extends AbstractController{
        
    protected prefix: string = '/expenses';

    list(){
        return async function(req: any, res: any, next: any){
            res.send(await Expenses.find());
        }
    }

    retrieve(){
        return async function(req: any, res: any, next: any){
            let expenses: Expenses | undefined = await Expenses.findOne({id: req.params.id})
            if(expenses){
                res.send(expenses)
            }
            else{
                res.status(404).send("Expenses not found")
            }
        }
    }

    create(){
        return async function(req: any, res: any, next: any){
            let expenses: Expenses = new Expenses()
            expenses.titulo = req.body.titulo;
            expenses.valor = req.body.valor;
            expenses.data = req.body.data
            await expenses.save()
            res.status(201).send( expenses )
        }
    }

    alter(){
        return async function(req: any, res: any, next: any){
            let expenses: Expenses | undefined = await Expenses.findOne({id: req.params.id})
            if(expenses){
                // Expenses.titulo = req.body.titulo;
                // Expenses.valor = req.body.valor;
                expenses.data = req.body.data
                await expenses.save()
                res.send(expenses)
            }
            else{
                res.status(404).send("Expenses not found")
            }
        }
    }

    delete(){
        return async function(req: any, res: any, next: any){
            let expenses: Expenses | undefined = await Expenses.findOne({id: req.params.id})

            if(expenses){
                await expenses.remove()
                res.status(204).send("Expenses deleted")
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