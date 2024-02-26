const db = require('../config/db');
const tableName = 'reviews'

class Review {
    constructor(author, rating, male, comment) {
        this.author = author;
        this.rating = rating;
        this.male = male;
        this.comment = comment;
    }

    save() {
        let sql = `INSERT INTO ${tableName}(author, rating, male, comment) 
        VALUES ('${this.author}', '${this.rating}', '${this.male}', '${this.comment}')`;

        return db.execute(sql);
    }

    update(id, author, rating, male, comment) {
        let sql = `
            UPDATE ${tableName} 
            SET author="${author}", 
                rating=${rating}, 
                male="${male}", 
                comment="${comment}" 
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

    static delete(id) {
        let sql = `DELETE FROM ${tableName} WHERE id = ${id};`;

        return db.execute(sql);
    }
}

module.exports = Review;