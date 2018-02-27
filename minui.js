function init(dark, locs = ["https://raw.githubusercontent.com/minin-prod/minui.css/master/minui-common.css",
							"https://raw.githubusercontent.com/minin-prod/minui.css/master/minui-light.css",
							"https://raw.githubusercontent.com/minin-prod/minui.css/master/minui-dark.css"]) {
	// Body
	const b = document.getElementsByTagName("body")[0];

	var link = new HTMLLinkElement();
	link.rel = "stylesheet";
	link.href = locs[0];
	b.appendChild(link);

	dark ? link.href = locs[2] : link.href = locs[1];
	b.appendChild(link);
}