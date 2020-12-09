import { Items } from "../models/Items";
import { AbstractController } from "./AbstractController";

export class ItemController extends AbstractController{
    //variável prefix para receber o path da rota;
    protected prefix: string = '/items';

    //métodos para criação das rotas
    list(){
        return async function(req: any, res: any, next: any){
            res.send(await Items.find());
        }
    }

    retrieve(){
        return async function(req: any, res: any, next: any){
            let item: Items | undefined = await Items.findOne({id: req.params.id})
            if(item){
                res.send(item)
            }
            else{
                res.status(404).send("Items not found")
            }
        }
    }

    create(){
        return async function(req: any, res: any, next: any){
            let items: Items = new Items()
            items.nome = req.body.nome;
            items.quantidade = req.body.quantidade;
            items.ult_compra = req.body.ult_compra
            await items.save()
            res.status(201).send( items )
        }
    }

    alter(){
        return async function(req: any, res: any, next: any){
            let items: Items | undefined = await Items.findOne({id: req.params.id})
            if(items){
                // Items.titulo = req.body.titulo;
                // Items.valor = req.body.valor;
                items.ult_compra = req.body.ult_compra
                items.save()
                res.send(items)
            }
            else{
                res.status(404).send("Items not found")
            }
        }
    }

    delete(){
        return async function(req: any, res: any, next: any){
            let items: Items | undefined = await Items.findOne({id: req.params.id})

            if(items){
                items.remove()
                res.status(204).send("Items deleted")
            }
        }
    }

    //instanciando a criação das rotas;
    routes(){
        this.forRouter('/').get(this.list());
        this.forRouter('/').post(this.create());
        this.forRouter('/:id').get(this.retrieve());
        this.forRouter('/:id').put(this.alter());
        this.forRouter('/:id').delete(this.delete());
    }
}