# Pjt.js
Pjt.js is a JavaScript library.  Its current main function is converting raw CSS into js styles.
<br>
#### <a href="https://codepen.io/piwithewiwi/pen/pdOKma">DEMO</a>

## Functions
<pre>
P.css(<i>css</i>);
</pre>
Add in raw CSS converted to JS styles.
<br>
<br>
<i>css</i>: Regular raw CSS (media queries not supported).
<br>
<br>
<b>example:</b>
<pre>
P.css(`
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
P(#a);
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
P(#a).html('test');
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
P(#a).css('color:red; background:blue;');
</pre>
<hr>
