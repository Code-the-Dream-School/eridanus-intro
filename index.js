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

const messageForm = document.getElementsByName("leave_message"); 


messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const userName = event.target.userName.value;
  const userEmail = event.target.userEmail.value;
  let userMessage = event.target.userMessage.value;

  const messageSection = document.getElementById('message')
  const messageList = messageSection.querySelector('ul')
  let newMessage = doument.createElement('li')

  newMessage.innerHTML = `
    <a href = "mailto:${userEmail}">${userName}</a>
    <span>${userMessage}</span>
    `;
  
  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove'
  removeButton.type = 'button'
  removeButton.classList.add('btn_remove')

  removeButton.addEventListener('click', event => {
    const entry = event.target.parentNode
    entry.remove()
    if (messageList.childElementCount === 0) {
      messageSection.style.display = 'none';
    }
  });
  messageSection.style.display = 'block';
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);


  const editButton = document.createElement('button');
  editButton.textContent = 'edit';
  editButton.type = 'button';

  const editForm = document.createElement('form');
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.value = userMessage;
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.type = 'submit';
  editForm.append(editInput, saveButton)

  editButton.addEventListener('click', () => {
    newMessage.replaceWith(editForm);
  })

  editButton.addEventListener('submit', (event) => {
    event.parentDefault();
    userMessage = editInput.value;
  });

  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    userMessage = editInput.value;

    newMessage.innerHTML = `
    <a href = "mailto:${userEmail}">${userName}</a>
    <span>${userMessage}</span>
    `;
    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage)
    editForm.remove();
  })

    messageForm.reset();
});
