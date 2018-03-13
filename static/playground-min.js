function redirect(){clearLines(),doRedirect&&(window.history.replaceState({},"MongoDB playground","/"),document.getElementById("link").style.visibility="hidden",document.getElementById("link").value="",doRedirect=!1,document.getElementById("share").disabled=!1)}function loadDocs(){var e=new XMLHttpRequest;e.open("GET","/static/docs.html",!0),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&(document.getElementById("docContent").innerHTML=e.responseText)},e.send(null)}function showDoc(e){e&&"inline"===document.getElementById("docDiv").style.display&&(e=!1),document.getElementById("docDiv").style.display=e?"inline":"none",document.getElementById("queryDiv").style.display=e?"none":"inline",document.getElementById("resultDiv").style.display=e?"none":"inline"}function run(e){if(isCorrect()){var t=document.getElementById("config").value,n=document.getElementById("query").value,r=new XMLHttpRequest;r.open("POST",e?"/save/":"/run/"),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.onreadystatechange=function(){if(4===r.readyState&&200===r.status)if(e){window.history.replaceState({},"MongoDB playground",r.responseText),doRedirect=!0;var t=document.getElementById("link");t.value=r.responseText,t.style.visibility="visible",document.getElementById("share").disabled=!0}else{var n=document.getElementById("result"),i=document.getElementById("resultNb");try{var l=JSON.parse(r.responseText);n.classList.remove("red"),i.innerHTML=l.length+" results",n.value=JSON.stringify(l,null,2)}catch(e){error(r.responseText,"result")}}},t=JSON.stringify(JSON.parse(t));var i=document.getElementById("mode");r.send("mode="+i.options[i.selectedIndex].text+"&config="+encodeURIComponent(t)+"&query="+encodeURIComponent(n))}}function isCorrect(){showDoc(!1);var e=document.getElementById("config"),t=format(e.value.trim(),"config");if("invalid"===t)return!1;e.value=t;var n=document.getElementById("query");if(t=n.value.trim(),";"===t.slice(-1)&&(t=t.substring(0,t.length-1)),!/^db\..*\.(find|aggregate)\([\s\S]*\)$/.test(t))return error("invalid query: \nmust match db.coll.find(...) or db.coll.aggregate(...)","query"),!1;var r=t.substring(0,t.indexOf("(")+1),i=t.substring(t.length-1,t.length);return t=t.substring(t.indexOf("(")+1,t.length-1).trim(),"invalid"!==(t=format(t,"query"))&&(n.value=r+t+i,clearLines(),!0)}function format(e,t){if(""===e)return"";try{var n=JSON.parse(e);return JSON.stringify(n,null,2)}catch(e){return error("invalid "+t+":\n"+e,t),"invalid"}}function error(e,t){var n=e.match(/line [0-9]*/);if(null!==n&&"result"!==t){var r=Number(n[0].replace("line ",""))-1;document.getElementById(t+"Lines").childNodes[r].classList.add("red")}var i=document.getElementById("result");i.classList.add("red"),i.value=e,document.getElementById("resultNb").innerHTML="0 result"}function clearLines(){document.querySelectorAll(".lines > div").forEach(function(e){e.classList.remove("red")})}function scrollArea(e){var t=document.getElementById(e),n=t.scrollTop,r=t.clientHeight,i=t.parentNode.querySelector(".lines");i.style.marginTop=-n+"px";var l=t.getAttribute("data-lineNo");l=fillOutLines(i,n+r,l),t.setAttribute("data-lineNo",l)}function fillOutLines(e,t,n){for(;e.clientHeight<t;){var r=document.createElement("div");r.innerHTML=n,e.appendChild(r),n++}return n}var doRedirect=!0;