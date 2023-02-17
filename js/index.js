//Creating a Date object

const today = new Date();
const thisYear = today.getFullYear();


// appending paragraff to the footer
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const unicode = "&copy";
copyright.innerHTML = unicode + " Tatyana " + thisYear;
footer.appendChild(copyright);


// adding list of skills 
 const skills = ["Java", "Java Script", "Type Script", "HTML", "CSS", "SQL"];
 const skillsection = document.getElementById("skills");
 const skillList = document.getElementById("list");
 for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillList.appendChild(skill);
 }


 //Change the colore of the button
 const submitButton = document.getElementById('btn');
 function changeColore() {
   submitButton.style.backgroundColor = "blue";
 }
submitButton.addEventListener("click", changeColore);
console.log(submitButton.parentNode.parentNode);


//Lesson-4-3 selecting form

const messageForm = document.getElementById("leave_message_form");
 messageForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const nameValue = messageForm.querySelector('input[type="text"]').value;
  const emailValue = messageForm.querySelector('input[type="email"]').value;
  const messageVaue = document.getElementById("field_label_message").value;
  //creating Message section
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  const a = document.createElement("a");
  a.innerText = nameValue + " wrote: " + newMessage;
  a.setAttribute("href", emailValue);
  messageList.appendChild(newMessage);
  newMessage.append(a);

  
  messageForm.reset();
 } )
  // const emailValue = "tatkh21@gmail.com";
  // const messageSection = document.getElementById("messages");
  // const messageList = messageSection.querySelector("ul");
  // const newMessage = document.createElement("li");
  // const a = document.createElement("a");
  // a.innerText = "Names";
  // a.setAttribute("href", emailValue);
  // messageList.appendChild(newMessage);
  // newMessage.append(a);
  // console.log(messageList);

 
// const nameField = document.getElementById("field_label_name");
// nameField.addEventListener("click", function (e){
// console.log(e.target.nameField);
// })

// function formElements(e) {
//   const nameField = document.getElementById("field_label_name");
//   nameField.target
//   const emailField = document.getElementById("field_label_emal");
//   console.log(emailField)
//   const messageField = document.getElementById("field_label_message");
//   console.log(messageField)
// }






//Dom manipulation practice

//GetElementById()
const title = document.getElementById('main-heading');
console.log(title);
//GetElementByClass()
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);
//GetElementByTagName()
const tagList = document.getElementsByTagName('li');
console.log(tagList);
// querySelector()

//querySelectorAll()
