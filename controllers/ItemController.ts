import { storageValidator } from "../middlewares/StorageValidator";
import { Items } from "../models/Items";
import { AbstractController } from "./AbstractController";

export class ItemController extends AbstractController{
    
    protected prefix: string = '/items';

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
            const valid = storageValidator(req.body.quantidade);
            if(valid === false){
                res.send("Inserção cancelada! Quantidade superior à capacidade da despensa.");
            }else{
                items.nome = req.body.nome;
                items.quantidade = req.body.quantidade;
                items.marca = req.body.marca;
                items.ult_compra = req.body.ult_compra
                await items.save()
                res.status(201).send( items )
            }
        }
    }

    removeItem(){
        return async function(req: any, res: any, next: any){
            let items: Items | undefined = await Items.findOne({id: req.params.id})
            if(items){
                
                const quantRetirada: any = req.body.quantidade;
                const quantItem: any = items.quantidade;

                if(quantRetirada < 100){
                    const upd = quantItem - quantRetirada;
                    items.quantidade = upd;
                    await items.save()
                    res.send(items)
                }
            }
            else{
                res.status(404).send("Items not found")
            }
        }
    }

    addItem(){
        return async function(req: any, res: any, next: any){
            let items: Items | undefined = await Items.findOne({id: req.params.id})
            if(items){
                
                const quantRetirada: any = req.body.quantidade;
                const quantItem: any = items.quantidade;
                const valid = storageValidator(req.body.quantidade)
                
                if(valid === true){
                    const upd = quantItem + quantRetirada;
                    items.quantidade = upd;
                    items.ult_compra = req.body.ult_compra
                    await items.save()
                    res.send(items)
                }else{
                    res.send("Inserção cancelada! Quantidade superior à capacidade da despensa.")
                }
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
                await items.remove()
                res.status(204).send("Items deleted")
            }
        }
    }

    routes(){
        this.forRouter('/').get(this.list());
        this.forRouter('/').post(this.create());
        this.forRouter('/:id').get(this.retrieve());
        this.forRouter('/remove/:id').put(this.removeItem());
        this.forRouter('/add/:id').put(this.addItem());
        this.forRouter('/:id').delete(this.delete());
    }
}