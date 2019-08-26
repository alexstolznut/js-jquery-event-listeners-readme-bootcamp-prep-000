//define functions here
function getIt() {
  $('p').on('click', function(){ return alert('Hey!')});
}

function frameIt() {
  $('img').on('load', this.addClass('tasty'));
}

function pressIt(){
  $('form > input#typing').on('keydown',(e)=> (e.which === 'G'){alert('You pressed G!')}));
}

function submitIt(){
  $('form').on('submit', ()=>alert("Your form is going to be submitted now."));
}
$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
