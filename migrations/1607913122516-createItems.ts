import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createItems1607913122516 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'items',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                },
                {
                    name: 'nome',
                    type: 'varchar',
                },
                {
                    name: 'marca',
                    type: 'varchar',
                },
                {
                    name: 'quantidade',
                    type: 'integer',
                },
                {
                    name: 'ult_compra',
                    type: 'timestamp',
                },
            ],
        })); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('items');
    }

}
