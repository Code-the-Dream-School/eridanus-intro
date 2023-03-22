const today = new Date();
const thisyear = today.getFullYear();
const footerEl = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = 'Rojina Pradhan '+ thisyear;
footerEl.appendChild(copyright);

const skills = ["MS Office", "Canva", "Adobe", "HTML","JavaScript","Quadralingual","Social media tools"];
const skillSection = document.getElementById("skills");
const skillsList = skillSection.querySelector ("ul");
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

let messageSection = document.getElementById("messages");
messageSection.style.display = "none";
messageForm.addEventListener('submit', event => {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const message = event.target.message.value;
});
const messageForm = document.forms.leave_message;
const messageList = messageSection.querySelector('ul');
  // create a new list item (li) element and store it in a variable named newMessage
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${message}</span>`;
  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.type = 'button';
  removeButton.addEventListener('click', () => {
    
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();

