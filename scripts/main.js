
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  await delay(600);
  createText("Welcome to my world!!");
  await delay(600);
  createText("You can run several commands here!, a few to start with:");
 
  createCode("whoami", "Who am i and what do i do.");
  createCode("help", "To view all commands.");
  createCode("social -a", "All my social networks.");
  createCode("skills -a", "To know my skillset");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/yaswanthsaivendra";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects");
    createCode("whoami", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("skills -a", "To know my skillset");
    createCode("clear", "Clean the terminal.");
    createCode("help", "To view this help page again.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/yaswanthsaivendra' target='_blank'><i class='fab fa-github white'></i> github.com/yaswanthsaivendra</a>")
  }
  else if(value === "whoami"){
    trueValue(value);
    createText("Hola, Happy to see you here!!")
    createText("This is Yaswanth Sai Vendra, kinda tech savvy with interests in the fields of web development, cybersecurity and computer networks.")
    createText("Fun Fact : I love reading about history of computers!!")
  }
  else if(value === "skills -a"){
    trueValue(value);
    createText("Languages :")
    createText("Python | JS | Solidity | C | C++ | BASH")
    createText("Technologies :")
    createText("LAMP Stack with P as Python | Blockchain | Web/Network Pentration testing")
    createText("Frameworks: ")
    createText("Django | Flask | Ethereum Dev - Truffle")
    createText("Other Skills: ")
    createText("HTML5/CSS3 | Scripting | DevOps")
  }
  else if(value === "skills"){
    trueValue(value);
    createText("Didn't you mean: skills -a?")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/yaswanthsaivendra' target='_blank'><i class='fab fa-github white'></i> github.com/yaswanthsaivendra</a>")
    createText("<a href='https://www.linkedin.com/in/yaswanthvendra/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/yaswanthvendra</a>")
    createText("<a href='https://www.instagram.com/yaswanthvendra/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/yaswanthvendra</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text){
  const p = document.createElement("p");
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();