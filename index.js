// ==============================
// HEADER AO ROLAR
// ==============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ==============================
// MENU MOBILE
// ==============================

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// Fecha o menu ao clicar em algum link

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// ==============================
// FORMULÁRIO
// ==============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;


    const whatsappNumber = "5500000000000";


    const text =
        `Olá! Meu nome é ${name}.%0A%0A` +
        `Telefone: ${phone}%0A%0A` +
        `Gostaria de orientação sobre:%0A${message}`;


    const url =
        `https://wa.me/${whatsappNumber}?text=${text}`;


    window.open(url, "_blank");

});


// ==============================
// WHATSAPP FLUTUANTE
// ==============================

const whatsapp = document.getElementById("whatsapp");

whatsapp.addEventListener("click", (event) => {

    event.preventDefault();

    const number = "5500000000000";

    const message =
        "Olá! Gostaria de saber mais sobre os serviços jurídicos.";

    window.open(
        `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

});