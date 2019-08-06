
document.getElementById("navToggle").addEventListener('click',navCollapse);

function navCollapse(e) {
  e.preventDefault();

let removeClass = document.querySelector('collapse');
      removeClass.classList.remove('display_none');

}
