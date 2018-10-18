  
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
        tense = "";
        if(state=="0"){
            document.getElementById("doorstate").innerHTML = "Closed";
            document.getElementById("statetxt").innerHTML = "Everything is OK";
            document.getElementById("stateimg").src="./img/good.png";
            tense = " last";
        }else if(state=="1"){ 
            document.getElementById("doorstate").innerHTML = "Open";
            document.getElementById("statetxt").innerHTML = "Room door open";
            document.getElementById("stateimg").src="./img/warn.png";
        }else{
            document.getElementById("doorstate").innerHTML = "Unknown";
            document.getElementById("statetxt").innerHTML = "Sensor error";
            document.getElementById("stateimg").src="./img/warn.png";
        }
        var lastopen = new Date(data["lastopen"]);
        
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var hours = lastopen.getHours();
        var suffix = "AM";
        if(hours == 0){
            hours = 12;
        }else if(hours > 12){
            hours = hours - 12;
            suffix = "PM";
        }else if(hours == 12){
            suffix = "PM";
        }
        document.getElementById("doorlastopen").innerHTML = "Door"+tense+" opened on " + months[lastopen.getMonth()] + " " + lastopen.getDate() + " at " + hours + ":" + lastopen.getMinutes() + suffix;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
});

  