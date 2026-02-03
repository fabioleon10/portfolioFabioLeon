let menuVisible = false;
//Ocultar / Mostrar Menu
function mostrarOcultarMenu(){
    const nav = document.getElementById("nav");
    const menuIcon = document.querySelector(".nav-responsive i");

    if(menuVisible){
        nav.classList.remove("responsive");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        menuVisible = false;
    }else{
        nav.classList.add("responsive");
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
        menuVisible = true;
    }
}

function seleccionar(){
    const nav = document.getElementById("nav");
    const menuIcon = document.querySelector(".nav-responsive i");

    nav.classList.remove("responsive");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
    menuVisible = false;
}

// Destacar link ativo na navbar
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#nav ul li a');

// Função para remover classe active de todos os links
function removeActiveClasses() {
    navLinks.forEach(link => link.classList.remove('active'));
}

// Função para adicionar classe active ao link correspondente
function addActiveClass(id) {
    removeActiveClasses();
    const activeLink = document.querySelector(`#nav ul li a[href="#${id}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Detectar seção visível durante o scroll
function onScroll() {
    const scrollPos = window.scrollY + 150; // offset para melhor detecção
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            addActiveClass(sectionId);
        }
    });
}

// Event listeners
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// Adicionar active ao clicar
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        removeActiveClasses();
        this.classList.add('active');
    });
});