// Selectores
const listaProductos = document.querySelector("#lista-productos");
const arrayNombres = [
auriculares,
microfonos,
teclados,
mouses,
mousepads,
];
document.addEventListener("DOMContentLoaded", () => {
arrayNombres.forEach((producto) => {
    renderProducts(producto);
});
});
function renderProducts(producto) {
	producto.forEach((elemento) => {
	const card = document.createElement("div");
	const cardContent = `
				<img src="${elemento.imagen}" class="imagen-${elemento}" id="${elemento}">
				<div class="info-card">
				<h4>${elemento.nombre}</h4>
				<p>HyperX</p>
				<p class="precio"><span class="u-pull-right">${elemento.precio}</span></p>
				<a href="#" id="button-event" class="u-full-width button-primary button input agregar-carrito" data-id="${elemento.id}">Agregar al Carrito</a>
				</div>`;
	card.classList.add("card");
	card.classList.add("container");
	card.innerHTML = cardContent;
	listaProductos.appendChild(card);
	});
}



// // Selectores
// const listaProductos = document.querySelector('#lista-auriculares');

// document.addEventListener('DOMContentLoaded', () => {
//     renderProducts(auriculares)
// }
// )
// function renderProducts(auriculares) {
//     auriculares.forEach( auriculares => {
//         const card = document.createElement("div");
// 		const cardContent = `
// 				<img src="${auriculares.imagen}" class="imagen-auriculares" id="auris">

// 				<div class="info-card">
// 					<h4>${auriculares.nombre}</h4>
// 					<p>HyperX</p>
// 					<p class="precio"><span class="u-pull-right">${auriculares.precio}</span></p>
// 					<a href="#" id="button-event" class="u-full-width button-primary button input agregar-carrito" data-id="${auriculares.id}">Agregar al Carrito</a>
// 				</div>
//         `
// 		card.classList.add("card container");
// 		card.innerHTML = cardContent
//         listaProductos.appendChild(card);
//     });
// }

// Evento Click carrito
const button = document.querySelector('#button');

button.addEventListener('click', eventoClick );

function eventoClick() {
	alert("El buscador no funciona por el momento.")
}

// renderProducts(auriculares);