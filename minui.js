/*
   _ __ ___ (_)_ __ (_)_ __    _   _(_)
  | '_ ` _ \| | '_ \| | '_ \  | | | | |
  | | | | | | | | | | | | | | | |_| | |
  |_| |_| |_|_|_| |_|_|_| |_|  \__,_|_|
  
  © Minin Productions 2018
*/

function init(dark, locs = ["https://raw.githack.com/minin-prod/minui.css/master/minui-common.css",
							"https://raw.githack.com/minin-prod/minui.css/master/minui-light.css",
							"https://raw.githack.com/minin-prod/minui.css/master/minui-dark.css"]) {
	const h = document.getElementsByTagName("head")[0]; // Head
	const b = document.getElementsByTagName("body")[0]; // Body

	var commonLink = document.createElement("link");
	commonLink.setAttribute("rel", "stylesheet");
	commonLink.setAttribute("type", "text/css");
	commonLink.setAttribute("href", locs[0]);

	var themeLink = document.createElement("link");
	themeLink.setAttribute("rel", "stylesheet");
	themeLink.setAttribute("type", "text/css");
	dark ? themeLink.setAttribute("href", locs[2]) : themeLink.setAttribute("href", locs[1])

	h.appendChild(commonLink);
	h.appendChild(themeLink);

	createButtons();
}

//// CSS FX ////

//#region Buttons
function createButtons() {
	let buttons = document.getElementsByClassName("m-btn");
	Array.prototype.forEach.call(buttons, (b) => b.addEventListener("click", createRipple));
}

/** @param {Element} e */
function createRipple(e) {
	var c = document.createElement("div");
	this.appendChild(c);

	var d = Math.max(this.clientWidth, this.clientHeight);

	c.style.width = c.style.height = d + 'px';

	var rect = this.getBoundingClientRect();
	c.style.left = e.clientX - rect.left -d/2 + 'px';
	c.style.top = e.clientY - rect.top - d/2 + 'px';

	console.log(this);

	c.classList.add("ripple");
}
//#endregion