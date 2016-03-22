(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Clock = require('./modules/Clock');

var _Clock2 = _interopRequireDefault(_Clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(new Date());

var clock = new _Clock2.default();

console.log(clock.hours);
console.log(clock.minutes);
console.log(clock.seconds / 60);

window.setInterval(clock.render, 1000);

},{"./modules/Clock":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = require("./Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clock = function () {
  function Clock() {
    _classCallCheck(this, Clock);
  }

  _createClass(Clock, [{
    key: "render",
    value: function render() {
      var clock = document.querySelector("#clock");
      var clockBar = document.querySelector("#clockBar");
      var displayTime = document.querySelector("div");
      var hour = (0, _Utils2.default)(new Date().getHours());
      var minute = (0, _Utils2.default)(new Date().getMinutes());
      var second = (0, _Utils2.default)(new Date().getSeconds());
      var time = hour + " : " + minute + " : " + second;

      displayTime.innerHTML = time;
      clock.insertBefore(displayTime, clockBar);
    }
  }]);

  return Clock;
}();

exports.default = Clock;

},{"./Utils":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function padNumber(num) {
  num = String(num);

  if (num.length === 1) {
    return "0" + num;
  }
  return num;
}

exports.default = padNumber;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL21vZHVsZXMvQ2xvY2suanMiLCJhcHAvbW9kdWxlcy9VdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLFFBQVEsR0FBUixDQUFZLElBQUksSUFBSixFQUFaOztBQUVBLElBQU0sUUFBUSxxQkFBUjs7QUFFTixRQUFRLEdBQVIsQ0FBWSxNQUFNLEtBQU4sQ0FBWjtBQUNBLFFBQVEsR0FBUixDQUFZLE1BQU0sT0FBTixDQUFaO0FBQ0EsUUFBUSxHQUFSLENBQVksTUFBTSxPQUFOLEdBQWdCLEVBQWhCLENBQVo7O0FBRUEsT0FBTyxXQUFQLENBQW1CLE1BQU0sTUFBTixFQUFjLElBQWpDOzs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7OztJQUVNOzs7Ozs7OzZCQUVLO0FBQ1AsVUFBTSxRQUFRLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFSLENBREM7QUFFUCxVQUFNLFdBQVcsU0FBUyxhQUFULENBQXVCLFdBQXZCLENBQVgsQ0FGQztBQUdQLFVBQU0sY0FBYyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZCxDQUhDO0FBSVAsVUFBTSxPQUFPLHFCQUFVLElBQUksSUFBSixHQUFXLFFBQVgsRUFBVixDQUFQLENBSkM7QUFLUCxVQUFNLFNBQVMscUJBQVUsSUFBSSxJQUFKLEdBQVcsVUFBWCxFQUFWLENBQVQsQ0FMQztBQU1QLFVBQU0sU0FBUyxxQkFBVSxJQUFJLElBQUosR0FBVyxVQUFYLEVBQVYsQ0FBVCxDQU5DO0FBT1AsVUFBTSxPQUFVLGVBQVUsaUJBQVksTUFBaEMsQ0FQQzs7QUFTUCxrQkFBWSxTQUFaLEdBQXdCLElBQXhCLENBVE87QUFVUCxZQUFNLFlBQU4sQ0FBbUIsV0FBbkIsRUFBZ0MsUUFBaEMsRUFWTzs7OztTQUZMOzs7a0JBaUJTOzs7Ozs7OztBQ25CZixTQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0I7QUFDdEIsUUFBTSxPQUFPLEdBQVAsQ0FBTixDQURzQjs7QUFHdEIsTUFBRyxJQUFJLE1BQUosS0FBZSxDQUFmLEVBQWtCO0FBQ25CLGlCQUFXLEdBQVgsQ0FEbUI7R0FBckI7QUFHQSxTQUFPLEdBQVAsQ0FOc0I7Q0FBeEI7O2tCQVNlIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBDbG9jayBmcm9tICcuL21vZHVsZXMvQ2xvY2snO1xuXG5jb25zb2xlLmxvZyhuZXcgRGF0ZSgpKTtcblxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcblxuY29uc29sZS5sb2coY2xvY2suaG91cnMpO1xuY29uc29sZS5sb2coY2xvY2subWludXRlcyk7XG5jb25zb2xlLmxvZyhjbG9jay5zZWNvbmRzIC8gNjApO1xuXG53aW5kb3cuc2V0SW50ZXJ2YWwoY2xvY2sucmVuZGVyLCAxMDAwKTtcbiIsImltcG9ydCBwYWROdW1iZXIgZnJvbSAnLi9VdGlscyc7XG5cbmNsYXNzIENsb2NrIHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrXCIpO1xuICAgIGNvbnN0IGNsb2NrQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9ja0JhclwiKVxuICAgIGNvbnN0IGRpc3BsYXlUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcbiAgICBjb25zdCBob3VyID0gcGFkTnVtYmVyKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSk7XG4gICAgY29uc3QgbWludXRlID0gcGFkTnVtYmVyKG5ldyBEYXRlKCkuZ2V0TWludXRlcygpKTtcbiAgICBjb25zdCBzZWNvbmQgPSBwYWROdW1iZXIobmV3IERhdGUoKS5nZXRTZWNvbmRzKCkpO1xuICAgIGNvbnN0IHRpbWUgPSBgJHtob3VyfSA6ICR7bWludXRlfSA6ICR7c2Vjb25kfWA7XG5cbiAgICBkaXNwbGF5VGltZS5pbm5lckhUTUwgPSB0aW1lO1xuICAgIGNsb2NrLmluc2VydEJlZm9yZShkaXNwbGF5VGltZSwgY2xvY2tCYXIpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xvY2s7XG4iLCJmdW5jdGlvbiBwYWROdW1iZXIobnVtKSB7XG4gIG51bSA9IFN0cmluZyhudW0pO1xuXG4gIGlmKG51bS5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gYDAke251bX1gO1xuICB9XG4gIHJldHVybiBudW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZE51bWJlcjtcbiJdfQ==
