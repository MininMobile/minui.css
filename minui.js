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

	// Run Other Functions
	createButtons();
	createNavbar(dark);
}

//// CSS FX ////

//#region Navbar
function createNavbar(dark) {
	var body = document.getElementsByTagName("body")[0];

	var nav = document.getElementsByClassName("m-nav")[0];
	var navMenu = document.getElementsByClassName("m-nav--menu")[0];

	var navMenuHTML = document.createElement("div");
	navMenuHTML.classList.add("m-nav--menu");
	navMenuHTML.innerHTML = navMenu.innerHTML;

	if (nav.classList.contains("m-nav--fixed")) {
		var padding = document.createElement("div");
		padding.classList.add("m-nav--height");

		body.insertBefore(padding, body.firstChild);
	}

	var navMenuBtn = document.createElement("div");
	navMenuBtn.classList.add("m-nav--menu-button");
	nav.insertBefore(navMenuBtn, nav.firstChild);
	
	navMenuBtn.innerHTML = `<img src='https://svgshare.com/i/5u4.svg' class='m--nav-menu-button'/>`;

	navMenu.remove();
	navMenu = navMenuHTML;
	navMenu.style.width = "0px";
	body.insertBefore(navMenu, body.firstChild);

	navMenuBtn.children[0].addEventListener("click", (e) => {
		if (navMenu.style.width == "0px") {
			navMenu.style.width = "15%";
			navMenu.style.opacity = "1";
		} else {
			navMenu.style.width = "0px";
			navMenu.style.opacity = "0";
		}
	});
}
//#endregion

//#region Buttons
function createButtons() {
	let buttons = document.getElementsByClassName("m-btn");
	Array.prototype.forEach.call(buttons, (b) => b.addEventListener("mousedown", createRipple));
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

	c.classList.add("ripple");

	setTimeout(() => { c.remove(); }, 300);
}
//#endregion