# Pjt.js
Pjt.js is a JavaScript library.  Its current main function is converting raw CSS into js styles and toggling CSS.
<br>
#### <a href="https://codepen.io/piwithewiwi/pen/pdOKma">DEMO</a>

#### <a href="https://github.com/pjtsearch/Pjt.js/releases">Releases</a>

## How to Use
### Method 1: Download
1. Download <a href="https://github.com/pjtsearch/Pjt.js/releases">the latest Pjt.js release</a>.
2. Link to your page
```html
<script src="pjt.js"></script>
```
### Method 2: No Download
1. link the latest version of pjt.js to your page
```html
<script src="https://rawgit.com/pjtsearch/Pjt.js/master/pjt.js"></script>
```
## Functions
<pre>
PCSS.css(<i>css</i>);
</pre>
Add in raw CSS converted to JS styles.
<br>
<br>
<i>css</i>: Regular raw CSS (media queries not supported).
<br>
<br>
<b>example:</b>
<pre>
PCSS.css(`
body{
background:blue;
border: 1px solid black;
}
#a{
color:red;
border:5px solid green;
}
`);
</pre>
<i>*Note: back ticks can be used in JS for multi-line strings as shown above.</i>
<hr>
<pre>
P(<i>element</i>).toggleCssDefault(<i>style</i>);
</pre>
Toggles a raw CSS style with the deafault value;
<br>
<br>
<i>element</i>: CSS element selector.
<br>
<i>style</i>: Raw CSS style to be toggled with deafault (MUST HAVE 1 SPACE AFTER : AND HAVE A ;).
<br>
<br>
<b>example:</b>
<pre>
P('#a').toggleCssDefault('color: blue;');
</pre>
<pre>
P(<i>element</i>).toggleCss(<i>style</i>, <i>togglestyle</i>);
</pre>
Toggles a raw CSS style with another raw CSS style;
<br>
<br>
<i>element</i>: CSS element selector.
<br>
<i>style</i>: Raw CSS style to be toggled with <i>togglestyle</i> (MUST HAVE 1 SPACE AFTER : AND HAVE A ;).
<br>
<br>
<i>togglestyle</i>: Raw CSS style to be toggled with <i>style</i> (MUST HAVE 1 SPACE AFTER : AND HAVE A ;).
<br>
<br>
<b>example:</b>
<pre>
P('#a').toggleCss('color: blue;', 'color: red;');
</pre>
<hr>
<hr>
<pre>
P(<i>element</i>);
</pre>
Select a HTML element. 
<br>
<br>
<i>element</i>: CSS element selector.
<br>
<br>
<b>example:</b>
<pre>
P('#a');
</pre>
<hr>
<pre>
P(<i>element</i>).html(<i>html</i>);
</pre>
Replace inner HTML of an element. 
<br>
<br>
<i>element</i>: CSS element selector.
<br>
<i>html</i>: Desired new HTML of element (can be HTML).
<br>
<br>
<b>example:</b>
<br>
<pre>
P('#a').html('test');
</pre>
<hr>
<pre>
P(<i>element</i>).css(<i>css</i>);
</pre>
Add CSS of an element. 
<br>
<br>
<i>element</i>: CSS element selector.
<br>
<i>css</i>: Desired CSS in CSS text.
<br>
<br>
<b>example:</b>
<br>
<pre>
P('#a').css('color:red; background:blue;');
</pre>
<hr>
