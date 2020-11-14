import {MigrationInterface, QueryRunner} from "typeorm";

export class book1605368770603 implements MigrationInterface {
    name = 'book1605368770603'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `book` CHANGE `publishedAt` `publishedAt` datetime NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `book` CHANGE `publishedAt` `publishedAt` datetime NULL");
    }

}
