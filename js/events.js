//define functions here
function getIt() {
  $('p').on('click', ()=>alert('Hey!'));
}

function frameIt() {
  $('img').on('load', this.addClass('tasty'));
}

function pressIt(){
  $('form > input#typing').on('keydown',(e)=> (e.which === 'G'){alert('You pressed G!')});
}

function submitIt(){
  $('form').on('submit', ()=>alert("Your form is going to be submitted now."));
}
$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
// call functions here

});
