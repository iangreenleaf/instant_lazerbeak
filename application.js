$(function() {
  var button = $("<button>LAZERBEAK</button>").attr("id", "button");
  button.click(function() {
    $("audio#bomb").get(0).play();
  });
  $("audio#bomb").attr("controls", false)
    .after(button);
});
