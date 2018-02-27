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
}