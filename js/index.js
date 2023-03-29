const today = new Date();
const thisYear = today.getFullYear();
console.log("this year",thisYear);
const footer = document.querySelector("footer");//first one of something
const copyright = document.createElement("p");

copyright.innerHTML = `Fany Kreminski &copy${thisYear}`;
footer.appendChild(copyright);

const skills = ["HTML","CSS",".NET","C++","JS","C"];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");   

for(let i=0; i<skills.length; i++){
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message")[0];//<--=document.forms.leave_message -->
messageForm.addEventListener('submit', e => {
    e.preventDefault();

    const usersName = e.target.usersName.value;//target=form
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById("messages");//could be queryselector too
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
   

    newMessage.innerHTML = `
    <a href = "mailto:${usersEmail}">${usersName}</a>
    <span>says: ${usersMessage}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", (event) => {
        const entry = event.target.parentNode;
        entry.remove();
        if (messageList.childElementCount === 0) {
            messageSection.style.display = "none";
        }
    });

    messageSection.style.display = "block";
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    

    messageForm.reset();
});
    
