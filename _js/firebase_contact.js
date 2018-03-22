// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDCA5gAzzMWkVU3JoQUO8NmsgWIjmrgX_I",
    authDomain: "contact-form-kevinyum.firebaseapp.com",
    databaseURL: "https://contact-form-kevinyum.firebaseio.com",
    projectId: "contact-form-kevinyum",
    storageBucket: "contact-form-kevinyum.appspot.com",
    messagingSenderId: "604221951813"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
  
  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');
  
  // Save message
  saveMessage(name, email, message);
  
  // Show alert
  document.querySelector('.alert').style.display = "block";
  
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = "none";
  },3000);
  
  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}