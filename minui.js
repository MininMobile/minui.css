function init(dark) {
	if (dark.valueOf() == Boolean) {
		if (dark) {
			
		} else {
			
		}
	} else {
		throw new TypeError("Argument 'dark' is not a boolean");
	}
}