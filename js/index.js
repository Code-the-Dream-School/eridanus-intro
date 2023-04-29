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
    'Webdriver IO',
    'GitHub']
    
const skillsSection = document.getElementById("skills")
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
    skill.innerText = skills[i],
    skillsList.appendChild(skill)
}

const messageForm = document.forms.formID;

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const usersName = event.target.name.value;
    const usersEmail = event.target.email.value;
    let usersMessage = event.target.message.value;

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");

    newMessage.setAttribute("id", "new-message")


    newMessage.innerHTML =
        `<a href = "mailto:${usersEmail}">${usersName}</a>
    <span>says: ${usersMessage} </span>`;

    const removeButton = document.createElement("button")
    removeButton.innerText = "remove"
    removeButton.setAttribute("type", "button")
    removeButton.setAttribute("id", "remove-button")
    removeButton.addEventListener("click", () => {
        const entry = removeButton.parentNode
        entry.remove()
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
})


const formatingDate = (date) => {
    return date.slice(0, 10);
};


let githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/shabaiev/repos");

githubRequest.send();

githubRequest.addEventListener("load", (event) => {
    let repositories = JSON.parse(githubRequest.responseText);
    console.log(repositories);

    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");


    for (let i = 0; i < repositories.length; i++) {
        let project = document.createElement("li");
        project.innerHTML = `<a class = "link"  href="${repositories[i].html_url}">${repositories[i].name}</a>`;
       


        let projectDate = document.createElement("p");
        projectDate.innerText = `last pushed : ${formatingDate(
            repositories[i].pushed_at
        )}`;


        projectList.appendChild(project);
        project.appendChild(projectDate);


        project.style.listStyleType = "none";
        project.style.marginLeft = "10%";
        project.style.marginRight = "5%";
        project.style.padding = "5px";
        project.style.marginTop = "5px";
        project.style.marginBottom = "5px";
        project.style.width = "250px";
        project.style.textAlign = "center";
        projectDate.style.fontSize = "20px";
        projectDate.style.fontStyle = "italic";
        project.style.display = "inline-block";
    }
});