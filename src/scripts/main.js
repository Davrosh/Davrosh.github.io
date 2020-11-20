
import ScrollReveal from 'scrollreveal'
// Export your custom function for declarative use
export { scrollRevelation }

// Code your custom function
function scrollRevelation( classString ) {
  window.sr =  new ScrollReveal();
  sr.reveal('.card', 100);
}
