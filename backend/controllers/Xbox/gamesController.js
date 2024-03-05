const Game = require('../../models/Xbox/Game');

exports.getAll = async (req, res, next) => {
    try {
        const [entries, _] = await Game.findAll();

        entries.map(e => {
            e.platforms = e.platforms.split(',')
            return e
        })

        res.status(200).json(entries);
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.getById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let [entry, _] = await Game.findById(id);

        entry[0].platforms = entry[0].platforms.split(',') 

        console.log(entry[0])

        res.status(200).json(entry[0]);
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.getByName = async (req, res, next) => {
    try {
        let name = req.params.name;
        let [entry, _] = await Game.getByName(name);

        res.status(200).json(entry);
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.createNew = async (req, res, next) => {
    try {
        let { name, author, genre, image, price, currency, memory, description, platforms } = req.body;
        let entry = new Game(name, author, genre, image, price, currency, memory, description, platforms);

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
        let { name, author, genre, image, price, currency, memory, description, platforms } = req.body;

        let entry = new Game();
        entry = await entry.update(id, name, author, genre, image, price, currency, memory, description, platforms);

        let [updatedEntry, _] = await Game.findById(id);

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
        let result = await Game.delete(id);
        console.log(result)
        res.send("Запись успешно удалена")
    } catch(error) {
        console.log(error);
        next(error)
    }
}