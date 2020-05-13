document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);   
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('keydown', function (e) {
    if(e.keyCode === 27)  {
      modal.classList.remove('modal--visible');}
  }); 
    
  document.addEventListener('click', function (e) {
    if(e.target == modal)  {
      modal.classList.remove('modal--visible');}
  }); 
    
});