const db = require('../../config/db');
const tableName = 'xbox_gamess'

class Review {
    constructor(name, author, genre, image, price, memory, description, platform_id) {
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.image = image;
        this.price = price;
        this.memory = memory;
        this.description = description;
        this.platform_id = platform_id;
    }

    save() {
        let sql = `INSERT INTO ${tableName}(name, author, genre, image, price, memory, description, platform_id) 
        VALUES ('${this.name}', '${this.author}', '${this.genre}', '${this.image}', ${this.price}, '${this.memory}', '${this.description}', ${this.platform_id})`;

        return db.execute(sql);
    }

    update(id, name, author, genre, image, price, memory, description, platform_id) {
        let sql = `
            UPDATE ${tableName} 
            SET name="${name}", 
                author="${author}",
                genre="${genre}",
                image="${image}", 
                price=${price}, 
                memory="${memory}", 
                description="${description}",
                platform_id=${platform_id} 
            WHERE id = ${id};`

        return db.execute(sql);
    }

    static findAll() {
        // let sql = `SELECT * FROM ${tableName};`;
        let sql = `
            SELECT ${tableName}.id, 
                   ${tableName}.name, 
                   ${tableName}.author, 
                   ${tableName}.image, 
                   ${tableName}.price, 
                   ${tableName}.memory, 
                   ${tableName}.description, 
                platforms.title AS platforms 
            FROM ${tableName} 
            INNER JOIN platforms 
            ON ${tableName}.platform_id = platforms.id;`;

        return db.execute(sql);
    }

    static findById(id) {
        // let sql = `SELECT * FROM ${tableName} WHERE id = ${id};`;
        let sql = `
            SELECT ${tableName}.id, 
                   ${tableName}.name, 
                   ${tableName}.author, 
                   ${tableName}.image, 
                   ${tableName}.price, 
                   ${tableName}.memory, 
                   ${tableName}.description, 
                platforms.title AS platforms 
            FROM ${tableName} 
            INNER JOIN platforms 
            ON ${tableName}.platform_id = platforms.id
            WHERE ${tableName}.id = ${id};`;

        return db.execute(sql);
    }

    static getByName(name) {
        let sql = `SELECT * FROM ${tableName} WHERE name LIKE '%${name}%';`;

        return db.execute(sql);
    }

    static delete(id) {
        let sql = `DELETE FROM ${tableName} WHERE id = ${id};`;

        return db.execute(sql);
    }
}

module.exports = Review;