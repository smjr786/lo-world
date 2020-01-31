var express = require('express');
var app = express();
var tmptest = '';
var admin = require("firebase-admin");
// var serviceAccount = require("path/to/serviceAccountKey.json");
 // var firebase = require("firebase");


var request = require('request');
request('http://marksmandigital.com/app_server/FetchDrycleanData.php', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    data = JSON.parse(body)[0];
        console.log("Successfully sent message:", response);

  }
});

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "notification-430d4",
    clientEmail: "firebase-adminsdk-bayyc@notification-430d4.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDPn5btV5fHNICv\n8go4uGN+S3sF9HktJagTUXRi46NhvMpZRwCvG0AlWccXrWeANqF3Vr5O4HI9JFc6\nn/UrBKPIYEJdxQq3OWGtC0u80ttYeYZgipTY+/eG1qKLDcIBZu1aF/CHNQ4m5hTm\nS0diiDT/rfDb5UEZMzoCplVwqOs+9UahZXulEbNwvrlRuLerne7J3ONTk0mF9OTO\nKDtJB623kiIzeNI84zSdd5SITxZnJvE9dxLoexHHRT+sk0+Lp/XdBT1o2lPxw48k\nzYKtaMW2xASqsrGbuXsH/1V0qs60O9OedCyQ+q/iiw79hHgvOWOecBxzhfjauM2C\nre9KDQO1AgMBAAECggEAA+JOZn4+/qECz0fN3SXF5rTuxju+kJOlw0bA0KDFi6yG\ndIkZgC0YVBqL2OuLhiB/gMYEpWEZgf9OCnC3m2hoz/TNCQgInUjbhOszLYMcS1lq\npB+zjSOZi9I0FDnbqT8NraPJAh6B90RSm8RIv5UguK++U77EKv6EVUxbSNJAJFtV\nnl5wINXZYsm3DYGGrCoX2Vcf1hSLYjRP90OUiU9ecDJiNBziIuwffYSj3g98hJza\n6cvt2dMC4whAj2S+fc4JtWlCSP60d78YN33ouEdP2dhxS55H5TwDa5swUhfzC/EJ\nVxaO/FPX4jlzDtiX/G9Vb/N1nap3+8LSlpav/Z/fQQKBgQD9+TvoVicKkp/ebutO\nQXZ6GMlyREq56B2G0JSPSJxGQW5jp6AR0jcqVSM6P45tMcrWwTlrb1pCATURcUuH\nIorM5T4wOGwsjEWn9SdYToinf3dMkLaMejmWkqwAzSsVM6hJWtC2AW/NkhO3Me6/\nPDmEX7K4KB9OVevs0RJ8Rok6+QKBgQDRR65GM1vJufm4YuPtB2+zc+aCxAhcF9lr\ncVoVDjiB3LO9MJQ1ztijn5WhIgyL9Febz5auNOBZlCD4bsrwYygepHgvYYCkK4jE\n0aighHRYcN6ltq4m5w1UCrSmqEcbqlIfvttomCOwL50UFFK60pE62lL9U1Fw1ucd\nXxHukEfhnQKBgDhnkOmBsLwFYmIJKlM/8KsfNCYfiqUNKvmU+1lzG9nykCyrvr4W\nfM/3BpLaKKyRoWXelf0JRvdfw0Rzb/28Ky1kQFJ/RW8DXDj4FlvjXTAt+/XSMeiz\nAHUzb+Xhqw7TYS2hcLbrTMRQC/bkrQxluLRweIWzy3gfVv1KVZuqIrIpAoGACwrf\nNTEMjM5VUNdW83DLAgsBhLDXSBSyEis+95FyhdehXEAt8dDiOW/4MzJaux+/Z6dC\nahq8I73fJ3yhFKIGwecnuEhKw17QrqHpZd7XTLtX5CKJeeADIgYWlhyW8+y+vJIT\nfadZarh4b1DLNLRbmWFfs6Irz+pm83PKvG28fTkCgYA9WspH0ricjLHTXOe8nhHc\nK+OT3HHoha4lkERfp24lgxd4o+V1dU8KXSCfD1IX1R4RKGgpmKnFTYwsqu4cWo7v\n2KofhMmX6BNOmDfEPOz9xY4NluBsQ+3kYqr7nlw60kQqzQ+zpgjaLiMdhjgq1vdf\nYkSL9uwCs//FiO4fr3qP4w==\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://notification-430d4.firebaseio.com/"
});

var db = admin.database();
var sync = db.ref("/promotions");
 // var sync = ref.child('promotions');
 

sync.on('child_changed', function(data) {
        console.log(data.val()); 
}); 

// This registration token comes from the client FCM SDKs.
var registrationToken = "eCGdHO3B8LU:APA91bHR2WT65s_djUxFeNR0iWVWBBOiq7BSkEqBO5Ga5xXuqj4uUUww9ALQ_5dhdFZ0M5mmz9hD78YjNOvv-lhHmjmRwkdApTM3YDAC7jRXFFPNpMsAmUS1CObhP4yZHr4sXmkSPwHw";
var condition = "'stock-GOOG' in topics || 'industry-tech' in topics";
// See the "Defining the message payload" section below for details
// on how to define a message payload.
var payload = {
  notification: {
    title: "up 1.43% on the day",
    body: " gained 11.80 points to close at 835.67, up 1.43% on the day."
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

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("tmptest" )
   console.log("Example app listening at http://%s:%s", host, port)
})