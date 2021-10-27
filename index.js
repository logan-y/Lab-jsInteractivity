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
    message.textContent = `that one has been deleted!`
}

let crossOffMovie = event => {
    event.target.classList.toggle("checked");
    if(event.target.classList.contains('checked')){
        message.textContent = 'this movie was watched!'
    } else {
        message.textContent = 'this movie was added back!'
    }
}
