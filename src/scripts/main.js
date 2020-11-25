
import ScrollReveal from 'scrollreveal'




// Export your custom function for declarative use
export { scrollRevelation, sendMail }

// Code your custom function
function scrollRevelation( classString ) {
  window.sr =  new ScrollReveal();
  sr.reveal('.card', 100);
}

function sendMail() {
  var subject = $('#contact #subject').val();
  var email = $('#contact #email').val();
  var message = $('#contact textarea').val();
  window.location.href = 'mailto:mail@company.com?subject=The subject - ' + subject + ' (' + email + ')' + '&body=' + message;
};