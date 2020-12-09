import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Items extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    nome?:string;

    @Column()
    quantidade?: number;

    @Column()
    ult_compra?: Date;
}