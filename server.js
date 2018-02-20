//set up
var myexpress = require('express');
var app = myexpress();
var mymongoos = require('mongoose');
var mymorgan = require('morgan');
var bodyparser = require('body-parser');
var methodOverride = require('method-override');
var Todo = mymongoos.model('Todo',{
            text: string
});

//Server
//API
//get all todos
app.get('api/get', function(req, res){

    Todo.find(function(err, mytodos){
            if (err)
                res.send(err);

            res.json(mytodos);
    });
});
// Configuration

mymongoos.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu');

app.use(myexpress.static(__dirname + '/public'));
app.use(mymorgan('dev'));
app.use(bodyparser.urlencoded(
    {'extended' : 'true'}
));
app.use(bodyparser.json());
app.use(bodyparser.json(
    {
    type: 'application/vnd.api+json'        
    }
));
app.use(methodOverride());
app.listen(8080);
console.log("App listening on port 8080");


