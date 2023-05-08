
// função para tocar pato
function tocarAudio() {
    const audio = document.getElementById("quack");
    audio === null ? console.log('Elemento não encontrado') : audio.play();
}

// percorre a árvore DOM
const links = document.querySelectorAll('nav a');

// percorre vetor, seleciona atribute href
links.forEach(link => { link.addEventListener('click', (evento) => {
        evento.preventDefault();
        const href = link.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
        top: offsetTop,
        behavior: "smooth"
        });
    });
});

const abrirPopupLinks = document.querySelectorAll('[data-tipo="abrir-popup"]');
const fecharPopupLinks = document.querySelectorAll('[data-tipo="abrir-popup"]');
const popup = document.querySelector('#popup');

function abrir() {
    // Abrir popup quando clicar no link
    abrirPopupLinks.forEach(link => {
      link.addEventListener('click', (evento) => {
        evento.preventDefault();
        popup.style.display = 'block';
      });
    });

}


// Fechar popup quando clicar no botão de fechar
fecharPopupLinks.forEach(link => {
    link.addEventListener('click', (evento) => {
      evento.preventDefault();
      popup.style.display = 'none';
    });
  });