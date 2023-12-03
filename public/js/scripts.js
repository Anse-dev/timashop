function openModal(productId) {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function addToCart(productId) {
  // Ajouter la logique d'ajout au panier ici
  alert("Produit ajouté au panier !");
  closeModal();
}
// Assurez-vous d'inclure le script Slick Carousel dans votre projet

$(document).ready(function () {
  $(".slider-container").slick({
    arrows: true, // Activer les flèches de navigation
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    infinite: true, // Activer la navigation infinie
    autoplay: true, // Activer l'autoplay
    autoplaySpeed: 3000, // Vitesse de l'autoplay en millisecondes (3 secondes dans cet exemple)
    speed: 500, // Vitesse de transition entre les slides en millisecondes
    dots: false, // Masquer les points indicateurs
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Masquer les flèches sur les petits écrans
        },
      },
    ],
  });
});
