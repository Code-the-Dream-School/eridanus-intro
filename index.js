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
  "Customer service",
  'Bisiness',
  'Analitics',
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

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;
    
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    newMessage.innerHTML = `<a href = "mailto:${userEmail}">${userName}</a><span> says: ${userMessage}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});

const dateFixer = (date) => {
    return date.slice(0, 10);
}

// Method for getiing info from GitHub
const gitHubRequest = new XMLHttpRequest();
gitHubRequest.open("GET","https://api.github.com/users/engineeryulia/repos" );
gitHubRequest.send();
gitHubRequest.addEventListener('load', () => {
    const repositories = JSON.parse(gitHubRequest.responseText);
    console.log(repositories);

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

    project.classList.add('projectStyle');

}
});