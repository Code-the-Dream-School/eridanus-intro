<<<<<<< HEAD
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = ` Alzhan B &copy ${thisYear}`;
footer.appendChild(copyright);

const skills = ["Java Script", "HTML", "CSS", "Something else"]; 
const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message");
messageForm.item(0).addEventListener("submit", (event) => {  // messageForm. child item?
    event.preventDefault();  //?
    const nameInput = event.target.name.value; //?
    const emailInput = event.target.email.value;
    const messageInput = event.target.message.value;
    console.log(nameInput, emailInput, messageInput); 

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${emailInput}">${nameInput}</a> <span> ${messageInput} </span>`;
    messageList.appendChild(newMessage);

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    // const editButton = document.createElement("button");
    // editButton.innerText = "edit";
    // editButton.type = "button";
    // editButton.addEventListener("click", function() {
    //     const entry = this.parentNode;
    //     const message = prompt("Enter your new message:");
    //     entry.innerText = newMessage;
    //     nameInput.contentEditable = true;
    //     messageInput.contentEditable = true;
    //     emailInput.contentEditable = true;
    // })
    // newMessage.appendChild(editButton);
    // messageList.appendChild(newMessage);

    // const messagesHeader = messageSection.getElementsByTagName("h2");
    // if (!messageList.hasChildNodes()) {
    //     messageSection.style.display = "none";
    //     messagesHeader.style.display = "none";
    // }
    
    document.querySelector('form').reset();
});
=======
// Footer
const fullName = "Greg Curl";
const footer = document.querySelector("footer");

let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement("p");

copyright.innerHTML = ` &copy ${fullName} ${thisYear}`;
footer.appendChild(copyright)
// end Footer

// Skills section
const skills = ["HTML", "CSS", "Ruby", "Rails", "Python"]
const skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul")
// console.log(skillsList);
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = `${skills[i]}`;
    skillsList.appendChild(skill);
}
// end Skills

// Messages
const messageForm = document.getElementsByName("leave_message")

document.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value;

    //Start message display
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}"> ${name}</a> wrote: <span>${message}</span>  `;

    // Remove button (to remove message display)
    const removeButton = document.createElement("button")
    removeButton.innerHTML = "remove"; 
    
    removeButton.addEventListener("click", function(event) {
        // trying with entry variable
        const entry = event.target.parentElement;
        entry.remove();
        // below works also - streamlined code?
        // newMessage.remove();
    });

    //functionality to add the removeButton, newMessage, and reset the form
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm[0].reset();
});
    // End Messages
>>>>>>> 62064cbdddcacca5da9a24704f1082cca4c03fa5
