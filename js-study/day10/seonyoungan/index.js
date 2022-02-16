const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
let between = false; //default


function handleShiftClick(event){
  console.log(event.target.checked);
  if (event.shiftKey && event.target.checked){
    checkboxes.forEach(checkbox =>{
      if (checkbox === event.target || checkbox === lastChecked ){
        between = !between;
      }
      if (between){
        checkbox.checked = true;
      }
    });
  }
  lastChecked = event.target;
}

checkboxes.forEach(checkbox =>{
  checkbox.addEventListener('click', handleShiftClick);
});