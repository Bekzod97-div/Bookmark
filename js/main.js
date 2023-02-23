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

  // FAQ
  const elsButton = document.querySelectorAll('.faq__btn');
  const elsDescription = document.querySelectorAll('.faq__btn__description');
  const elsIcon = document.querySelectorAll('.faq-svg');

  elsButton.forEach(function (elsButton, index) {
    elsButton.addEventListener('click', function() {
      elsDescription[index].classList.toggle('js__faq__btn__description');
      elsIcon[index].classList.toggle('rotate');
    });
  })
