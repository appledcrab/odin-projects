// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey I'm red!";
redText.style.backgroundColor = "black";

container.appendChild(redText);

const blueText = document.createElement("h3");
blueText.style.color = "blue";
blueText.textContent = "I'm a blue h3!";
blueText.style.backgroundColor = "grey";

container.appendChild(blueText);

const newDiv = document.createElement("div");
newDiv.style.border = "1px solid black";
newDiv.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
newDiv.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";
newDiv.appendChild(p);

container.appendChild(newDiv);

const btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.onclick = () => alert("Hello World");
