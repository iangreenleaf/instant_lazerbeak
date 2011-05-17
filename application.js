$(function() {
  if (!!(document.createElement('audio').canPlayType)) {
    $("#button").click(function() {
      $("audio#bomb").get(0).play();
    });
    $("audio#bomb").attr("controls", false);
  } else {
    // We only use jPlayer if lacking native support
    $("#button").after($("<div id='jplayer'></div>"));
    $("#jplayer").jPlayer({
      ready: function() {
        $(this).jPlayer("setMedia", {
          mp3: $("audio#bomb source.mp3").attr("src"),
          oga: $("audio#bomb source.ogg").attr("src")
        });
      },
      swfPath: "jplayer",
      supplied: "mp3, oga",
      preload: "auto"
    });
    $("#button").click(function() {
      $("#jplayer").jPlayer("play", 0);
    });
  }
});
