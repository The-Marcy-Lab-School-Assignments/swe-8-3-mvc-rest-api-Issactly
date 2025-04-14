const Character = require('../models/Sanrio');

const  serveCharacters = (req, res) => {
    const charactersList = Character.list();
    res.send(charactersList)
}

const serveCharacter = (req, res) => {
    const { id } = req.params
    const character = Character.find(Number(id));
    
    if (!character) {
        return res.status(404).send({
            message: `No fellow with the id ${id}`
        })
    }
    res.send(character);
}

//create
const createCharacter = (req, res) => {
    const { characterName } = req.body;
    if (!characterName) {
        return res.status(400).send({ message: "Invalid Name"});
    }

    const newCharacter = Character.create(characterName);
    res.send(newCharacter);
}

//update
const updateCharacter = (req, res) => {
    const { characterName } = req.body;
    const { id } = req.params;

    if (!characterName) {
        return res.status(400).send({ message: "Invalid Name"});
    }

    const { id } = req.params;
    const updatedCharacter = Character.editName(Number(id), characterName);

    if (!updatedCharacter) {
        return res.status(404).send({
            message: `No fellow with the id ${id}`
        })
    }
    res.send(updatedCharacter);
}

//delete
const deleteCharacter = (req, res) => {
    const { id } = req.params;
    const didDelete = Character.delete(Number(id));

    if (!didDelete) {
        return res.status(404).send({
            message: `No character with the id ${id}`
        });
    }
    res.sendStatus(204);
}

module.exports = {
    serveCharacter,
    serveCharacters,
    createCharacter,
    updateCharacter,
    deleteCharacter
};