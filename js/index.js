const today = new Date();
// console.log(today);
const thisYear = today.getFullYear();
// console.log(thisYear);
const footer = document.querySelector('#footer');
const copyright = document.createElement('p');
// console.log(copyright);
copyright.innerHTML = 'Anton Kondakov &copy ' + thisYear;
footer.appendChild(copyright); 
let skills = ['Agile', 'JavaScript', 'HTML', 'CSS' ];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
// console.log(skillsList);

for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName('leave_message');

// console.log(messageForm);

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
    newMessage.innerHTML = `<span><a href=mailto:${email}>${name}</a></span> wrote: ${message}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.setAttribute('type','button');
    
        removeButton.addEventListener('click', (remBtn)=>{
            const entry = remBtn.parentNode;
            console.log(entry);
            removeButton.remove();

        });
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);
   
    messageForm[0].reset();
});

