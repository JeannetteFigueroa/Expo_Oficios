// Datos de los integrantes
const integrantes = [
  {
    nombre: "Ana Belén Zapata Araya",
    telefono: "+56 9 3276 4787",
    correo: "ana.zapata2025@soymas.cl",
    linkedin: "https://www.linkedin.com/in/ana-bel%C3%A9n-zapata-araya-74508a133?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    foto: "img/integrante1.png"
  },
  {
        nombre: "María renee Cerda pardo",
    telefono: "+56 9 6449 7547",
    correo: "mariiarenee18@gmail.com",
    linkedin: "https://www.linkedin.com/in/maria-renee-cerda-9069542b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    foto: "img/integrante2.png"
  },
  {
    nombre: "Mónica Angélica Figueroa Godoy",
    telefono: "+56 9 4515 8067",
    correo: "monica.figueroa2025@soymas.cl",
    linkedin: "https://www.linkedin.com/in/monica-figueroa-b2728436b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    foto: "img/integrante3.png"
  },
  {
    nombre: "Melani Urrutia Villablanca",
    telefono: "+56 9 4060 4951 ",
    correo: "Melaniurrutiav@gmail.com",
    linkedin: "https://www.linkedin.com/in/melani-urrutia-2a5229326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    foto: "img/integrante4.png"
  },
  {
    nombre: "Noemi Andrea Rivera Nuñez",
    telefono: "+56 9 3348 8977",
    correo: "candreanoemi9728@gmail.com",
    linkedin: "https://www.linkedin.com/in/noemi-andrea-ab35a237a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    foto: "img/integrante5.png"
  },
  {
    nombre: "Vanessa Ayling Wienberg Galaz",
    telefono: "+56 9 3141 5118",
    correo: "Vanessa.wienberg2025@soymas.cl",
    linkedin: "https://www.linkedin.com/in/vanessa-wienberg-06b7b726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    foto: "img/integrante6.png"
  }
];

// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalInfo = document.getElementById("modal-info");

function openModal(index) {
  const integrante = integrantes[index];
  modal.style.display = "block";
  modalImg.src = integrante.foto;
  modalName.textContent = integrante.nombre;
  modalInfo.innerHTML = `
    <p><strong>Teléfono:</strong> ${integrante.telefono}</p>
    <p><strong>Correo:</strong> <a href="mailto:${integrante.correo}">${integrante.correo}</a></p>
    <p><strong>LinkedIn:</strong> <a href="${integrante.linkedin}" target="_blank">Ver perfil</a></p>
  `;
}

function closeModal() {
  modal.style.display = "none";
}
