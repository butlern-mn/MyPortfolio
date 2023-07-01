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

  // Show the Modal on load
$(document).ready(function(){
  $("#myModal").modal("show");
  // $("#myModal").modal("show").delay(15000).fadeOut(100);
});