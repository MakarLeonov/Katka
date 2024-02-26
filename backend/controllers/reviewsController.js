const Review = require('../models/Review');

exports.getAll = async (req, res, next) => {
    try {
        const [entries, _] = await Review.findAll();

        res.status(200).json(entries);
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.getById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let [entry, _] = await Review.findById(id);

        res.status(200).json(entry[0]);
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.createNew = async (req, res, next) => {
    try {
        let { author, rating, male, comment } = req.body;
        let entry = new Review(author, rating, male, comment);

        entry = await entry.save();
        
        res.status(201).json({ status: 201, message: "Запись успешно сохранена" });
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.update = async (req, res, next) => {
    try {
        let id = req.params.id;
        let { author, rating, male, comment } = req.body;

        let entry = new Review();
        entry = await entry.update(id, author, rating, male, comment);

        let [updatedEntry, _] = await Review.findById(id);

        res.status(201).json({ 
            status: 204, 
            message: "Запись успешно обновлена", 
            updatedEntry: updatedEntry[0]
        });
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await Review.delete(id);
        console.log(result)
        res.send("Запись успешно удалена")
    } catch(error) {
        console.log(error);
        next(error)
    }
}