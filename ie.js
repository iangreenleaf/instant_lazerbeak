// Look, I'm Microsoft, I'm killing the web with stupidity.
$(function() {
  // Fake :active behavior on <button>
  $("#button").mousedown(function() {
    $(this).addClass("active");
  });
  $("#button").bind('mouseup mouseout', function() {
    $(this).removeClass("active");
  });
});
// Shiv this shit
document.createElement("audio");
document.createElement("source");
