

const darkElement = document.querySelector('#darkmode');
const body = document.querySelector('body');
const quotes = document.querySelector('blockquote');
const sections = document.querySelectorAll('.sections');
const titles = document.querySelectorAll('.titles');
const texts = document.querySelectorAll('p');
const socials = document.querySelectorAll('.social-links');
const line = document.querySelector('hr');


darkElement.addEventListener("click", () => {
    line.classList.toggle("dark-text");
    body.classList.toggle("dark");
    sections.forEach((sections) => sections.classList.toggle("dark"));
        titles.forEach((titles) => titles.classList.toggle("dark-text"));
        texts.forEach((texts) => texts.classList.toggle("dark-text"));
        socials.forEach((socials) => socials.classList.toggle("dark-image"));
        quotes.classList.toggle("dark-text");
});