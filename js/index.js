const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `Illia Shabaiev &#169 ${thisYear} &#x2658;`;
footer.appendChild(copyright);
const skills = ['JavaScript',
    'HTML',
    'CSS',
    'Cypress',
    'Webdriver IO']
    
const skillsSection = document.getElementById("skills")
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}

const messageForm = document.forms.leave_message;

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const usersName = event.target.name.value;
    const usersEmail = event.target.email.value;
    let usersMessage = event.target.message.value;

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");


    newMessage.innerHTML =
        `<a href = "mailto:${usersEmail}">${usersName}</a>
    <span>says: ${usersMessage} </span>`;

    messageList.appendChild(newMessage)
    messageForm.reset();

    const removeButton = document.createElement("button")
    removeButton.innerText = "remove"
    removeButton.setAttribute("type", "button")
    document.body.appendChild(removeButton)
    removeButton.addEventListener("click", () => {
        const entry = removeButton.parentNode
        entry.remove()
    })
    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)
})