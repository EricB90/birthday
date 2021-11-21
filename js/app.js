let ericLink = document.getElementById('ericLink');
let joeLink = document.getElementById('joeLink');
let peeweeLink = document.getElementById('peeweeLink');
let sissyLink = document.getElementById('sissyLink');
let resetLink = document.querySelector('.reset-link');
let lizardLink = document.querySelector('.lizard-link');
console.log(lizardLink);
let defaultSection = document.querySelector('.default-section');
let ericSection = document.querySelector('.eric-section');
let joeSection = document.querySelector('.joe-section');
let peeweeSection = document.querySelector('.peewee-section');
let sissySection = document.querySelector('.sissy-section');
let lizardSection = document.querySelector('.lizard-section');

function ericClick(e) {
    e.preventDefault();
    defaultSection.style.display = "none";
    ericSection.style.display = "block";
    joeSection.style.display = "none";
    peeweeSection.style.display = "none";
    sissySection.style.display = "none";
    lizardSection.style.display = "none";
}

ericLink.addEventListener('click', ericClick);

function joeClick(e) {
    e.preventDefault();
    defaultSection.style.display = "none";
    ericSection.style.display = "none";
    joeSection.style.display = "block";
    peeweeSection.style.display = "none";
    sissySection.style.display = "none";
    lizardSection.style.display = "none";
}

joeLink.addEventListener('click', joeClick);

function peeweeClick(e) {
    e.preventDefault();
    defaultSection.style.display = "none";
    ericSection.style.display = "none";
    joeSection.style.display = "none";
    peeweeSection.style.display = "block";
    sissySection.style.display = "none";
    lizardSection.style.display = "none";
}

peeweeLink.addEventListener('click', peeweeClick);

function sissyClick(e) {
    e.preventDefault();
    defaultSection.style.display = "none";
    ericSection.style.display = "none";
    joeSection.style.display = "none";
    peeweeSection.style.display = "none";
    sissySection.style.display = "block";
    lizardSection.style.display = "none";
}

sissyLink.addEventListener('click', sissyClick);

function resetClick(e) {
    e.preventDefault();
    defaultSection.style.display = "block";
    ericSection.style.display = "none";
    joeSection.style.display = "none";
    peeweeSection.style.display = "none";
    sissySection.style.display = "none";
    lizardSection.style.display = "none";
}

resetLink.addEventListener('click', resetClick);

function lizardClick (e) {
    e.preventDefault();
    defaultSection.style.display = "none";
    ericSection.style.display = "none";
    joeSection.style.display = "none";
    peeweeSection.style.display = "none";
    sissySection.style.display = "none";
    lizardSection.style.display = "block";
    console.log(lizardSection);
}

lizardLink.addEventListener('click', lizardClick);