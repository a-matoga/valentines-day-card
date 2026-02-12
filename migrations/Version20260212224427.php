<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260212224427 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE card (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, content JSON NOT NULL, template_id INT NOT NULL, INDEX IDX_161498D35DA0FB8 (template_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE card_answer (id INT AUTO_INCREMENT NOT NULL, answer VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE template (id INT AUTO_INCREMENT NOT NULL, symbol VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE token (id INT AUTO_INCREMENT NOT NULL, url_token VARCHAR(64) NOT NULL, token VARCHAR(255) NOT NULL, start_at DATETIME NOT NULL, end_at DATETIME NOT NULL, card_id INT NOT NULL, INDEX IDX_5F37A13B4ACC9A20 (card_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE card ADD CONSTRAINT FK_161498D35DA0FB8 FOREIGN KEY (template_id) REFERENCES template (id)');
        $this->addSql('ALTER TABLE token ADD CONSTRAINT FK_5F37A13B4ACC9A20 FOREIGN KEY (card_id) REFERENCES card (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE card DROP FOREIGN KEY FK_161498D35DA0FB8');
        $this->addSql('ALTER TABLE token DROP FOREIGN KEY FK_5F37A13B4ACC9A20');
        $this->addSql('DROP TABLE card');
        $this->addSql('DROP TABLE card_answer');
        $this->addSql('DROP TABLE template');
        $this->addSql('DROP TABLE token');
    }
}
