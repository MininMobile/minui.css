# Toot Toot it's Time for CSS
But by the time you have a *decent* looking website you have 12 tabs open scratching your head on how to center something without flexboxes, well, the soloution is simple, USE FLEXBOXES. (and minui.css 😘)

# Index
- [Usage](#usage)
- [init() Arguments](#init-arguments)
- [Examples](#examples)

# Usage
## Installation
Add this line of code to your head to get the file served from GitHub;
```html
<script src="https://rawgit.com/minin-prod/minui.css/master/minui.js"></script>
```

If you want to download the JS file and serve it from your webserver, [right click on this text and click "Save linked content as..."](https://raw.githubusercontent.com/minin-prod/minui.css/master/minui.js) (I use opera so it may be different for you) then you can use this code to reference the file;
```html
<script src="minui.js"></script>
```

## Example
Add the script tag getting the js file to `<head>`;
```html
<head>
	<title>My Website</title>
	<script src="minui.js"></script>
</head>
```

Then at the end of the page run the `init` function;
```html
<body>
	<!-- code -->
	
	<script> init(); <script>
</body>
```

# init() Arguments
> `init([theme, files]);`

## theme
Boolean, `false` by default, if true loads dark theme.

## files
Array, rawgit versions of `["minui-common.css", "minui-light.css", "minui-dark.css"]` by default, common loads styles & light/dark loads colors.

# Examples
## Navbar
```html
<nav class="m-nav m-nav--fixed">
	<div class="m-nav--menu">
		<a href="index.html">Index</a>
		<a href="contact.html">Contact</a>
		<a href="about.html">About</a>
	</div>
	<div class="m-nav--data">
		<p>Not Logged In...</p>
	</div>
</nav>
```
