
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



