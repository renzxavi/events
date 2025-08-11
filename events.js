document.querySelector('.container').addEventListener('click', () => {
    alert('Hello! I am the div');
});

document.querySelector('button').addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Hello! I am the button');
});