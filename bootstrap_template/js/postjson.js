var Article={};
Article.Title1 = "hi";
(function(){
  //paragraphs
  Article.Title = "hello";
  var monthName =["January", "February","March","April","May","June","July","August","September","October","November","December"];
  Article.load = function(name){
    var json = Gladbeak.getPost(getParameterByName(name));
    //document.getElementById("dyn_header").style.backgroundImage = "url('"+json.bgImageUrl+"')";
    document.getElementById("dyn_title").innerText=json.title;
    document.getElementById("dyn_desc").innerText=json.desc;
    try {
      document.getElementById("dyn_author").innerHtml='Posted by <a href="'+json.website+'">'+json.author+'</a> on '+monthName[new Date(json.date).getMonth()]+' '+new Date(json.date).getFullYear();
    } catch (e) {
console.log(e.message);
    }
    // document.getElementById("dyn_author_website").href=json.website;
    // document.getElementById("dyn_post_date").innerText=" on "+  monthName[new Date(json.date).getMonth()]+" "+new Date(json.date).getFullYear();
  //  document.getElementById("dyn_author_website").setAttribute("href", json.website);//.href=json.website;

    for (var prop in json.para) {
        var para = document.createElement("p");
        var node = document.createTextNode(json.para[prop]);
        para.appendChild(node);

        var element = document.getElementById("paragraphs");
        element.appendChild(para);
    }
  };
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
      var  results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};
})();
