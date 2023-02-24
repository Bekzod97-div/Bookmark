// Features
const elsTabItem = document.querySelectorAll('.js-featuresnav__item');
const elsLink = document.querySelectorAll('.js-featuresnav__link');

elsLink.forEach(function (elLink) {
  elLink.addEventListener('click', function (evt) {
    // prevent page move
    evt.preventDefault();

    //Remove js-featuresnav__item class
    elsTabItem.forEach(function (elTabItem) {
      elTabItem.classList.remove('js-featuresnav__item');
    });

    // Add active class to featuresnav__item classlist
    elLink.parentElement.classList.add('js-featuresnav__item');

    console.log(elLink.href.split('#'));
  })
})


// document.getElementById("first-btn").addEventListener("click", function() {
//   document.getElementById("first").style.display = "block";
//   document.getElementById("second").style.display = "none";
//   document.getElementById("third").style.display = "none";
// });
// document.getElementById("second-btn").addEventListener("click", function() {
//   document.getElementById("first").style.display = "none";
//   document.getElementById("second").style.display = "block";
//   document.getElementById("third").style.display = "none";
// });
// document.getElementById("third-btn").addEventListener("click", function() {
//   document.getElementById("first").style.display = "none";
//   document.getElementById("second").style.display = "none";
//   document.getElementById("third").style.display = "block";
// });

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
