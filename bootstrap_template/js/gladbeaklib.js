var Gladbeak={};
Gladbeak.tim="";
 (function(){
//
   Gladbeak.init = function(){
//     alert("hi");
//   };
var xhttp = createCORSRequest('GET', 'http://www.sunnysinghdev.com');
if (!xhttp) {
  throw new Error('CORS not supported');
}

  //  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
      ///  debugger;
        var a = xhttp.responseText;
        document.getElementById("dyn_desc").innerHtml=a;
        }
    };
    //xhttp.open("GET", "http:www.sunnysinghdev.com", true);
    xhttp.send();
};
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
    xhr.withCredentials="true";
    xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
    xhr.setRequestHeader('Content-Type', 'text/html');

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
};

//
})();
