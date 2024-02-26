const Subscription = require('../../models/Xbox/Subscription');

exports.getAll = async (req, res, next) => {
    try {
        const [entries, _] = await Subscription.findAll();

        res.status(200).json(entries);
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.getById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let [entry, _] = await Subscription.findById(id);

        res.status(200).json(entry[0]);
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.getByName = async (req, res, next) => {
    try {
        let name = req.params.name;
        let [entry, _] = await Subscription.getByName(name);

        res.status(200).json(entry);
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.createNew = async (req, res, next) => {
    try {
        let { name, image, price, description, platform } = req.body;
        let entry = new Subscription(name, image, price, description, platform);

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
        let { name, image, price, description, platform } = req.body;

        let entry = new Subscription();
        entry = await entry.update(id, name, image, price, description, platform);

        let [updatedEntry, _] = await Subscription.findById(id);

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
        let result = await Subscription.delete(id);
        console.log(result)
        res.send("Запись успешно удалена")
    } catch(error) {
        console.log(error);
        next(error)
    }
}