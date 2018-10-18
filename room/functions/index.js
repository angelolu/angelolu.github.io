const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp();

exports.doorstate = functions.https.onRequest((req, res) => {
    var state = req.body;
    if(state == "1"){
        var curTime = Date();
        return admin.firestore().collection('sensors').doc('door').set({state: state, lastopen: curTime}).then((writeResult) => {
            // Send back a message that we've succesfully written the message
            return res.json({result: `Message added.`});
          });
    }else{
        return admin.firestore().collection('sensors').doc('door').update({state: state}).then((writeResult) => {
            // Send back a message that we've succesfully written the message
            return res.json({result: `Message added.`});
          });
    }
    
});
  