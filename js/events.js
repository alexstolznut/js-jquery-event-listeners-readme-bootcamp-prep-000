//define functions here
const getIt = function getIt() {
  $('p').on('click', function() { 
    return alert('Hey!')
  }
);
}

const frameIt = function frameIt() {
  $('img').on('load', this.addClass('tasty'));
}

const pressIt = function pressIt() {
  $('form > input#typing').on('keydown',(e)=> (e.which === 'G'){alert('You pressed G!')});
}

const submitIt = function submitIt(){
  $('form').on('submit', ()=>alert("Your form is going to be submitted now."));
}
$(document).ready(function(){
// call functions here
window.getIt();
window.frameIt();
window.pressIt();
window.submitIt();
});
