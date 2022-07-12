const firebaseConfig = {
    apiKey: "AIzaSyCZT_eTIa0yXsNInYRajbT1xD8CUZ4O1xo",
    authDomain: "projectttttt-33287.firebaseapp.com",
    databaseURL: "https://projectttttt-33287-default-rtdb.firebaseio.com",
    projectId: "projectttttt-33287",
    storageBucket: "projectttttt-33287.appspot.com",
    messagingSenderId: "1032829740710",
    appId: "1:1032829740710:web:c734610a85642372a6b667"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var contactform = firebase.database().ref("entries");// input
  function fun(){
  var x = document.getElementById("inp").value; // inp is name for time being
  var z = document.getElementById("inpu").value; //inpu is article written for time being
  var a = document.getElementById("inpu2").value;
  var b = document.getElementById("inpu3").value;
  var c = document.getElementById("nammer").value;if(c=="engineer"){var d = "⚙️";}else if(c=="medicine"){var d ="💊";}else{var d = "💉";} 
  var timey = -Date.now();
  var y = contactform.push();
  y.set({x:x, z:z,a:a,b:b,d:d, timey:timey}); 
  document.getElementById("formy").reset();
  document.location.reload(true);
  } 
  function fut(){
    if(document.getElementById("inp").value==""){
      alert("compulsory fields chusko ra bsdk");
    }
    else{
      fyi();
    }
  }
  function fyi(){
    var x = confirm("confirm chesko ra bsdk!");
    if(x==true){
      fun();
    }
    else{
      alert("take your taim");
    }
  } 