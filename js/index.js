
const today = new Date();
const thisYear = today.getFullYear();
const footerContact = document.querySelector('#footer_copy');
const copyright = document.createElement('p');
copyright.innerHTML = 'Anastasia Klyucharova &copy ' + thisYear;
footerContact.appendChild(copyright);

let skills = ['Agile', 'HTML', 'CSS', 'Windows 365', 'Customer service', 'Digital marketing'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i ++) {
const skill = document.createElement('li');
skill.textContent = skills[i];
skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName('leave_message');

console.log(messageForm);

messageForm[0].addEventListener("submit", function answer(evt){
    evt.preventDefault();
    const usersName = evt.target.name.value;
    const usersEmail = evt.target.email.value;
    let usersMessage = evt.target.userMessage.value;

    console.log(usersName, usersEmail, usersMessage);
    
    const messageSection = document.getElementById("messages");
    // console.log(messageSection);
    const messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href=mailto:${usersEmail}>${usersName}</a><span> wrote: ${usersMessage} </span>`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.setAttribute('type','button');
    removeButton.className = 'removebutton';
        removeButton.addEventListener('click', (event)=>{
            const entry = event.target.parentNode;
            console.log(entry);
            entry.remove();
            if(messageList.childElementCount === 0){
                messageSection.style.display = 'none';
            }
        });
        messageSection.style.display = "block";
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

//    Edit Form
const editButton = document.createElement("button");
editButton.textContent = "edit";
editButton.type = "button";
editButton.className = "edit-button";

const editForm = document.createElement("form");
const editInput = document.createElement("input");
editInput.type = "text";
editInput.value = usersMessage;
const saveButton = document.createElement("button");
saveButton.textContent = "Save";
saveButton.type = "submit";
editForm.append(editInput, saveButton);

editButton.addEventListener("click", () => {
    newMessage.replaceWith(editForm);
});

editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    usersMessage = editInput.value;
    newMessage.innerHTML = `
    <a href = "mailto:${usersEmail}">${usersName}</a>
    <span>says: ${usersMessage}</span>
    `;
    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);
    editForm.remove();
});

newMessage.appendChild(editButton);
   
    messageForm[0].reset();
});

// AJAX  request creat

// var githubRequest = new XMLHttpRequest();
// githubRequest.open('GET',"https://api.github.com/users/AnastasiaKey/repos");
// githubRequest.send();

// // selector for propogate data


// githubRequest.addEventListener('load', () => {
//     const repositories = JSON.parse(githubRequest.responseText);

//     console.log(repositories);

//     const projectSection = document.getElementById('projects');
//     const projectList = projectSection.querySelector('ul');

//     for(let i = 0; i < repositories.length; i++) {
        
//         const project = document.createElement('li');
//         project.innerText = repositories[i].name;

//         // console.log(project);
        
//         const projectLink = document.createElement("a");

//         projectLink.innerText = repositories[i].name;

//         // console.log(repositories[i].name);
//         console.log(projectLink);
//         projectLink.href = repositories[i].html_url;


//         projectLink.target = "_blank";

//         project.appendChild(projectLink);
//         projectList.appendChild(project);


//              //styling
//              project.style.listStyleType = "none";
//              project.style.borderBottom = "2px solid aqua";
//              project.style.margin = "1rem 0";

//     }


// });


//-----------------------------------------------------------------
//utility function for getting date from github data
const dateFixer = (date) => {
    return date.slice(0, 10);
};

// Method for getting info from github
fetch("https://api.github.com/users/AnastasiaKey/repos")
    .then((response) => response.json())
    .then((repositories) => {
        console.log(repositories);
        // selecting ul in projects section
        const projectSection = document.getElementById("projects");
        const projectList = projectSection.querySelector("ul");
        // iterating over repositories array to display repo data
        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");

            const projectLink = document.createElement("a");
            projectLink.innerText = repositories[i].name;
            projectLink.href = repositories[i].html_url;
            projectLink.target = "_blank";

            const projectDescription = document.createElement("p");
            projectDescription.innerText = repositories[i].description;

            const projectDate = document.createElement("p");
            projectDate.innerText = `last pushed : ${dateFixer(
                repositories[i].pushed_at
            )}`;

            const language = document.createElement("p");
            language.innerText = repositories[i].language;

            project.appendChild(projectLink);
            project.appendChild(projectDate);
            project.appendChild(projectDescription);
            project.appendChild(language);
            projectList.appendChild(project);

            //styling
                project.style.listStyleType = "none";
                project.style.borderBottom = "0.5px solid aqua";
                project.style.margin = "1rem 0";
        }
    })
    .catch((error) => {
        console.warn(error);
        const projectSection = document.getElementById("projects");
        const errorMessage = document.createElement("h1");
        errorMessage.innerText = `There was an error! Github error message: ${error.message}`;
        projectSection.appendChild(errorMessage);
    });