
const today = new Date();
console.log(today);

const thisYear = today.getFullYear();
console.log(thisYear);

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Christie Agbaosi ${thisYear} &#9889`;
footer.appendChild(copyright);

const skills = ["Javascript",
    "Microsoft Word",
    "PowerPoint",
    "Excel",
    "Google Docs",
    "Slides",
    "Sheets",
    "Bilingual(English, Spanish)"];

const skillsSection = document.querySelector('#skills');

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
// Using "DOM Selection", select the "leave_message" form by name attribute and store it in a variable named messageForm

const messageForm = document.forms.leave_message;
//Add an event listener to the messageForm element that handles the "submit" event
//hint: addEventListener method
messageForm.addEventListener('submit', function(event){
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    console.log(usersEmail,usersMessage, usersMessage);
    
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = 
    `<a href = "mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>`
    ;
    
    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function(event){
        const entry = event.target.parentNode;
        entry.remove();

    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});
// Append the newMessage to the messageList element

//Append the removeButton to the newMessage element hint: appendChild method
// Inside the callback function, find the button's parent element using DOM Traversal 
//(hint: parentNode property) and store it in a variable named entry
// Remove the entry element from the DOM (hint: remove method)

// On the next line, set the inner HTML of your newMessage element with the following information:
// <a> element that displays the "name" and links to the "email" (hint: use the mailto: prefix)
// <span> element that displays the "message"

// Create a new list item (li) element and store it in a variable named newMessage
// Using "DOM Selection", query the messageSection (instead of the entire document) to find the <ul> element and store it in a 
// variable named messageList
// Open index.js and start inside the event listener callback function on the line above where you reset the form
//  Using "DOM Selection", select the #messages section by id and store it in a variable named messageSection
// Inside the callback function, above the other code you just wrote, add a new line to prevent the default refreshing behavior of the "submit" event
// hint: preventDefault method
// Inside the callback function for your event listener, create a new variable for each of the three form fields and retrieve the value from the event
// hint: event.target is the form, event.target.usersName is the first input element


