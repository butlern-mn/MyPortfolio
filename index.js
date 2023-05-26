console.log("Is running")

$(document).ready(function(){
  $(".contactButton").hover(function(){
    $(this).css("background-color", "#013863");
    $(this).css("font-size", "28px");
    }, function(){
    $(this).css("background-color", "#007b84");
    $(this).css("font-size", "24px");
  });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("mymodalButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
document.getElementById("mymodalbutton").onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
