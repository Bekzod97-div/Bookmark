const modifiers = {
  featuresActive: 'js-featuresnav__item',
  accordionOpen: 'faq__accordion--open',
  accordionItem: '.faq__accordion',
  infoContainer: 'js-features__info__container'
}

// Features
const elsTabItem = document.querySelectorAll('.featuresnav__item');
const elsLink = document.querySelectorAll('.js-featuresnav__link');
const elsFeaturesInfo = document.querySelectorAll('.features__info__container');

function deactivateTabItems() {
  elsTabItem.forEach(function (elTabItem) {
    elTabItem.classList.remove(modifiers.featuresActive);
  });
};

function deactivateFeaturesInfo() {
  elsFeaturesInfo.forEach(function (elFeaturesInfo) {
    elFeaturesInfo.classList.remove(modifiers.infoContainer);
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
    elActiveFeaturesInfo.classList.add(modifiers.infoContainer);


    // Add active class to featuresnav__item classlist
    elLink.parentElement.classList.add(modifiers.featuresActive);
  })
})


  // FAQ
  const elsButton = document.querySelectorAll('.accordion__item-toggler');
  const elsFaqAccordion = document.querySelectorAll(modifiers.accordionItem);

  function closeAccardion() {
    elsTabItem.forEach(function (elFaqAccordion) {
      elFaqAccordion.classList.remove(modifiers.accordionOpen);
    });
  };

  elsButton.forEach(function (elButton) {
    elButton.addEventListener('click', function() {
      closeAccardion();

      elButton.closest(modifiers.accordionItem).classList.toggle(modifiers.accordionOpen);
    });
  });
