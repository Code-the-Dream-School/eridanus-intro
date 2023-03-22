const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('#footer');
const copyright = document.createElement('p');
copyright.innerHTML = 'Anastasia Klyucharova &copy ' + thisYear;
footer.appendChild(copyright);
let skills = ['Agile', 'HTML', 'CSS', 'Windows 365'];
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
    const name = evt.target.name.value;
    const email = evt.target.email.value;
    const message = evt.target.userMessage.value;

    console.log(name, email, message);
    
    const messageSection = document.getElementById("messages");
    // console.log(messageSection);
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href=mailto:${email}>${name}</a><span> wrote: ${message} </span>`;

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
   
    messageForm[0].reset();
});