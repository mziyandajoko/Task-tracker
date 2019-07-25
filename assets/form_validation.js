var firebase = require('firebase');
var firebaseConfig = {
  apiKey: "AIzaSyBUgOKlT5Z9nKM0LGUyjVt-SFLIxiSyMME",
  authDomain: "mziyandajoko-e806b.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "mziyandajoko-e806b",
  storageBucket: "mziyandajoko-e806b.appspot.com",
  messagingSenderId: "899678547167",
  appID: "app-id",
};

//refrencing message collrction

const messagesRef = firebase.database().ref('message');

// Listing for form submission
document.getElementById('contact_form').addEventListener('submit', formSubmit);

function formSubmit(e){
  e.preventDefault();

const name = getFormVal('name');
const email = getFormVal('email');
const message = getFormVal('message');

 savemessages(name, email, message);
}


// get all form with id at once
function getFormVal(id){
return document.getElementById(id).value;
}

//saving massages
function savemessages(name, email, message){
  const newMessagesRef = messagesRef.push();
  newMessagesRef.set({
    name : name,
    email : email,
    message : message,
  });
}
