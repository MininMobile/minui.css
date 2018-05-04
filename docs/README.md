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
<!--    minui navbar,
	fixed to top of page (.m-nav--fixed)    -->
<nav class="m-nav m-nav--fixed">
	<!-- create link entries for sidebar -->
	<div class="m-nav--menu">
		<a href="index.html">Index</a>
		<a href="contact.html">Contact</a>
		<a href="about.html">About</a>
	</div>
	<!-- add text to right-most part of navbar -->
	<div class="m-nav--data">
		<p>Not Logged In...</p>
	</div>
</nav>
```

## Sections
### Header Sections
```html
<!--    minui section,
	displays text (.m-section--header),
	opaque background and shadow (.m-section--shadow)    -->
<div class="m-section m-section--header m-section--shadow">
	<!-- add title to section -->
	<h1 class="m-section--title">Hello!</h1>
	<!-- add subtitle to section -->
	<p class="m-section--sub">Welcome to my Website</p>
</div>
```
### Regular Sections
```html
<!-- minui section -->
<div class="m-section">
	<!-- code for cards or other ways to display information -->
</div>
```

## Buttons
### Regular Buttons
```html
<!-- creates button with <button> tag -->
<button class="m-btn">Button</button>

<!-- creates button with <a> tag -->
<a class="m-btn" href="#">Link</a>
```
### Flat Buttons
Used for modals already with emphasis using shadows, adhering to material design guidelines.
```html
<!-- creates button with <button> tag -->
<button class="m-btn m-btn--flat">Flat Button</button>

<!-- creates button with <a> tag -->
<a class="m-btn m-btn--flat" href="#">Flat Link</a>
```

## Cards
### Regular Card
```html
<!--    minui card,
	displays nicely along with other cards in a line (.m-card--inline)    -->
<div class="m-card m-card--inline">
	<!-- card text -->
	<p>My GitHub Account</p>
	<!-- flat button -->
	<a class="m-btn m-btn--flat" href="https://github.com/MininMobile">MininMobile</a>
</div>
```
### Image Card
```html
<!--    minui card,
	displays nicely along with other cards in a line (.m-card--inline)
	has image placed above card content (.m-card--image)    -->
<div class="m-card m-card--inline m-card--image">
	<!-- card image -->
	<img src="img/github.jpg">
	<!-- card text -->
	<p>My GitHub Account</p>
	<!-- card link; flat button -->
	<a class="m-btn m-btn--flat" href="https://github.com/MininMobile">MininMobile</a>
</div>
```
