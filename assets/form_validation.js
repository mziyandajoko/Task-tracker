const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyBUgOKlT5Z9nKM0LGUyjVt-SFLIxiSyMME",
  databaseURL: "https://mziyandajoko-e806b.firebaseio.com",
  projectId: "mziyandajoko-e806b",
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
