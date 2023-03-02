const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElementLogos = document.querySelectorAll('.made_by_element');
hiddenElementLogos.forEach((el) => observer.observe(el));

const hiddenElementSkills = document.querySelectorAll('.element_style');
hiddenElementSkills.forEach((el) => observer.observe(el));