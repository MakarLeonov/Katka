const db = require('../../config/db');
const tableName = 'xbox_games'

class Game {
    constructor(name, author, genre, image, price, currency, memory, description, platforms) {
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.image = image;
        this.price = price;
        this.currency = currency;
        this.memory = memory;
        this.description = description;
        this.platforms = platforms;
    }

    save() {
        let sql = `INSERT INTO ${tableName}(name, author, genre, image, price, currency, memory, description, platforms) 
        VALUES ('${this.name}', '${this.author}', '${this.genre}', '${this.image}', ${this.price}, '${this.currency}', '${this.memory}', '${this.description}', '${this.platforms}');`;

        return db.execute(sql);
    }

    update(id, name, author, genre, image, price, currency, memory, description, platforms) {
        let sql = `
            UPDATE ${tableName} 
            SET name="${name}", 
                author="${author}",
                genre="${genre}",
                image="${image}", 
                price=${price}, 
                currency="${currency}", 
                memory="${memory}", 
                description="${description}",
                platforms="${platforms}" 
            WHERE id = ${id};`

        return db.execute(sql);
    }

    static findAll() {
        let sql = `SELECT * FROM ${tableName};`

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM ${tableName} WHERE id = ${id};`;

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

module.exports = Game;