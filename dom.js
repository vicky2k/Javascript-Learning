
// This is my selection of the DOM Elements

const button = document.querySelector('.toggle');
const section = document.querySelector('section');

// My Call Back function
function toggleSection() {
   if (section.classList.contains('visible')){
        section.classList.remove('visible');
    } else {
        section.classList.add('visible');
    }
}

// My Event Listener
button.addEventListener('click', toggleSection, false);