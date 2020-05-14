document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal')
  const modalBtn = document.querySelectorAll('[data-toggle=modal]')
  const closeBtn = document.querySelector('.modal__close')
  const modalDialog = document.querySelector('.modal__dialog')
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) {
      switchModal();
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target == modalDialog.parentNode) {
      switchModal();
    }
  });

});