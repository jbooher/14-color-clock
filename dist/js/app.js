(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Clock = require('./modules/Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _Utils = require('./modules/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clockDiv = document.querySelector("#clock");

var clock = new _Clock2.default();

window.setInterval(clock.render.bind(clock), 1000);
window.setInterval(clock.renderBar.bind(clock), 1000);
window.setInterval(clock.toHex.bind(clock), 1000);

clockDiv.addEventListener("mouseenter", function (e) {
  clock.hex = true;
});

clockDiv.addEventListener("mouseleave", function (e) {
  clock.hex = false;
});

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

    this.hex = false;
  }

  _createClass(Clock, [{
    key: "render",
    value: function render() {
      var displayTime = document.querySelector("#displayTime");

      var hour = (0, _Utils2.default)(new Date().getHours());
      var minute = (0, _Utils2.default)(new Date().getMinutes());
      var second = (0, _Utils2.default)(new Date().getSeconds());

      if (this.hex) {
        hour = (0, _Utils2.default)(Number(new Date().getHours()).toString(16));
        minute = (0, _Utils2.default)(Number(new Date().getMinutes()).toString(16));
        second = (0, _Utils2.default)(Number(new Date().getSeconds()).toString(16));
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL21vZHVsZXMvQ2xvY2suanMiLCJhcHAvbW9kdWxlcy9VdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxXQUFXLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFYOztBQUVOLElBQU0sUUFBUSxxQkFBUjs7QUFFTixPQUFPLFdBQVAsQ0FBbUIsTUFBTSxNQUFOLENBQWEsSUFBYixDQUFrQixLQUFsQixDQUFuQixFQUE2QyxJQUE3QztBQUNBLE9BQU8sV0FBUCxDQUFtQixNQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBcUIsS0FBckIsQ0FBbkIsRUFBZ0QsSUFBaEQ7QUFDQSxPQUFPLFdBQVAsQ0FBbUIsTUFBTSxLQUFOLENBQVksSUFBWixDQUFpQixLQUFqQixDQUFuQixFQUE0QyxJQUE1Qzs7QUFFQSxTQUFTLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDLFVBQVMsQ0FBVCxFQUFZO0FBQ2xELFFBQU0sR0FBTixHQUFZLElBQVosQ0FEa0Q7Q0FBWixDQUF4Qzs7QUFJQSxTQUFTLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDLFVBQVMsQ0FBVCxFQUFZO0FBQ2xELFFBQU0sR0FBTixHQUFZLEtBQVosQ0FEa0Q7Q0FBWixDQUF4Qzs7Ozs7Ozs7Ozs7QUNmQTs7Ozs7Ozs7SUFFTTtBQUVKLFdBRkksS0FFSixHQUFjOzBCQUZWLE9BRVU7O0FBQ1osU0FBSyxHQUFMLEdBQVcsS0FBWCxDQURZO0dBQWQ7O2VBRkk7OzZCQU1LO0FBQ1AsVUFBTSxjQUFjLFNBQVMsYUFBVCxDQUF1QixjQUF2QixDQUFkLENBREM7O0FBR1AsVUFBSSxPQUFPLHFCQUFVLElBQUksSUFBSixHQUFXLFFBQVgsRUFBVixDQUFQLENBSEc7QUFJUCxVQUFJLFNBQVMscUJBQVUsSUFBSSxJQUFKLEdBQVcsVUFBWCxFQUFWLENBQVQsQ0FKRztBQUtQLFVBQUksU0FBUyxxQkFBVSxJQUFJLElBQUosR0FBVyxVQUFYLEVBQVYsQ0FBVCxDQUxHOztBQU9QLFVBQUksS0FBSyxHQUFMLEVBQVU7QUFDWixlQUFPLHFCQUFVLE9BQU8sSUFBSSxJQUFKLEdBQVcsUUFBWCxFQUFQLEVBQThCLFFBQTlCLENBQXVDLEVBQXZDLENBQVYsQ0FBUCxDQURZO0FBRVosaUJBQVMscUJBQVUsT0FBTyxJQUFJLElBQUosR0FBVyxVQUFYLEVBQVAsRUFBZ0MsUUFBaEMsQ0FBeUMsRUFBekMsQ0FBVixDQUFULENBRlk7QUFHWixpQkFBUyxxQkFBVSxPQUFPLElBQUksSUFBSixHQUFXLFVBQVgsRUFBUCxFQUFnQyxRQUFoQyxDQUF5QyxFQUF6QyxDQUFWLENBQVQsQ0FIWTtPQUFkOztBQU1BLFVBQU0sT0FBVSxhQUFRLGVBQVUsTUFBNUIsQ0FiQztBQWNQLGtCQUFZLFNBQVosR0FBd0IsSUFBeEIsQ0FkTzs7OztnQ0FpQkc7QUFDVixVQUFNLFdBQVcsU0FBUyxhQUFULENBQXVCLFdBQXZCLENBQVgsQ0FESTtBQUVWLFVBQUksV0FBVyxJQUFLLElBQUosR0FBVyxVQUFYLEtBQTBCLEVBQTFCLEdBQWdDLEdBQWpDLENBRkw7QUFHVixlQUFTLEtBQVQsQ0FBZSxLQUFmLEdBQTBCLGNBQTFCLENBSFU7Ozs7NEJBTUo7QUFDTixVQUFNLFFBQVEscUJBQVUsT0FBTyxJQUFJLElBQUosR0FBVyxRQUFYLEVBQVAsRUFBOEIsUUFBOUIsQ0FBdUMsRUFBdkMsQ0FBVixDQUFSLENBREE7QUFFTixVQUFNLFVBQVUscUJBQVUsT0FBTyxJQUFJLElBQUosR0FBVyxVQUFYLEVBQVAsRUFBZ0MsUUFBaEMsQ0FBeUMsRUFBekMsQ0FBVixDQUFWLENBRkE7QUFHTixVQUFNLFVBQVUscUJBQVUsT0FBTyxJQUFJLElBQUosR0FBVyxVQUFYLEVBQVAsRUFBZ0MsUUFBaEMsQ0FBeUMsRUFBekMsQ0FBVixDQUFWLENBSEE7QUFJTixVQUFNLFdBQVMsUUFBUSxVQUFVLE9BQTNCLENBSkE7QUFLTixlQUFTLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsS0FBL0IsQ0FBcUMsVUFBckMsU0FBc0QsR0FBdEQsQ0FMTTs7OztxQ0FRUztBQUNmLFVBQU0sY0FBYyxTQUFTLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBZCxDQURTO0FBRWYsVUFBTSxRQUFRLHFCQUFVLE9BQU8sSUFBSSxJQUFKLEdBQVcsUUFBWCxFQUFQLEVBQThCLFFBQTlCLENBQXVDLEVBQXZDLENBQVYsQ0FBUixDQUZTO0FBR2YsVUFBTSxVQUFVLHFCQUFVLE9BQU8sSUFBSSxJQUFKLEdBQVcsVUFBWCxFQUFQLEVBQWdDLFFBQWhDLENBQXlDLEVBQXpDLENBQVYsQ0FBVixDQUhTO0FBSWYsVUFBTSxVQUFVLHFCQUFVLE9BQU8sSUFBSSxJQUFKLEdBQVcsVUFBWCxFQUFQLEVBQWdDLFFBQWhDLENBQXlDLEVBQXpDLENBQVYsQ0FBVixDQUpTO0FBS2YsVUFBTSxNQUFTLGNBQVMsZ0JBQVcsT0FBN0IsQ0FMUzs7QUFPZixrQkFBWSxTQUFaLEdBQXdCLEdBQXhCLENBUGU7Ozs7U0FyQ2I7OztrQkFnRFM7Ozs7Ozs7O0FDbERmLFNBQVMsU0FBVCxDQUFtQixHQUFuQixFQUF3QjtBQUN0QixRQUFNLE9BQU8sR0FBUCxDQUFOLENBRHNCOztBQUd0QixNQUFHLElBQUksTUFBSixLQUFlLENBQWYsRUFBa0I7QUFDbkIsaUJBQVcsR0FBWCxDQURtQjtHQUFyQjtBQUdBLFNBQU8sR0FBUCxDQU5zQjtDQUF4Qjs7a0JBU2UiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IENsb2NrIGZyb20gJy4vbW9kdWxlcy9DbG9jayc7XG5pbXBvcnQgcGFkTnVtYmVyIGZyb20gJy4vbW9kdWxlcy9VdGlscyc7XG5cbmNvbnN0IGNsb2NrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9ja1wiKTtcblxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcblxud2luZG93LnNldEludGVydmFsKGNsb2NrLnJlbmRlci5iaW5kKGNsb2NrKSwgMTAwMCk7XG53aW5kb3cuc2V0SW50ZXJ2YWwoY2xvY2sucmVuZGVyQmFyLmJpbmQoY2xvY2spLCAxMDAwKTtcbndpbmRvdy5zZXRJbnRlcnZhbChjbG9jay50b0hleC5iaW5kKGNsb2NrKSwgMTAwMCk7XG5cbmNsb2NrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGUpIHtcbiAgY2xvY2suaGV4ID0gdHJ1ZTtcbn0pO1xuXG5jbG9ja0Rpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbihlKSB7XG4gIGNsb2NrLmhleCA9IGZhbHNlO1xufSk7XG4iLCJpbXBvcnQgcGFkTnVtYmVyIGZyb20gJy4vVXRpbHMnO1xuXG5jbGFzcyBDbG9jayB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZXggPSBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkaXNwbGF5VGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheVRpbWVcIik7XG5cbiAgICBsZXQgaG91ciA9IHBhZE51bWJlcihuZXcgRGF0ZSgpLmdldEhvdXJzKCkpO1xuICAgIGxldCBtaW51dGUgPSBwYWROdW1iZXIobmV3IERhdGUoKS5nZXRNaW51dGVzKCkpO1xuICAgIGxldCBzZWNvbmQgPSBwYWROdW1iZXIobmV3IERhdGUoKS5nZXRTZWNvbmRzKCkpO1xuXG4gICAgaWYgKHRoaXMuaGV4KSB7XG4gICAgICBob3VyID0gcGFkTnVtYmVyKE51bWJlcihuZXcgRGF0ZSgpLmdldEhvdXJzKCkpLnRvU3RyaW5nKDE2KSk7XG4gICAgICBtaW51dGUgPSBwYWROdW1iZXIoTnVtYmVyKG5ldyBEYXRlKCkuZ2V0TWludXRlcygpKS50b1N0cmluZygxNikpO1xuICAgICAgc2Vjb25kID0gcGFkTnVtYmVyKE51bWJlcihuZXcgRGF0ZSgpLmdldFNlY29uZHMoKSkudG9TdHJpbmcoMTYpKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lID0gYCR7aG91cn06JHttaW51dGV9OiR7c2Vjb25kfWA7XG4gICAgZGlzcGxheVRpbWUuaW5uZXJIVE1MID0gdGltZTtcbiAgfVxuXG4gIHJlbmRlckJhcigpIHtcbiAgICBjb25zdCBjbG9ja0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvY2tCYXJcIik7XG4gICAgbGV0IGJhcldpZHRoID0gKG5ldyBEYXRlKCkuZ2V0U2Vjb25kcygpIC8gNjApICogMTAwO1xuICAgIGNsb2NrQmFyLnN0eWxlLndpZHRoID0gYCR7YmFyV2lkdGh9JWA7XG4gIH1cblxuICB0b0hleCgpIHtcbiAgICBjb25zdCBob3VycyA9IHBhZE51bWJlcihOdW1iZXIobmV3IERhdGUoKS5nZXRIb3VycygpKS50b1N0cmluZygxNikpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBwYWROdW1iZXIoTnVtYmVyKG5ldyBEYXRlKCkuZ2V0TWludXRlcygpKS50b1N0cmluZygxNikpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBwYWROdW1iZXIoTnVtYmVyKG5ldyBEYXRlKCkuZ2V0U2Vjb25kcygpKS50b1N0cmluZygxNikpO1xuICAgIGNvbnN0IGhleCA9IGAke2hvdXJzfSR7bWludXRlc30ke3NlY29uZHN9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zdHlsZS5iYWNrZ3JvdW5kID0gYCMke2hleH1gO1xuICB9XG5cbiAgcmVuZGVySGV4Q2xvY2soKSB7XG4gICAgY29uc3QgZGlzcGxheVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXlUaW1lXCIpO1xuICAgIGNvbnN0IGhvdXJzID0gcGFkTnVtYmVyKE51bWJlcihuZXcgRGF0ZSgpLmdldEhvdXJzKCkpLnRvU3RyaW5nKDE2KSk7XG4gICAgY29uc3QgbWludXRlcyA9IHBhZE51bWJlcihOdW1iZXIobmV3IERhdGUoKS5nZXRNaW51dGVzKCkpLnRvU3RyaW5nKDE2KSk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IHBhZE51bWJlcihOdW1iZXIobmV3IERhdGUoKS5nZXRTZWNvbmRzKCkpLnRvU3RyaW5nKDE2KSk7XG4gICAgY29uc3QgaGV4ID0gYCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWA7XG5cbiAgICBkaXNwbGF5VGltZS5pbm5lckhUTUwgPSBoZXg7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xvY2s7XG4iLCJmdW5jdGlvbiBwYWROdW1iZXIobnVtKSB7XG4gIG51bSA9IFN0cmluZyhudW0pO1xuXG4gIGlmKG51bS5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gYDAke251bX1gO1xuICB9XG4gIHJldHVybiBudW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZE51bWJlcjtcbiJdfQ==
