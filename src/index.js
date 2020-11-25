// Import main SCSS for webpack compilation
import "./styles/main.scss";

// Import all JS lib for webpack compilation
import "./scripts/lib";

// Import your custom function
import { scrollRevelation } from "./scripts/main";

// Import all assets for webpack compilation
function importAll(r) {
  return r.keys().map(r);
}
importAll(require.context("./assets", true, /\.(png|jpe?g|svg)$/));

// Declare which function are accessible to the browser
Object.assign(window, {
  scrollRevelation,
});

$(function () {
  $("#carousel-example-generic").swipe({
    swipe: function (
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction == "left") $(this).carousel("next");
      if (direction == "right") $(this).carousel("prev");
    },
  });
});

