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