var PCSS = {};
PCSS.css = 
  function(css){
  var clause = css.replace(/(\r\n|\n|\r)/gm,"");
  var newstringreplaced = clause.replace(/}/gi, "},");
var clause = newstringreplaced.split(",");
  clause.pop();
  console.log(clause);

  for (i in clause){
         var selector=clause[i].split('{')[0];
console.log(selector);
var csstext=clause[i].substring(clause[i].lastIndexOf("{")+1,clause[i].lastIndexOf("}"));
var csstext = csstext.replace(/(\r\n|\n|\r)/gm,"");
console.log(csstext);
document.querySelector(selector).style.cssText += csstext;
  }
 }
;



var P = function(element){return document.querySelector(element);}
HTMLElement.prototype.html = function(html){
    this.innerHTML = html;
};
HTMLElement.prototype.css = function(styles){
    this.style.cssText += styles;
};
