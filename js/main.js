// Features
const elsTabItem = document.querySelectorAll('.featuresnav__item');
const elsLink = document.querySelectorAll('.js-featuresnav__link');
const elsFeaturesInfo = document.querySelectorAll('.features__info__container');

function deactivateTabItems() {
  elsTabItem.forEach(function (elTabItem) {
    elTabItem.classList.remove('js-featuresnav__item');
  });
};

function deactivateFeaturesInfo() {
  elsFeaturesInfo.forEach(function (elFeaturesInfo) {
    elFeaturesInfo.classList.remove('js-features__info__container');
  });
};

elsLink.forEach(function (elLink) {
  elLink.addEventListener('click', function (evt) {
    // prevent page move
    evt.preventDefault();

    //Remove js-featuresnav__item class
     deactivateTabItems();

    //  Remove Js_features__info__container from links
    deactivateFeaturesInfo();

    // Show clicked panel
    // const elActiveFeaturesInfo = document.querySelector(`#${elLink.href.split('#')[1]}`);
    const elActiveFeaturesInfo = document.querySelector(elLink.dataset.tab);
    elActiveFeaturesInfo.classList.add('js-features__info__container');


    // Add active class to featuresnav__item classlist
    elLink.parentElement.classList.add('js-featuresnav__item');
  })
})


  // FAQ
  const elsButton = document.querySelectorAll('.accordion__item-toggler');
  const elsFaqAccordion = document.querySelectorAll('.faq__accordion');

  function closeAccardion() {
    elsTabItem.forEach(function (elFaqAccordion) {
      elFaqAccordion.classList.remove('faq__accordion--open');
    });
  };

  elsButton.forEach(function (elButton) {
    elButton.addEventListener('click', function() {
      closeAccardion();

      elButton.closest('.faq__accordion').classList.toggle('faq__accordion--open');
    });
  });
