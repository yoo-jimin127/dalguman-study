 const panels=document.querySelectorAll('.panel');

 function active(i){
     if(i.propertyName.includes('flcx')){
         this.classList.toggle('open-active');
     }
 }
 function open(){
     this.classList.toggle('open');
 }

 panels.forEach(panel => panel.addEventListener('click', open));
 panels.forEach(panel => panel.addEventListener('transitionend', active));