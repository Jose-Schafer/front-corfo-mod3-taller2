
const reviews = [
  {
    title: "Rodrigo",
    text: "Muy buena atención, mi pie fue amputado correctamente pese a que vine por un dolor de cabeza."
  },
  {
    title: "Juan",
    text: "Más o menos no más"
  }
];

// Función para agregar dinámicamente comentarios
function addReviewCards() {
  const container = document.getElementById("comments");

  reviews.forEach(review => {
    // Crear la columna del comentario
    const colDiv = document.createElement("div");
    colDiv.className = "col mb-2";

    // Crear la tarjeta
    const cardDiv = document.createElement("div");
    cardDiv.className = "card p-4";

    // Título
    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = review.title;

    // Descripción
    const text = document.createElement("p");
    text.className = "card-text";
    text.textContent = review.text;

    // Agregar título y texto al div de tarjeta
    cardDiv.appendChild(title);
    cardDiv.appendChild(text);

    // Agregar la tarjeta al div de columna
    colDiv.appendChild(cardDiv);

    // Agregar el div de columna al div de comentarios
    container.appendChild(colDiv);
  });
}

document.addEventListener("DOMContentLoaded", addReviewCards);
