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

HTMLElement.prototype.toggleCssDefault = function(styles){
    if (this.style.cssText.includes(styles)){
      //var newstringreplaced = styles.replace(/;/gi, ";,");
    //var styleclause = newstringreplaced.split(",");
      //styleclause.pop();
      var styleclause = styles;
      console.log(styleclause);
      console.log(this.style.cssText.replace(" " + styleclause, ""));
      var newcsstext = this.style.cssText.replace(" " + styleclause, "");
      this.style.cssText = newcsstext;
    }
 

  else{
    this.style.cssText += styles;
  }
};

  //P('#a').toggleCssDefault('color: red;');

HTMLElement.prototype.toggleCss = function(styles, togglestyle){
    if (this.style.cssText.includes(styles)){
      //var newstringreplaced = styles.replace(/;/gi, ";,");
    //var styleclause = newstringreplaced.split(",");
      //styleclause.pop();
      var styleclause = styles;
      console.log(styleclause);
      console.log(this.style.cssText.replace(styleclause, togglestyle));
      var newcsstext = this.style.cssText.replace(styleclause, togglestyle);
      this.style.cssText = newcsstext;
    }
 

  else{
    this.style.cssText += styles;
  }
};

HTMLElement.prototype.toggleCssAny = function(style, value){
  var cssstyle = 'this.style.' + style + ' !== "' + value + '";';
  console.log(eval(cssstyle));
  if (eval(cssstyle)){
    var oldstyler = 'this.style.' + style;
    window.oldstyle = eval(oldstyler);
    console.log(window.oldstyle);
    var newstyle = 'this.style.' + style + ' = "' + value + '";';
   eval(newstyle);
  }else{
    var newoldstyle = 'this.style.' + style + ' = "' + window.oldstyle + '";';
    eval(newoldstyle);
  }
  
};
