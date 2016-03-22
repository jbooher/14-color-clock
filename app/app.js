import Clock from './modules/Clock';
import padNumber from './modules/Utils';

const clockDiv = document.querySelector("#clock");

const clock = new Clock();

window.setInterval(clock.renderHexClock, 1000);
window.setInterval(clock.render, 1000);
window.setInterval(clock.renderBar, 1000);
window.setInterval(clock.toHex, 1000);
