function init(dark, local = false, locs = ["common", "light", "dark"]) {
	// Body
	const b = document.getElementsByTagName("body")[0];

	var link = new HTMLLinkElement();
	link.rel = "stylesheet";

	b.appendChild(link);

	if (dark) {
		
	} else {

	}
}