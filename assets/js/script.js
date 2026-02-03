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

// Função para abrir o cliente de e-mail
function abrirEmail(destinatario) {
    const assunto = encodeURIComponent('Assunto padrão');
    const corpo = encodeURIComponent('Olá, gostaria de entrar em contato.');
    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
}

// Adicionar funcionalidade aos botões de e-mail
const botoesEmail = document.querySelectorAll('a[title="Enviar e-mail"]');
botoesEmail.forEach(botao => {
    botao.addEventListener('click', (event) => {
        event.preventDefault(); // Impedir comportamento padrão
        const destinatario = 'fsleon93@gmail.com';
        const assunto = encodeURIComponent('Assunto padrão');
        const corpo = encodeURIComponent('Olá, gostaria de entrar em contato.');
        window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
    });
});

// Ajuste para cliques nos cards do portfólio
const cardsPortfolio = document.querySelectorAll('.projeto');
cardsPortfolio.forEach(card => {
    card.addEventListener('click', () => {
        const overlay = card.querySelector('.overlay');
        if (overlay) {
            overlay.style.display = 'block';
        }
    });
});

// Função para capturar os dados do formulário e simular envio
const formulario = document.querySelector('form');
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Impedir envio padrão

    // Capturar dados do formulário
    const nome = formulario.querySelector('input[name="name"]').value;
    const telefone = formulario.querySelector('input[name="phone"]').value;
    const email = formulario.querySelector('input[name="email"]').value;
    const assunto = formulario.querySelector('input[name="subject"]').value;
    const mensagem = formulario.querySelector('textarea[name="message"]').value;

    console.log('Dados capturados:', { nome, telefone, email, assunto, mensagem });

    // Configurar parâmetros para EmailJS
    const templateParams = {
        name: nome,
        phone: telefone,
        email: email,
        subject: assunto,
        message: mensagem
    };

    // Enviar e-mail usando EmailJS
    emailjs.send('service_c8y82bo', 'template_3c6j0wr', templateParams)
        .then(() => {
            console.log('E-mail enviado com sucesso!');
            alert('Mensagem enviada com sucesso!');
            window.location.href = 'obrigado.html';
        })
        .catch((error) => {
            console.error('Erro ao enviar mensagem:', error);
            alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
        });
});

// Integração com EmailJS usando SDK v4
emailjs.init('aPyP0qigx7oBvP7N7'); //