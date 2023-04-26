const today = new Date();
const thisYear = today.getFullYear();
//console.log("this is year!", thisYear);
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `Yulia Lopatko & copy ${thisYear} &#9816`;
footer.appendChild(copyright);

const skills= [
  "HTML",
  "Node.js",
  "Cypress",
  'Figma',
  'API',
  'CSS', 
  'JavaScript',
  'DevTools',
  'Postman',
];

const skillsSection = document.getElementById('skills')
const skillsList = skillsSection.querySelector('ul')

for(let i = 0; i< skills.length; i++){
  let skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
};

const messageForm = document.forms.leave_message;

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    let usersMessage = event.target.usersMessage.value;

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href = "mailto:${usersEmail}">${usersName}</a><span>says: ${usersMessage}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", (event) => {
        const entry = event.target.parentNode;
        entry.remove();
    });
        newMessage.appendChild(removeButton);
       // newMessage.appendChild(editButton);
        messageList.appendChild(newMessage);
        //editForm.remove();
    //});

    //newMessage.appendChild(editButton);

    messageForm.reset();
});

const dateFixer = (date) => {
    return date.slice(0, 10);
} 
// Method for gettiing info from GitHub
fetch("https://api.github.com/users/engineeryulia/repos")
.then((response) => {
if (!response.ok) {
throw new Error(response.statusText);
}
return response.json();
})
.then((repositories) => {

// selecting ul in projects section
const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul')

//iterating over repo array to display repo data
for(let i = 0; i < repositories.length; i++) {
const project = document.createElement('li');

const projectLink = document.createElement('a');
projectLink.innerText = repositories[i].name;
projectLink.href = repositories[i].html_url;
projectLink.target = "_blank";

const projectDescription = document.createElement('p');
projectDescription.innerText = repositories[i].description;

const projectDate = document.createElement('p');
projectDate.innerText = dateFixer(repositories[i].pushed_at);

project.appendChild(projectLink);
project.appendChild(projectDate);
project.appendChild(projectDescription);
projectList.appendChild(project);

//styling
project.classList.add('projectStyle');

}
})
.catch((error) => {
console.warn(error);
const projectSection = document.getElementById('projects');
const errorMessage = document.createElement('h1');
errorMessage.innerText = `There was an error! Github error message: ${error.message}`;
projectSection.appendChild(errorMessage);
}); 