 console.log("hello world");
let message = document.querySelector('#message')
let addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    
    let list = document.querySelector('ul')
    list.appendChild(movie);
    inputField.value = "";
    }
    
document.querySelector('form').addEventListener('submit', addMovie);

let deleteMovie = event => {
    event.target.parentNode.remove();
    message.textContent = `${event.target.parentNode.firstChild.textContent} has been deleted!`
    revealMessage();
}

let crossOffMovie = event => {
    event.target.classList.toggle("checked");
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} was watched recently.`
    } else {
        message.textContent = `${event.target.textContent} was just added back.`
    }
    revealMessage();
}


let revealMessage = () => {
    message.classList.remove("hide");
    setTimeout(cb, 1000);
}
cb = () => {
message.className += "hide";
}

