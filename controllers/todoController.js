var data =[{item:'abc'},{item:'bcd'},{item:'bcde'}];
module.exports = function(app){
    app.get('/todo',function(req,res){
        res.render('todo',{todos: data});
    });

    app.post('/todo',function(req,res){
        
    });

};