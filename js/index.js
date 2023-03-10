const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `Anna Iurchyk ${thisYear}`;
footer.appendChild(copyright);

const skills = ['HTML', 'CSS', 'JavaScript'];
const skillSection = document.getElementById('skills');

for(let i = 0; i <= skills.length; i++) {

    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillSection.appendChild(skill);
}

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
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});

