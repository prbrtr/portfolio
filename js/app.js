$(document).ready(function () {

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let about = document.querySelector('ul');



    hamberger.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });


    times.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });

    about.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });



    const buttons = document.querySelectorAll(".job-links a");
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.backgroundColor = "#161616"; // Highlight clicked button
        });
    });



});
