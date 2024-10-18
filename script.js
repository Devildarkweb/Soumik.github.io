var typed = new Typed(".multiple-text", {
    strings: ["Computer Science Engineer", "Frontend Developer","Data Scientist"],
    typeSpeed: 50,
    backSpeed: 90,
    backDelay: 1200,
    loop: true
})

window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

}
