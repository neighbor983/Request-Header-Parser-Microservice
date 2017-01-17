var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.set('json spaces', 40);

app.get('/', function(req,res){
    
    var os = req.headers["user-agent"].split(/[\(\)]/)[1]; 
    os = os.trim(); 
    
    var language = req.acceptsLanguages()[0];
  
    var remoteAdd = req.connection.remoteAddress; 
    var isIpv6 = remoteAdd.indexOf(':') >= 0;
    var ip = isIpv6 ? remoteAdd.split(':').reverse()[0] : remoteAdd;
 
    
    var resObj = { 
        ip : ip,
        Language : language,
        OS : os
    };

    res.json(resObj);
    console.log('Hello World!');
});

app.listen(port, function(){
   console.log('listening on port ' + port); 
});