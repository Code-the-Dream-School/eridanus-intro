let today = new Date();

let footer = document.querySelector("footer");

let p = document.createElement("p");
let thisYear = today.getFullYear();
p.textContent = "Ali Reza " + thisYear;
footer.appendChild(p);

let skills = ["HTML", "CSS", "Java", "JavaScript"];

let skillSection = document.querySelector("#skills");

let skillsList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");

  skill.textContent = skills[i];

  skillsList.appendChild(skill);
}

let messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", function (event) {
  let userName = event.target.userName.value;
  let userEmail = event.target.userEmail.value;
  let userMessage = event.target.userMessage.value;

  console.log(userName, userEmail, userMessage);

  event.preventDefault();
  const messageSection = document.querySelector("#message");
  const messageList = messageSection.querySelector("ul:nth-child(2)");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:email@example.com"> ${userName} </a>
  <span>" Wrote : "<br>${userMessage}</span>`;
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.id = "removeButton";
  removeButton.addEventListener("click", function (event) {
    let entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});
