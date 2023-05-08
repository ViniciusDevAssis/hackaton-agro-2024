
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

const abrirPopups = document.querySelectorAll('[data-tipo="abrir-popup"]')
console.log(abrirPopups)

abrirPopups.forEach((popup) => {
  popup.addEventListener('click', (evento) => {
    evento.preventDefault();
    const tipo = popup.getAttribute('id')
    console.log(tipo)
    const divPopup = document.querySelector(`#${tipo}-popup`)
    divPopup.classList.remove('oculto')
  })
});

const fecharPopups = document.querySelectorAll('.fechar-popup');

fecharPopups.forEach((fechar) => {
  fechar.addEventListener('click', (event) => {
    event.preventDefault();
    const popup = event.target.closest('.popup');
    popup.classList.add('oculto');
  });
});