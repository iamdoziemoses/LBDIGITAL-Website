// SHOW MENU
const navToggle = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const navMenu = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        toggle.classList.toggle('rotate');
    })
}
navToggle('nav-toggle', 'nav-menu');

//Remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


//Typewriting Effect
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        //Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        //Ceck if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            //Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        //Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //Initial Type Speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2
        }

        //Check word complete
        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed)
    }
}

//Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Init Typewriter
    new TypeWriter(txtElement, words, wait);
}

// SHOW SCROLL TOP 
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)