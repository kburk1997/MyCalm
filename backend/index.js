require('dotenv').config();
var http=require('http');
var express=require('express');
var app=express();

const giphy_key=process.env.GIPHY_API_KEY;


app.get('/gif/:tag', function(req,res){
  :wvar url='http://api.giphy.com/v1/gifs/random?tag='+req.param('tag')+'&api_key='+giphy_key+'&rating=g';
  var request=http.get(url,function(response){
  var str="";
     response.on('data', function (chunk) {
                     str += chunk;
                             });

             response.on('end', function () {

               console.log(JSON.parse(str).data);
               res.send(JSON.parse(str).data); 
             });
  });

});

var server = app.listen(8081, function () {

    var host = server.address().address
        var port = server.address().port

          console.log("Example app listening at http://%s:%s", host, port)

});

