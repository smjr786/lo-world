var express = require('express');
var app = express();
var fs = require("fs");
var tmptest = '';
var bodyParser = require('body-parser');
var multer  = require('multer');
var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyBgNdvxkj4a6CgpSmdgCXd00yE7XJ-jcvc",
  authDomain: "caltex-532e0.firebaseapp.com",
  databaseURL: "https://caltex-532e0.firebaseio.com",
  storageBucket: "caltex-532e0.appspot.com",
messagingSenderId: "558358268234"
};
firebase.initializeApp(config);
var ref = firebase.database().ref();
  var sync = ref.child('promotions');
   sync.on('value', function(snapshot) {     
       tmptest ="its working";      
});



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}));
var tmp = multer({ dest: './tmp' });
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;
   
   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
console.log("chalega bhi")
  
   console.log("Example app listening at http://%s:%s", host, port)
})