const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = ` Alzhan Braliyev &copy ${thisYear}`;
footer.appendChild(copyright);

//Putting skills in HTML in ul and li
const skills = ["Java Script", "HTML", "CSS", "Node.js", "Mocha", "React", "MySQL"]; 
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
// Creating Messages form with input fields
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

//Remove button and disappearing Messages section
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
        if (messageList.childElementCount === 0) {
            messageSection.style.display = "none";
        }
    });

    messageSection.style.display = "block"
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

//Creating Edit button and new input prompt
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
    
    document.querySelector('form').reset();
});