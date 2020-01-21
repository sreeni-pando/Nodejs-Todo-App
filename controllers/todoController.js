var data =[{item:'abc'},{item:'bcd'},{item:'bcde'}];
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){
    app.get('/todo',function(req,res){
        res.render('todo',{todos: data});
    });

    app.post('/todo',function(req,res){
    data.push(req.body);
    res.json(data);
        
    });

};