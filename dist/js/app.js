(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Clock = require('./modules/Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _Utils = require('./modules/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clockDiv = document.querySelector("#clock");

var clock = new _Clock2.default();

window.setInterval(clock.renderHexClock, 1000);
window.setInterval(clock.render, 1000);
window.setInterval(clock.renderBar, 1000);
window.setInterval(clock.toHex, 1000);

},{"./modules/Clock":2,"./modules/Utils":3}],2:[function(require,module,exports){
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
      var displayTime = document.querySelector("#displayTime");
      var hour = (0, _Utils2.default)(new Date().getHours());
      var minute = (0, _Utils2.default)(new Date().getMinutes());
      var second = (0, _Utils2.default)(new Date().getSeconds());
      var time = hour + ":" + minute + ":" + second;

      displayTime.innerHTML = time;
    }
  }, {
    key: "renderBar",
    value: function renderBar() {
      var clockBar = document.querySelector("#clockBar");
      var barWidth = new Date().getSeconds() / 60 * 100;
      clockBar.style.width = barWidth + "%";
    }
  }, {
    key: "toHex",
    value: function toHex() {
      var hours = (0, _Utils2.default)(Number(new Date().getHours()).toString(16));
      var minutes = (0, _Utils2.default)(Number(new Date().getMinutes()).toString(16));
      var seconds = (0, _Utils2.default)(Number(new Date().getSeconds()).toString(16));
      var hex = "" + hours + minutes + seconds;
      document.querySelector("body").style.background = "#" + hex;
    }
  }, {
    key: "renderHexClock",
    value: function renderHexClock() {
      var displayTime = document.querySelector("#displayTime");
      var hours = (0, _Utils2.default)(Number(new Date().getHours()).toString(16));
      var minutes = (0, _Utils2.default)(Number(new Date().getMinutes()).toString(16));
      var seconds = (0, _Utils2.default)(Number(new Date().getSeconds()).toString(16));
      var hex = hours + ":" + minutes + ":" + seconds;

      displayTime.innerHTML = hex;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL21vZHVsZXMvQ2xvY2suanMiLCJhcHAvbW9kdWxlcy9VdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxXQUFXLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFYOztBQUVOLElBQU0sUUFBUSxxQkFBUjs7QUFFTixPQUFPLFdBQVAsQ0FBbUIsTUFBTSxjQUFOLEVBQXNCLElBQXpDO0FBQ0EsT0FBTyxXQUFQLENBQW1CLE1BQU0sTUFBTixFQUFjLElBQWpDO0FBQ0EsT0FBTyxXQUFQLENBQW1CLE1BQU0sU0FBTixFQUFpQixJQUFwQztBQUNBLE9BQU8sV0FBUCxDQUFtQixNQUFNLEtBQU4sRUFBYSxJQUFoQzs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7SUFFTTs7Ozs7Ozs2QkFFSztBQUNQLFVBQU0sY0FBYyxTQUFTLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBZCxDQURDO0FBRVAsVUFBTSxPQUFPLHFCQUFVLElBQUksSUFBSixHQUFXLFFBQVgsRUFBVixDQUFQLENBRkM7QUFHUCxVQUFNLFNBQVMscUJBQVUsSUFBSSxJQUFKLEdBQVcsVUFBWCxFQUFWLENBQVQsQ0FIQztBQUlQLFVBQU0sU0FBUyxxQkFBVSxJQUFJLElBQUosR0FBVyxVQUFYLEVBQVYsQ0FBVCxDQUpDO0FBS1AsVUFBTSxPQUFVLGFBQVEsZUFBVSxNQUE1QixDQUxDOztBQU9QLGtCQUFZLFNBQVosR0FBd0IsSUFBeEIsQ0FQTzs7OztnQ0FVRztBQUNWLFVBQU0sV0FBVyxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBWCxDQURJO0FBRVYsVUFBSSxXQUFXLElBQUssSUFBSixHQUFXLFVBQVgsS0FBMEIsRUFBMUIsR0FBZ0MsR0FBakMsQ0FGTDtBQUdWLGVBQVMsS0FBVCxDQUFlLEtBQWYsR0FBMEIsY0FBMUIsQ0FIVTs7Ozs0QkFNSjtBQUNOLFVBQU0sUUFBUSxxQkFBVSxPQUFPLElBQUksSUFBSixHQUFXLFFBQVgsRUFBUCxFQUE4QixRQUE5QixDQUF1QyxFQUF2QyxDQUFWLENBQVIsQ0FEQTtBQUVOLFVBQU0sVUFBVSxxQkFBVSxPQUFPLElBQUksSUFBSixHQUFXLFVBQVgsRUFBUCxFQUFnQyxRQUFoQyxDQUF5QyxFQUF6QyxDQUFWLENBQVYsQ0FGQTtBQUdOLFVBQU0sVUFBVSxxQkFBVSxPQUFPLElBQUksSUFBSixHQUFXLFVBQVgsRUFBUCxFQUFnQyxRQUFoQyxDQUF5QyxFQUF6QyxDQUFWLENBQVYsQ0FIQTtBQUlOLFVBQU0sV0FBUyxRQUFRLFVBQVUsT0FBM0IsQ0FKQTtBQUtOLGVBQVMsYUFBVCxDQUF1QixNQUF2QixFQUErQixLQUEvQixDQUFxQyxVQUFyQyxTQUFzRCxHQUF0RCxDQUxNOzs7O3FDQVFTO0FBQ2YsVUFBTSxjQUFjLFNBQVMsYUFBVCxDQUF1QixjQUF2QixDQUFkLENBRFM7QUFFZixVQUFNLFFBQVEscUJBQVUsT0FBTyxJQUFJLElBQUosR0FBVyxRQUFYLEVBQVAsRUFBOEIsUUFBOUIsQ0FBdUMsRUFBdkMsQ0FBVixDQUFSLENBRlM7QUFHZixVQUFNLFVBQVUscUJBQVUsT0FBTyxJQUFJLElBQUosR0FBVyxVQUFYLEVBQVAsRUFBZ0MsUUFBaEMsQ0FBeUMsRUFBekMsQ0FBVixDQUFWLENBSFM7QUFJZixVQUFNLFVBQVUscUJBQVUsT0FBTyxJQUFJLElBQUosR0FBVyxVQUFYLEVBQVAsRUFBZ0MsUUFBaEMsQ0FBeUMsRUFBekMsQ0FBVixDQUFWLENBSlM7QUFLZixVQUFNLE1BQVMsY0FBUyxnQkFBVyxPQUE3QixDQUxTOztBQU9mLGtCQUFZLFNBQVosR0FBd0IsR0FBeEIsQ0FQZTs7OztTQTFCYjs7O2tCQXFDUzs7Ozs7Ozs7QUN2Q2YsU0FBUyxTQUFULENBQW1CLEdBQW5CLEVBQXdCO0FBQ3RCLFFBQU0sT0FBTyxHQUFQLENBQU4sQ0FEc0I7O0FBR3RCLE1BQUcsSUFBSSxNQUFKLEtBQWUsQ0FBZixFQUFrQjtBQUNuQixpQkFBVyxHQUFYLENBRG1CO0dBQXJCO0FBR0EsU0FBTyxHQUFQLENBTnNCO0NBQXhCOztrQkFTZSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgQ2xvY2sgZnJvbSAnLi9tb2R1bGVzL0Nsb2NrJztcbmltcG9ydCBwYWROdW1iZXIgZnJvbSAnLi9tb2R1bGVzL1V0aWxzJztcblxuY29uc3QgY2xvY2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrXCIpO1xuXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpO1xuXG53aW5kb3cuc2V0SW50ZXJ2YWwoY2xvY2sucmVuZGVySGV4Q2xvY2ssIDEwMDApO1xud2luZG93LnNldEludGVydmFsKGNsb2NrLnJlbmRlciwgMTAwMCk7XG53aW5kb3cuc2V0SW50ZXJ2YWwoY2xvY2sucmVuZGVyQmFyLCAxMDAwKTtcbndpbmRvdy5zZXRJbnRlcnZhbChjbG9jay50b0hleCwgMTAwMCk7XG4iLCJpbXBvcnQgcGFkTnVtYmVyIGZyb20gJy4vVXRpbHMnO1xuXG5jbGFzcyBDbG9jayB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpc3BsYXlUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5VGltZVwiKTtcbiAgICBjb25zdCBob3VyID0gcGFkTnVtYmVyKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSk7XG4gICAgY29uc3QgbWludXRlID0gcGFkTnVtYmVyKG5ldyBEYXRlKCkuZ2V0TWludXRlcygpKTtcbiAgICBjb25zdCBzZWNvbmQgPSBwYWROdW1iZXIobmV3IERhdGUoKS5nZXRTZWNvbmRzKCkpO1xuICAgIGNvbnN0IHRpbWUgPSBgJHtob3VyfToke21pbnV0ZX06JHtzZWNvbmR9YDtcblxuICAgIGRpc3BsYXlUaW1lLmlubmVySFRNTCA9IHRpbWU7XG4gIH1cblxuICByZW5kZXJCYXIoKSB7XG4gICAgY29uc3QgY2xvY2tCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb2NrQmFyXCIpO1xuICAgIGxldCBiYXJXaWR0aCA9IChuZXcgRGF0ZSgpLmdldFNlY29uZHMoKSAvIDYwKSAqIDEwMDtcbiAgICBjbG9ja0Jhci5zdHlsZS53aWR0aCA9IGAke2JhcldpZHRofSVgO1xuICB9XG5cbiAgdG9IZXgoKSB7XG4gICAgY29uc3QgaG91cnMgPSBwYWROdW1iZXIoTnVtYmVyKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSkudG9TdHJpbmcoMTYpKTtcbiAgICBjb25zdCBtaW51dGVzID0gcGFkTnVtYmVyKE51bWJlcihuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKSkudG9TdHJpbmcoMTYpKTtcbiAgICBjb25zdCBzZWNvbmRzID0gcGFkTnVtYmVyKE51bWJlcihuZXcgRGF0ZSgpLmdldFNlY29uZHMoKSkudG9TdHJpbmcoMTYpKTtcbiAgICBjb25zdCBoZXggPSBgJHtob3Vyc30ke21pbnV0ZXN9JHtzZWNvbmRzfWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUuYmFja2dyb3VuZCA9IGAjJHtoZXh9YDtcbiAgfVxuXG4gIHJlbmRlckhleENsb2NrKCkge1xuICAgIGNvbnN0IGRpc3BsYXlUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5VGltZVwiKTtcbiAgICBjb25zdCBob3VycyA9IHBhZE51bWJlcihOdW1iZXIobmV3IERhdGUoKS5nZXRIb3VycygpKS50b1N0cmluZygxNikpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBwYWROdW1iZXIoTnVtYmVyKG5ldyBEYXRlKCkuZ2V0TWludXRlcygpKS50b1N0cmluZygxNikpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBwYWROdW1iZXIoTnVtYmVyKG5ldyBEYXRlKCkuZ2V0U2Vjb25kcygpKS50b1N0cmluZygxNikpO1xuICAgIGNvbnN0IGhleCA9IGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuXG4gICAgZGlzcGxheVRpbWUuaW5uZXJIVE1MID0gaGV4O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsb2NrO1xuIiwiZnVuY3Rpb24gcGFkTnVtYmVyKG51bSkge1xuICBudW0gPSBTdHJpbmcobnVtKTtcblxuICBpZihudW0ubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGAwJHtudW19YDtcbiAgfVxuICByZXR1cm4gbnVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWROdW1iZXI7XG4iXX0=
