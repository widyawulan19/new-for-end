const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const app = express();
const jsonServerApp = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

jsonServerApp.use(cors());
jsonServerApp.use(jsonServer.bodyParser);
jsonServerApp.use(middlewares);
jsonServerApp.use(router);

// Mount the JSON Server under the root route /
app.use('/', jsonServerApp);

//serve the image using express
app.use('/images', express.static(path.join(__dirname, 'images')));

// Additional Express routes and server-side logic can be added here
// For example, serving static files, handling authentication, etc.

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});