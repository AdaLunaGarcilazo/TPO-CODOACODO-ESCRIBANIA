// La finalidad de este archivo es manejar el responsive de la barra de navegación, removiendo los hijos de los links y agregandolos en un nuevo div que solo es visible al presionar el boton de menú.

const body = document.getElementsByTagName("body")[0];
const items = document.getElementById("items");
const btnMenu = document.getElementById("sandwitch");
const menu = document.getElementById("menu");
const navItemContainer = document.getElementById("navItemContainer")
let posible = true;

btnMenu.onclick = () => {
	if (posible) {
	menu.appendChild(items);
	menu.classList.remove('menu')
	menu.classList.add('menu-abierto')	
	items.classList.remove('items')
	items.classList.add('items-abiertos')
	menu.style.height = "25vh";
	posible = false;	
	} else {
		posible = true
		navItemContainer.appendChild(items)
		menu.classList.remove('menu-abierto')
		menu.classList.add('menu')
		items.classList.remove('items-abiertos')
		items.classList.add('items')
		
	} 
}


