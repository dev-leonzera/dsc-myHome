import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBills1607826173349 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'bills',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                },
                {
                    name: 'titulo',
                    type: 'varchar',
                },
                {
                    name: 'tipo',
                    type: 'varchar',
                },
                {
                    name: 'valor',
                    type: 'double precision',
                },
                {
                    name: 'vencimento',
                    type: 'timestamp',
                },
            ],
        }));        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bills');
    }

}