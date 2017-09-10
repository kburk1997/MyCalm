require('dotenv').config();
var http=require('http');
var express=require('express');
var app=express();

var body_parser=require('body-parser');
app.use(bodyParser.json());
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

var tag_scores={
  'putty':0,
  'fidget':0,
  'fidget%20spinner':0,
  'satisfying':0,
  'kinetic%20sand':0,
  'slime':0,
  'fidget%20cube':0,
  'pottery':0,
  'paint%20mixing':0,
  'oobleck':0,
  'corgi':0,
  'puppy':0,
  'cat':0,
  'kitten':0,
  'bunny':0,
  'golden%20retriever':0,
  'mesmerizing':0,
  'shiba':0,
  'cats':0,
  'corgis':0,
  'dog':0,
  'dogs':0,
  'bunnies':0,
  'geometry':0,
  'breathing%20exercise':0,
  'perfect%20loop':0

};

var shuffle=require('shuffle-array');

app.get('/gif/:tag', function(req,res){
  res.setHeader('Access-Control-Allow-Origin:','*');
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
  var gif_list=[];
  var shuffled_tags=shuffle(tag_list);
  res.send(shuffled_tags); 
  
});


var server = app.listen(8081, function () {

    var host = server.address().address
        var port = server.address().port

          console.log("Example app listening at http://%s:%s", host, port)

});

