'use string' 

window.addEventListener('DOMContentLoaded', () => {

   const header = document.querySelector('.header')
   const iconMenu = document.querySelector('.icon-menu')
   const menuBody = document.querySelector('.menu__body')

   // Вызов и закрытие Burger-menu //

   iconMenu.addEventListener('click', () => {
      iconMenu.classList.toggle('_active')
      menuBody.classList.toggle('_active')
      if(iconMenu.classList.contains('_active')) {
         document.body.style.overflow = 'hidden'
      } else {
         document.body.style.overflow = ''
      }
   })

   // Анимация header и позционирование fixed //

   window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY
      if (scrollDistance > 0 && !header.classList.contains('fixed')) {
          header.classList.toggle('fixed')
      } else if (scrollDistance <= 0) {
          header.classList.toggle('fixed')
      }
  })

   // Анимация элементов главного экрана //

  setTimeout(() => {
   setTimeout(() => {
    document.querySelectorAll('.animation-second').forEach(item => {
        item.classList.add('animation')
    })
   }, 500)
   document.querySelectorAll('.animation-first').forEach(item => {
    item.classList.add('animation')
   })
   }, 300)

   //  Анимация элементов которые попадают в поле экрана // 

   let lastScrollTop = 0; 

   window.addEventListener("scroll", function() {
      let st = window.pageYOffset || document.documentElement.scrollTop; 
      if (st > lastScrollTop){
      } else {
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
   }, false);

   function onEntry(entry) {
      let scrollDistance = window.scrollY
      entry.forEach(change => {
         if (change.isIntersecting && scrollDistance >= 0) {
            change.target.classList.add('animation');
         } else if (change.isIntersecting && scrollDistance < window.clientHeight) {
            change.target.classList.remove('animation');
         }
      });
      }
      let options = { threshold: [0.2] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.item-animation');
      for (let elm of elements) {
         observer.observe(elm);
   }
   
   //  Вывод процентов на слайдере // 

   let input = document.querySelector('.add__input')
   let inputValue = document.querySelector('.information__slider')
   
   input.addEventListener('input', (e) => {
      inputValue.innerHTML = e.target.value + '%'
   })

   // Hover на кнопку "Прикрепить файл" // 

   let fileImport = document.querySelector('#file__import')

   fileImport.addEventListener('mouseenter', (e) => {
     let addButton = document.querySelector('.add__button')
      addButton.classList.add('hover')
   })
   fileImport.addEventListener('mouseleave', (e) => {
      let addButton = document.querySelector('.add__button')
       addButton.classList.remove('hover')
    })
})