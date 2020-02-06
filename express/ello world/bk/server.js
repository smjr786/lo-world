var express = require('express');
var app = express();
var tmptest = '';
var admin = require("firebase-admin");
// var serviceAccount = require("path/to/serviceAccountKey.json");
 // var firebase = require("firebase");
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "caltex-532e0",
    clientEmail: "firebase-adminsdk-gm91m@caltex-532e0.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCw5307SsduAKSG\n3y84nE5Dj2dMMPmm6Dh41T+ZOcI3WnDrShtJ6FjOjNydUv9RdSGxrhEc1XQqwnxH\nTwoVZzpX1Yg5orLZLerj3HJk/85nCNYPCmKZKGq879TbHTa7WAtcWAQM7/KAiost\nCiKeYLIAL4OXy3fRetPThUXC8f5+3J8SruMlEUe3NRvJxJGZ8oLJ1wOlwhcYoyZx\nUmDtmdDoXgil3l8lTgSwhq4QE2eoI+Iubn+ZgxdkZZa4P9f4r0J+S07pocB2aJxi\nEjMVaecR/dDzjIcHfM3NoIKWV2DbgUhWqFH2HC3iN26plEnrNsFJa97oJJSEpxPt\nvxvuYua9AgMBAAECggEAYDQDbpMkETZYQuBslaSrCyKZUl3v5kyzKUMO6wz2CZQt\nhEcwv+iTIwCHmSbhojLIuA+pTrzmB7rsSvs4yJryp4GAK5fHG0RVUMU5kKNsY6vy\nfQtww0mvgkAKyX4BnbArvXQ//6kdf7nYJg409VwwcNll/s6vwkPBnm4DmhhwBhyc\nh1upoHm1M6MBONQnnvyApJIUr3BTq92BeyIIrp1UfiPfgXyoxUTI+3aEyGC+/mZL\nCDJSH1jLdfusJxRrcQUnx7G7weGyJWIgWKOOQ35Lr8/MPWQu/dvj9d15Y3dGgUkF\nAlAPZMjNSeOC/6d5UyXbvjYphekihpfdgXehHoTbIQKBgQDjunoRCyFvDSN+V3KQ\nQuOkEzw2VpE0Ps9AEc/A2XHlQ3+xs7mB8F1aLFsFwkQjdHjgkxwu5cOcXj5O8Y1q\noxt8FJyUsSTfKM599UWL886daJ7kk2s0Eo3uerJs6Ka7/ybvnJPVLf8Me/ii5y82\nSgmmhXFZR+UbO58BnfXwEsnPIwKBgQDG3cAMOYSUISG6NVAbD6ilIIxBM81k+cTd\nDzVd7v3HA8uuTzR6Ww5UbyR5BPaw3xnmjWB9+K7pML15hRHMZbhfohnQjEm1aFlu\nZPTT5vYHTglGCe6NYeuy5Fwh+AsFG65e2f5LVAk7ssftH3fNgVjmVF7ppAV9bLL+\n/o2QJRvAnwKBgQDL3tKO1Ycd8wY2gjUG30sKRUofX0ppGl3R/uAdxs0HMXFs9ff6\nUuRP6Oun8S2tDAV3D1wow/tlzp07cVZoBBOD9rPjDd9zhQWvj9euHht3ogS1nyBX\nItE7kU6Q34r9PMRvuJ5EOARf+dAyjoMeuBOBp289PXbm9W45NV/KiBdxPwKBgAmE\nEuyC1BVCgJqocmzZEvjT1eJI2Es8qG7ri2IzTXF4fQaaQ6iXMthXeSdRVXyhMFwX\n58YfYD9IVci61V8yfuAUoaeZDu3fUGg37H83Tg6LbWYsk32wcdbdlosJk31rFaz0\nQXbZTpfMtkRifRkYV2iuINyNPLYDvYz2IVAEdo+BAoGAaqmWmmN20zKNX0Ca0HO6\n13+lTCNSipT6meLm8d/4dx59I61Tv4GSUYVsKg+1LflnrXA49R6tXrq+lDPZFoF4\nziQmdcYv+j7OxcMrkubuV2bsQYc3G4Xt69LP6jxOyJBMXrMIroMeNJ4vmg2rpIBl\ninXR9SV+ZMwFPbtx7N6Me2Y=\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://caltex-532e0.firebaseio.com"
});

var db = admin.database();
var sync = db.ref("/promotions");
 // var sync = ref.child('promotions');
 

sync.on('child_changed', function(data) {
        console.log(data.val()); 
}); 


// This registration token comes from the client FCM SDKs.
var registrationToken = "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...";

// See the "Defining the message payload" section below for details
// on how to define a message payload.
var payload = {
  data: {
    score: "850",
    time: "2:45"
  }
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().sendToDevice(registrationToken, payload)
  .then(function(response) {
    // See the MessagingDevicesResponse reference documentation for
    // the contents of response.
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });


// var ref = firebase.database().ref();
 // var sync = ref.child('promotions');
// const messaging = firebase.messaging();


app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("tmptest" )
   console.log("Example app listening at http://%s:%s", host, port)
})