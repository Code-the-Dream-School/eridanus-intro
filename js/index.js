// Footer
const fullName = "Greg Curl";
const footer = document.querySelector("footer");

let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement("p");
let image = document.createElement("img");
image.src = "/img/codelogo_v2.svg"

copyright.innerText = `&copy ${fullName} ${thisYear}`
console.log("copyright is: " + copyright);
footer.appendChild(image)
footer.appendChild(copyright)
// end Footer

// Skills section
const skills = ["HTML", "CSS", "Ruby", "Rails", "Python"]
const skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul")
// console.log(skillsList);

skills.forEach(skill => {
    let listItem = document.createElement("li");
    listItem.innerText = skill;
    skillsList.appendChild(listItem);
});
// for (let i = 0; i < skills.length; i++) {
//     let skill = document.createElement("li");
//     skill.innerText = `${skills[i]}`;
//     skillsList.appendChild(skill);
// }
// end Skills

// Messages
const messageForm = document.getElementsByName("leave_message")
const messageSection = document.getElementById("messages");
const messageHeader = messageSection.querySelector("h2");
console.log("messageList is " + messageHeader)
// hide the messages button
messageHeader.style.display = "none";

document.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value;
    messageHeader.style.display = "inherit";
    //Start message display
    const messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerText = `<a href="mailto:${email}"> ${name}</a> wrote: <span>${message}</span>  `;

    // Remove button (to remove message display)
    const removeButton = document.createElement("button")
    removeButton.innerText = "remove"; 
    removeButton.addEventListener("click", () => {
        // const entry = event.target.parentElement;
        // entry.remove();
        // below works as streamlined code
        newMessage.remove();
        messageHeader.style.display = "none";
    });
    // Make the button
    const editButton = document.createElement("button")
    editButton.innerText = "edit";

    editButton.addEventListener("click", () => {
        let editPrompt = prompt("What edit would you like to make? ", `${message}`)
        //const entry = event.target.parentElement;
        //entry.remove();
        // below works as streamlined code
        newMessage.innerText = `<a href="mailto:${email}"> ${name}</a> wrote: <span>${editPrompt}</span>  `;
        newMessage.appendChild(removeButton);
        newMessage.appendChild(editButton);
    });

    //functionality to add the removeButton, newMessage, and reset the form
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm[0].reset();
});
    // End Messages
