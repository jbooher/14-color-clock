import Clock from './modules/Clock';
import padNumber from './modules/Utils';

const clockDiv = document.querySelector("#clock");

const clock = new Clock();

window.setInterval(clock.render.bind(clock), 1000);
window.setInterval(clock.renderBar.bind(clock), 1000);
window.setInterval(clock.toHex.bind(clock), 1000);

clockDiv.addEventListener("mouseenter", function(e) {
  clock.hex = true;
});

clockDiv.addEventListener("mouseleave", function(e) {
  clock.hex = false;
});
