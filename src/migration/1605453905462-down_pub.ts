import {MigrationInterface, QueryRunner} from "typeorm";

export class downPub1605453905462 implements MigrationInterface {
    name = 'downPub1605453905462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `age` int NOT NULL, `auth` tinyint NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `book` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `userId` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `book` ADD CONSTRAINT `FK_04f66cf2a34f8efc5dcd9803693` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `book` DROP FOREIGN KEY `FK_04f66cf2a34f8efc5dcd9803693`");
        await queryRunner.query("DROP TABLE `book`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
