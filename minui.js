function init(dark, locs = ["https://raw.githack.com/minin-prod/minui.css/master/minui-common.css",
							"https://raw.githack.com/minin-prod/minui.css/master/minui-light.css",
							"https://raw.githack.com/minin-prod/minui.css/master/minui-dark.css"]) {
	// Body
	const b = document.getElementsByTagName("body")[0];

	var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
	link.setAttribute("href", locs[0]);
	b.appendChild(link);

	dark ? link.setAttribute("href", locs[2]) : link.setAttribute("href", locs[1]);
	b.appendChild(link);
}