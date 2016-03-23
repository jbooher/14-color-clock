import padNumber from './Utils';

class Clock {

  constructor() {
    this.hex = false;
  }

  render() {
    const displayTime = document.querySelector("#displayTime");

    let hour = padNumber(new Date().getHours());
    let minute = padNumber(new Date().getMinutes());
    let second = padNumber(new Date().getSeconds());

    if (this.hex) {
      hour = padNumber(Number(new Date().getHours()).toString(16));
      minute = padNumber(Number(new Date().getMinutes()).toString(16));
      second = padNumber(Number(new Date().getSeconds()).toString(16));
    }

    const time = `${hour}:${minute}:${second}`;
    displayTime.innerHTML = time;
  }

  renderBar() {
    const clockBar = document.querySelector("#clockBar");
    let barWidth = (new Date().getSeconds() / 60) * 100;
    clockBar.style.width = `${barWidth}%`;
  }

  toHex() {
    const hours = padNumber(Number(new Date().getHours()).toString(16));
    const minutes = padNumber(Number(new Date().getMinutes()).toString(16));
    const seconds = padNumber(Number(new Date().getSeconds()).toString(16));
    const hex = `${hours}${minutes}${seconds}`;
    document.querySelector("body").style.background = `#${hex}`;
  }

  renderHexClock() {
    const displayTime = document.querySelector("#displayTime");
    const hours = padNumber(Number(new Date().getHours()).toString(16));
    const minutes = padNumber(Number(new Date().getMinutes()).toString(16));
    const seconds = padNumber(Number(new Date().getSeconds()).toString(16));
    const hex = `${hours}:${minutes}:${seconds}`;

    displayTime.innerHTML = hex;
  }
}

export default Clock;
