import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1722749221748 implements MigrationInterface {
    name = 'Initial1722749221748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`machine\` (\`id\` int NOT NULL AUTO_INCREMENT, \`machine_name\` varchar(255) NOT NULL, \`machine_type\` enum ('maker', 'packer') NOT NULL, \`created_at\` varchar(255) NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`machine_data\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` datetime NOT NULL, \`q1\` varchar(255) NOT NULL, \`q2\` varchar(255) NOT NULL, \`q3\` varchar(255) NOT NULL, \`q4\` varchar(255) NOT NULL, \`q5\` varchar(255) NOT NULL, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`machine_id\` int NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`status\` tinyint NOT NULL, \`emp_id\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`last_login\` varchar(255) NOT NULL, \`last_pass_update\` varchar(255) NOT NULL, \`created_at\` varchar(255) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` varchar(255) NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`machine_data\` ADD CONSTRAINT \`FK_c8a505c638fc31384c8ac0c3183\` FOREIGN KEY (\`machine_id\`) REFERENCES \`machine\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`machine_data\` ADD CONSTRAINT \`FK_f4934a467bbe72d3c54b0f03f4d\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`machine_data\` DROP FOREIGN KEY \`FK_f4934a467bbe72d3c54b0f03f4d\``);
        await queryRunner.query(`ALTER TABLE \`machine_data\` DROP FOREIGN KEY \`FK_c8a505c638fc31384c8ac0c3183\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`machine_data\``);
        await queryRunner.query(`DROP TABLE \`machine\``);
    }

}
