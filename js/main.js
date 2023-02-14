document.getElementById("first-btn").addEventListener("click", function() {
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "none";
  });
  document.getElementById("second-btn").addEventListener("click", function() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("third").style.display = "none";
  });
  document.getElementById("third-btn").addEventListener("click", function() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
  });