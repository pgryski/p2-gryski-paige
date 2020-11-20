
//Collapsible Menu//

function collapsibleContent() {
    var text = this.nextElementSibling;
    if (text.style.display == "none"){
      text.style.display = "block";
    }
    else {
      text.style.display = "none";
    }
  }
  
var collapsibles = document.getElementsByClassName("collapsible");
for (i = 0; i < collapsibles.length; i++){
  collapsibles[i].addEventListener("click", collapsibleContent);
}