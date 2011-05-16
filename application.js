$(function() {
  $("#button").click(function() {
    $("audio#bomb").get(0).play();
  });
  $("audio#bomb").attr("controls", false);
});
