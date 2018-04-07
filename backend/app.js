'use strinct';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todoRouter = require('./router/todo-router');
const PORT = process.env.PORT || 3000;
const logger = require('express-logger');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));
console.log(__dirname + '../public');
app.use('/todos', todoRouter);
app.use(logger({
    path: "./logfile.txt"
}));

app.listen(PORT, () => {
    console.log('listne');
    console.log(PORT);
});
