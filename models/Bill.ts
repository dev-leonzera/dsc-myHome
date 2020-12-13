import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Bill extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    titulo?: string;

    @Column()
    tipo?: string;

    @Column("double precision")
    valor?: number;

    @Column()
    vencimento?: Date;
}