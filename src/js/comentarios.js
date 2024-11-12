
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
function renderComments() {
  const container = document.getElementById("comments");
  container.innerHTML = ""; // Borrar comentarios ya renderizados para evitar duplicados


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


// Función para agregar nuevo comentario
function addNewComment() {
  const userName = prompt("Ingresa tu nombre:");
  console.log(`El nombre ingresado fue: ${userName}`)

  const userComment = prompt("Ingresa tu comentario:");
  console.log(`El comentario ingresado fue: ${userComment}`)

  if (userName && userComment) {
    // Agregar un nuevo comentario al listado
    reviews.push({ title: userName, text: userComment });
    // Re-renderizar los comentarios
    renderComments();
  } else {
    alert("Porfavor agrega tu nombre y comentario antes de enviar.");
  }
}

// Add event listener to the button
document.getElementById("buttonAddComment").addEventListener("click", addNewComment);

document.addEventListener("DOMContentLoaded", renderComments);
