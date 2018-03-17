// Initialize Firebase
var config = {
  apiKey: "AIzaSyD-1FtVX8A8Z0KPq22LjzuNHmwWUAl7fmY",
  authDomain: "contact-form-c2d7b.firebaseapp.com",
  databaseURL: "https://contact-form-c2d7b.firebaseio.com",
  projectId: "contact-form-c2d7b",
  storageBucket: "contact-form-c2d7b.appspot.com",
  messagingSenderId: "620614280975"
};
firebase.initializeApp(config);

// Reference message collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);
  
  // Show alert 
  document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  
  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
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
