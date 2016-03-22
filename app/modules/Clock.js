import padNumber from './Utils';

class Clock {

  render() {
    const clock = document.querySelector("#clock");
    const clockBar = document.querySelector("#clockBar")
    const displayTime = document.querySelector("div");
    const hour = padNumber(new Date().getHours());
    const minute = padNumber(new Date().getMinutes());
    const second = padNumber(new Date().getSeconds());
    const time = `${hour} : ${minute} : ${second}`;

    displayTime.innerHTML = time;
    clock.insertBefore(displayTime, clockBar);
  }

}

export default Clock;
