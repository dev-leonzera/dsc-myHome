import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Expenses extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    titulo?: string;

    @Column({
        type: "money"
    })
    valor?: number;

    @Column()
    vencimento?: Date;
}