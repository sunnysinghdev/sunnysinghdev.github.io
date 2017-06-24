var Article={};
Article.Title1 = "hi";
(function(){
  //paragraphs
  Article.Title="hello";
  var monthName =["January", "February","March","April","May","June","July","August","September","October","November","December"];
  var tempJson = {
    "title":"Day to day IT troubbleshoot",
    "desc":"This article about how to counter our day to day it problems.",
    "para":["Para 1 of dynamic blog"," Para 2 of dynamiv blog"],
    "bgImageUrl":"",
    "author":"Sunny Singh",
    "website":"http://sunnysinghdev.com/about_me.html",
    "date":Date.now
  };
  Article.load = function(json){
    document.getElementById("dyn_header").style.backgroungImage = json.bgImageUrl;
    document.getElementById("dyn_title").innerText=json.title;
    document.getElementById("dyn_desc").innerText=json.desc;
    document.getElementById("dyn_author_website").innerText=json.author;
    document.getElementById("dyn_author").innerHtml+=" on "+  monthName[new Date(json.date).getMonth()]+" "+new Date(json.date).getYear();
  //  document.getElementById("dyn_author_website").setAttribute("href", json.website);//.href=json.website;

    for (var prop in json.para) {
        var para = document.createElement("p");
        var node = document.createTextNode(json.para[prop]);
        para.appendChild(node);

        var element = document.getElementById("paragraphs");
        element.appendChild(para);
    }
  };
})();
