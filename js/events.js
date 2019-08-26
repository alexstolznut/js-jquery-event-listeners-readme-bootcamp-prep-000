//define functions here
const getIt = function() {
  $('p').on('click', function() {
    return alert('Hey!')
  }
);
}

const frameIt = function() {
  $('img').on('load', this.addClass('tasty'));
}

const pressIt = function() {
  $('form > input#typing').on('keydown',(e)=> (e.which === 'G'){alert('You pressed G!')});
}

const submitIt = function(){
  $('form').on('submit', ()=>alert("Your form is going to be submitted now."));
}
$(document).ready(function(){
// call functions here
window.getIt();
window.frameIt();
window.pressIt();
window.submitIt();
});
