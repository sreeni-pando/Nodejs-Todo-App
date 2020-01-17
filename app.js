var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

app.set('view engine','ejs');

todoController(app);

app.listen(3000);

console.log('listening at port 3000');


