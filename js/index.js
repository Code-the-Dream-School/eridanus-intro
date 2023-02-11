// Footer
const fullName = "Greg Curl";
const footer = document.querySelector("footer");

let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement("p");

copyright.innerHTML = ` &copy ${fullName} ${thisYear}`;
footer.appendChild(copyright)
// end Footer

// Skills section
const skills = ["HTML", "CSS", "Ruby", "Rails", "Python"]
const skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul")
// console.log(skillsList);
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = `${skills[i]}`;
    skillsList.appendChild(skill);
}
// end Skills

// Messages
// Hide messages header until ready to use
// pseudo-code here

const messageForm = document.getElementsByName("leave_message")
const messageSection = document.getElementById("messages");
const messageHeader = messageSection.querySelector("h2");
console.log("messageList is " + messageHeader)
function hideMessageHeader() {
    if (messageHeader.innerHTML === "Messages") {
        messageH2.style.display = "block";
    } else {
        messageH2.style.display = "none";
    }
}



document.addEventListener("submit", function(event) {
    event.preventDefault();
    hideMessageHeader()
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value;

    //Start message display

    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}"> ${name}</a> wrote: <span>${message}</span>  `;

    // Remove button (to remove message display)
    const removeButton = document.createElement("button")
    removeButton.innerHTML = "remove"; 
    
    removeButton.addEventListener("click", function(event) {
        // trying with entry variable
        const entry = event.target.parentElement;
        entry.remove();
        // below works also - streamlined code?
        // newMessage.remove();
    });

    //functionality to add the removeButton, newMessage, and reset the form
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm[0].reset();
});
    // End Messages
