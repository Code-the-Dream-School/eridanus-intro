// Code for Copyright
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement('p');
copyright.innerHTML = 
`<a>&copy; Jose Castillo ${thisYear}</a>`;
footer.appendChild(copyright);

// Code for Skills List 
const skillsSection = document.getElementById("skills");
const skillsList = ["Python", "JavaScript", "Digital Marketing", "Excel"];
let skills = skillsSection.querySelector("ul");

// Loop for Array -- List
for( let skill of skillsList ) {
    let newList = document.createElement("li");
    newList.textContent = skill;

    skills.appendChild(newList);
}

// Code for Leave Message Section 
const messageForm = document.getElementById('leave_message');
const messageSection = document.getElementById('messages');
const messageList = document.getElementById('messageList');

// Event Listener for form submit
messageForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Retrieve form field values
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Log form field values
  console.log('Name:', usersName);
  console.log('Email:', usersEmail);
  console.log('Message:', usersMessage);

  // Display messages in list
  const newMessage = document.createElement('li');
  newMessage.innerHTML = 
  `<a href="mailto:${usersEmail}">${usersName}</a>
  <span>${usersMessage}</span>`;

  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.type = 'button';
  removeButton.addEventListener('click', function() {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  // Clear form fields
  messageForm.reset();
});

// Fetch Github Repositories 
/*const githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/J-C-X/repos');
githubRequest.send();

  githubRequest.addEventListener('load', function() {
  const repositories = JSON.parse(this.response);
  console.log(repositories);

  const projectSection = document.querySelector('#projects');
  const projectList = projectSection.querySelector('ul');

  for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement('li');
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
  }

  //githubRequest.send();
  githubRequest.setRequestHeader('User-Agent', 'J-C-X');

}); 
 */// End of comment for Lesson 6-1

// Fetch API's   
const gitHubApiUrl = 'https://api.github.com/users/J-C-X/repos';

fetch(gitHubApiUrl, {
  headers: {
    'User-Agent': 'J-C-X'
  }
})
  .then((response) => response.json())
  .then((repositories) => {
    console.log(repositories);

    const projectSection = document.querySelector('#projects');
    const projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li');
      //project.innerText = repositories[i].name;
      project.innerHTML = `<a href="${repositories[i].html_url}" target="_blank">${repositories[i].name}</a>`;
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });





