//Stupid gluecode
function doStuff() {
  var source = document.getElementById("content").value;
  console.log("Parsing: " + source);

  var parser = new Parser(source);
  parser.parse(function(data){
    alert(data + " / Holy Hell, this works");
  }, function(){});
}


// Parser Class
function Parser (source) {
  this.source = source;
}

Parser.prototype.parse = function (onSuccess, onError) {
  //Step one: Minify the CSS
  minified = this.source.replace(/\s/g,'');

  //Step two: Parse the selectors and their content
  this.parseMediaQueries(minified);
}

Parser.prototype.parseElementSelectors(data, onSuccess, onError) {
  
}
