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
};

const serveStatic = express.static(pathToFrontendDist);
const parseJson = express.json();

app.use(logRoutes); //prints every incoming request
app.use(serveStatic); //serve static public/content
app.use(parseJson); // parses incoming requests with body JSON (?)

////////////
//endpoints
////////////

app.get('/api/characters', serveCharacters);
app.get('/api/characters/:id', serveCharacter);
app.post('/api/characters', createCharacter);
app.put('/api/characters/:id', updateCharacter);
app.delete('/api/characters/:id', deleteCharacter);

app.get('*', (req, res, next) => {
    if (req.originalUrl.startsWith('/api')) return next();
    res.sendFile(pathToFrontendDist);
});

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));