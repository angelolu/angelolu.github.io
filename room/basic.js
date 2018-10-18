  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  
  // Disable deprecated features
  db.settings({
    timestampsInSnapshots: true
  });

  var docRef = db.collection("sensors").doc("door");

docRef.onSnapshot(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        data = doc.data();
        state = data["state"];
        if(state=="0"){
            document.getElementById("doorstate").innerHTML = "Closed";
            document.getElementById("statetxt").innerHTML = "Everything is OK";
            document.getElementById("stateimg").src="./img/good.png";
        }else if(state=="1"){ 
            document.getElementById("doorstate").innerHTML = "Open";
            document.getElementById("statetxt").innerHTML = "Room door open";
            document.getElementById("stateimg").src="./img/warn.png";
        }else{
            document.getElementById("doorstate").innerHTML = "Unknown";
            document.getElementById("statetxt").innerHTML = "Sensor error";
            document.getElementById("stateimg").src="./img/warn.png";
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
});

  