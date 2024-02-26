const Platform = require('../models/Platform');

exports.getAll = async (req, res, next) => {
    try {
        const [entries, _] = await Platform.findAll();

        res.status(200).json(entries);
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.getById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let [entry, _] = await Platform.findById(id);

        res.status(200).json(entry[0]);
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.createNew = async (req, res, next) => {
    try {
        let { title } = req.body;

        if (title.length === '' || title.length > 255) {
            // throw new CreatingError("Недопустимый разрмер поля")
            res.status(201).json({ status: 201, message: "Недопустимый разрмер поля" });
        }

        let entry = new Platform(title);

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
        let { title } = req.body;

        let entry = new Platform();
        entry = await entry.update(id, title);

        let [updatedEntry, _] = await Platform.findById(id);

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
        let result = await Platform.delete(id);
        console.log(result)
        res.send("Запись успешно удалена")
    } catch(error) {
        console.log(error);
        next(error)
    }
}