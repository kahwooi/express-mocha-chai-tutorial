var express = require('express'),
app = express(),
PORT = 3000;

app.get('/', function(req, res, next){
    res.json({
        status: "success",
        data: {
            person: {name: "kelvin", age: 12}
        }
    });
});

app.listen(PORT, function(){
    console.log('Sever listen to port: ' + PORT);
});

module.exports = app;