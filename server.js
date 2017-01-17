var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.set('json spaces', 40);

app.get('/', function(req,res){
    
    var os = req.headers["user-agent"].split(/[\(\)]/)[1]; 
    os = os.trim(); 
    
    var language = req.acceptsLanguages()[0];
    var ipv4 = req.headers["x-forwarded-for"];

    var resObj = { 
        ip : ipv4,
        Language : language,
        OS : os
    };

    res.json(resObj);
    console.log('Hello World!');
});

app.listen(port, function(){
   console.log('listening on port ' + port); 
});