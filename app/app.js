import Clock from './modules/Clock';

console.log(new Date());

const clock = new Clock();

console.log(clock.hours);
console.log(clock.minutes);
console.log(clock.seconds / 60);

window.setInterval(clock.render, 1000);
