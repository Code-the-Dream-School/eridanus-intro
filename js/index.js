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
// Messages form
const messageForm = document.getElementsByName("leave_message");
messageForm.item(0).addEventListener("submit", (event) => { 
    event.preventDefault();  
    const nameInput = event.target.name.value; 
    const emailInput = event.target.email.value;
    const messageInput = event.target.message.value;
    console.log(nameInput, emailInput, messageInput); 

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${emailInput}">${nameInput}</a> <span> ${messageInput} </span>`;
    messageList.appendChild(newMessage);

    //Remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    //Edit button
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.type = "button";
    editButton.addEventListener("click", () => {
        let editMessage = prompt("Enter your new message:", `${messageInput}`);
        newMessage.innerHTML = `<a href="mailto:${emailInput}">${nameInput}</a> <span> ${editMessage} </span>`;
        newMessage.appendChild(removeButton);
        newMessage.appendChild(editButton);
    })
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);

    // const messagesHeader = messageSection.getElementsByTagName("h2");
    // if (!messages.hasChildNodes()) {
    //     messageSection.style.display = "none";
    //     messagesHeader.style.display = "none";
    //     document.getElementById("messages").style.display = "none";
    // }
    
    document.querySelector('form').reset();
});