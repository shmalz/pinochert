document.querySelector('.burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.page-nav').classList.toggle('open');
  })