const data = require("./db.json");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port);
// "start": "node index.js"
// "start": "json-server --watch db.json --no-cors true --port 4000"
