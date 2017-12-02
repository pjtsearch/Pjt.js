# Pjt.js
Pjt.js is a JavaScript library.  Its current main function is converting raw CSS into js styles.

## Functions
<pre>
P(<i>element</i>);
</pre>
Select a HTML element. 
<br>
<br>
<i>element</i>: CSS element selector.
<br>
<b>example:</b>
<br>
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
<b>example:</b>
<br>
<pre>
P(#a).css('color:red; background:blue;');
</pre>
<hr>
