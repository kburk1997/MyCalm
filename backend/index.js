require('dotenv').config();
var http=require('http');
var express=require('express');
var app=express();

const giphy_key=process.env.GIPHY_API_KEY;

var tag_list=[
  'putty',
  'fidget',
  'fidget%20spinner',
  'satisfying',
  'kinetic%20sand',
  'slime',
  'fidget%20cube',
  'pottery',
  'paint%20mixing',
  'oobleck',
  'corgi',
  'puppy',
  'cat',
  'kitten',
  'bunny',
  'golden%20retriever',
  'mesmerizing',
  'shiba',
  'cats',
  'corgis',
  'dog',
  'dogs',
  'bunnies',
  'geometry',
  'breathing%20exercise',
  'perfect%20loop'

];

var shuffle=require('shuffle-array');

app.get('/gif/:tag', function(req,res){
  var url='http://api.giphy.com/v1/gifs/random?tag='+req.param('tag')+'&api_key='+giphy_key+'&rating=g';
  var request=http.get(url,function(response){
  var str="";
     response.on('data', function (chunk) {
                     str += chunk;
                             });

             response.on('end', function () {

               //console.log(JSON.parse(str).data);
               res.send(JSON.parse(str).data); 
             });
  });

});

app.get('/startqueue', function(req,res){

  var shuffled_tags=shuffle(tag_list);
  
    for(var i = 0; i<shuffled_tags.length; i++){
   var url='http://api.giphy.com/v1/gifs/random?tag='+shuffled_tags[i]+'&api_key='+giphy_key+'&rating=g';
  var request=http.get(url,function(response){
  var str="";
     response.on('data', function (chunk) {
                     str += chunk;
                             });

             response.on('end', function () {

               //console.log(JSON.parse(str).data);
               res.write("", JSON.parse(str).data); 
             });
  });   
    }
  
});

var server = app.listen(8081, function () {

    var host = server.address().address
        var port = server.address().port

          console.log("Example app listening at http://%s:%s", host, port)

});

