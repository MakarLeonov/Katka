const db = require('../config/db');
const tableName = 'platforms'

class Platform {
    constructor(title) {
        this.title = title;
    }

    save() {
        let sql = `INSERT INTO ${tableName}(title) VALUES ('${this.title}')`;

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

    update(id, title) {
        let sql = `UPDATE ${tableName} SET title="${title}" WHERE id = ${id};`

        return db.execute(sql);
    }

    static delete(id) {
        let sql = `DELETE FROM ${tableName} WHERE id = ${id};`;

        return db.execute(sql);
    }
}

module.exports = Platform;