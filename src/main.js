//API//
var textContainer = document.querySelectorAll("body span");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var apiResult = JSON.parse(this.responseText);

         { 
             function addWeatherText() {
                var newWeatherText = document.createTextNode(apiResult.weather[0].description);
               weathertext.appendChild(newWeatherText);
           };
            addWeatherText();
        } 
        
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=34219,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();

//Learn More Button//
function learnMore() {
  var text = document.getElementById("learnmorepara");
  if (text.style.display == "none"){
    text.style.display = "block";
  }
  else {
    text.style.display = "none";
  }
}

document.getElementById("button").addEventListener("click", function() {
  learnMore();
  }, false);
//Collapsible Menu//

window.onload=function(){function collapsibleContent1() {
    var text = document.getElementById("content1");
    if (text.style.display == "none"){
      text.style.display = "block";
    }
    else {
      text.style.display = "none";
    }
  }
  
  document.getElementById("button1").addEventListener("click", function() {
    collapsibleContent1();
    }, false);
}

window.onload=function(){function collapsibleContent2() {
    var text = document.getElementById("content2");
    if (text.style.display == "none"){
      text.style.display = "block";
    }
    else {
      text.style.display = "none";
    }
  }

  document.getElementById("button2").addEventListener("click", function() {
    collapsibleContent2();
    }, false);
}