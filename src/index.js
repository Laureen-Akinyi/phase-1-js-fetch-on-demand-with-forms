const submitData = () => {
    const form = document.querySelector('form');

    const inputData = document.getElementById('searchByID');
    form.addEventListener ('submit', (event) => {
        event.preventDefault();

    fetch('http://localhost:3000/movies/${inputDAta.value}')
        .then (response => response.json())
        .then (results => {const Title = document.querySelector('h4')
        const Summary = document.querySelector ('p')
   Title.innerText = results.title
Summary.innerText = results.summary})
    });
} 

document.addEventListener('DOMContentLoaded', submitData);

