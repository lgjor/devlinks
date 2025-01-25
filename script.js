function toggleMode(){
  const html = document.documentElement;

// Muda a classe do HTML entre light e dark
html.classList.toggle('light');

// Pegar a tag img do perfil
const img = document.querySelector('#profile img');

// Substituir a img
if (html.classList.contains('light')) {
  img.setAttribute('src', './assets/images/avatar-light.png');
} else {
  img.setAttribute('src', './assets/images/avatar.png');
}



}