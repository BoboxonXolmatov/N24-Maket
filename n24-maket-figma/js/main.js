const elModal = document.querySelector('.modal');
const elModalClose = document.querySelector('.js-modal-close');

const elSiteHeader = document.querySelector('.site-header');
const elSiteHeaderToggler = elSiteHeader.querySelector('.js-site-header-toggler');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', function () {
    elSiteHeader.classList.toggle('site-header-open');
  });
}

if (elModalClose) {
  elModalClose.addEventListener('click', function () {
    elModal.classList.remove('modal-open');
  });
}
