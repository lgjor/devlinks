function toggleMode(){
  const html = document.documentElement;

// Muda a classe do HTML entre light e dark
html.classList.toggle('dark');

// Pegar a tag img do perfil
const img = document.querySelector('#profile img');

// Substituir a img
if (html.classList.contains('dark')) {
  img.setAttribute('src', './assets/images/avatar-dark.png');
} else {
  img.setAttribute('src', './assets/images/avatar.png');
}
}