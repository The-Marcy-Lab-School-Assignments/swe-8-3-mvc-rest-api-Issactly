const getId = require("../utils/getId");

//restrict access to our mockdatabase to the model
const characters = [
  { name: "Hello Kitty", id: getId() },
  { name: "Cinnomoroll", id: getId() },
  { name: "Pompompurin", id: getId() },
  { name: "Kerokerokeropi", id: getId() },
  { name: "Kuromi", id: getId() },
  { name: "My Melody", id: getId() },
];

class Character {
  //create + add the new character to the mock (the characters arr)
  //rather than using a constructor use a static method to create new character
  static create(name) {
    const newCharacter = {
      name,
      id: getId()
    }
    fellows.push(newCharacter)
    return newCharacter
  }
  
  static list() {
    return [...characters]
  }

static find(id) {
  return characters.find((character) => character.id === id);
}

 //updates one value from the mockdatabase
 static editName(id, newName) {
  const character = Character.find(id)
  if (!character) return null
  character.name = newName
  return character
}

 //delete one value from the mockdatabase
 static delete(id) {
  const characterIndex = characters.findIndex((character) => character.id === id);
  if (characterIndex < 0) return false

  characters.splice(characterIndex, 1)
  return true
}

}

module.exports = Character;