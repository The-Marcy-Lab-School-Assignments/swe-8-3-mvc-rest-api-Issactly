const express = require('express');
const path = require('path');

const {
    serveCharacters,
    serveCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
} = require('./controllers/fellowControllers');

const app = express();
const pathToFrontendDist = path.join(__dirname, '../frontend/dist');

////////////
//middleware
////////////

const logRoutes = (req, res, next) => {
    const time = (new Date()).toLocaleString();
    req.time = time;
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next();
}