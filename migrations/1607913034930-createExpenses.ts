import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createExpenses1607913034930 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'expenses',
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
                    name: 'valor',
                    type: 'double precision',
                },
                {
                    name: 'data',
                    type: 'timestamp',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('expenses');
    }

}
