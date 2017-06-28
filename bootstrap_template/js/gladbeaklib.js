var Gladbeak={};
Gladbeak.tim="";

 (function(){
   var file="blogpost.json";
   var blogJson = null;
   Gladbeak.init = function(){
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var a = xhttp.responseText;
          var ar = JSON.parse(a);
          blogJson = ar;
      }
    };
    //xhttp.open("GET", "http:www.sunnysinghdev.com", true);
    xhttp.open("GET", file, false);
    xhttp.send(null);
  };
  Gladbeak.getPost = function(id){
   return blogJson[id];
  };
  Gladbeak.init();
})();
