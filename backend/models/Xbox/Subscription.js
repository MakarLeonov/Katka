const db = require('../../config/db');
const tableName = 'xbox_subscriptions'

class Subscription {
    constructor(name, image, price, description, platform) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
        this.platform_id = platform;
    }

    save() {
        let sql = `INSERT INTO ${tableName}(name, image, price, description, platform) 
        VALUES ('${this.name}', '${this.image}', ${this.price}, '${this.description}', '${this.platform}')`;

        return db.execute(sql);
    }

    update(id, name, image, price, description, platform) {
        let sql = `
            UPDATE ${tableName} 
            SET name="${name}", 
                image="${image}", 
                price=${price}, 
                description="${description}",
                platform="${platform}" 
            WHERE id = ${id};`

        return db.execute(sql);
    }

    static findAll() {
        let sql = `SELECT * FROM ${tableName};`;

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

module.exports = Subscription;