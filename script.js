  console.log("Le script est chargé!");
const titre = document.querySelector('section2');
titre.addEventListener('click', () => {
    console.log("J'ai cliqué sur le texte");
    titre.textContent = "Vous voulez acheter cet article?";
  });


const themeButton = document.querySelector('Voir les carctéristique');
themeButton.addEventListener('click', () => {
document.body.classList.toggle('section2');
  });

