/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['Event.js']) {
  _$jscoverage['Event.js'] = [];
  _$jscoverage['Event.js'][1] = 0;
  _$jscoverage['Event.js'][2] = 0;
  _$jscoverage['Event.js'][4] = 0;
  _$jscoverage['Event.js'][8] = 0;
  _$jscoverage['Event.js'][9] = 0;
  _$jscoverage['Event.js'][10] = 0;
  _$jscoverage['Event.js'][11] = 0;
  _$jscoverage['Event.js'][12] = 0;
  _$jscoverage['Event.js'][13] = 0;
  _$jscoverage['Event.js'][14] = 0;
  _$jscoverage['Event.js'][15] = 0;
  _$jscoverage['Event.js'][16] = 0;
  _$jscoverage['Event.js'][17] = 0;
  _$jscoverage['Event.js'][18] = 0;
  _$jscoverage['Event.js'][19] = 0;
  _$jscoverage['Event.js'][20] = 0;
  _$jscoverage['Event.js'][22] = 0;
  _$jscoverage['Event.js'][24] = 0;
  _$jscoverage['Event.js'][29] = 0;
  _$jscoverage['Event.js'][34] = 0;
  _$jscoverage['Event.js'][39] = 0;
}
_$jscoverage['Event.js'].source = ["\"use strict\";","Object.defineProperties(exports, {","  Event: {get: function() {","      return Event;","    }},","  __esModule: {value: true}","});","var $__Object$defineProperty = Object.defineProperty;","var Event = function() {","  \"use strict\";","  function Event(type) {","    this.bubbles = false;","    this.cancelable = false;","    this.currentTarget = false;","    this.defaultPrevented = false;","    this.eventPhase = 0;","    this.target = null;","    this.timeStamp = Date.now() * 1000;","    this.type = type.toLowerCase();","    this.isTrusted = false;","  }","  $__Object$defineProperty(Event.prototype, \"preventDefault\", {","    value: function() {","      this.defaultPrevented = true;","    },","    enumerable: false,","    writable: true","  });","  $__Object$defineProperty(Event.prototype, \"stopImmediatePropagation\", {","    value: function() {},","    enumerable: false,","    writable: true","  });","  $__Object$defineProperty(Event.prototype, \"stopPropagation\", {","    value: function() {},","    enumerable: false,","    writable: true","  });","  return Event;","}();","","//# sourceMappingURL=Event.js.map"];
_$jscoverage['Event.js'][1]++;
"use strict";
_$jscoverage['Event.js'][2]++;
Object.defineProperties(exports, {Event: {get: (function () {
  _$jscoverage['Event.js'][4]++;
  return Event;
})}, __esModule: {value: true}});
_$jscoverage['Event.js'][8]++;
var $__Object$defineProperty = Object.defineProperty;
_$jscoverage['Event.js'][9]++;
var Event = (function () {
  _$jscoverage['Event.js'][10]++;
  "use strict";
  _$jscoverage['Event.js'][11]++;
  function Event(type) {
    _$jscoverage['Event.js'][12]++;
    this.bubbles = false;
    _$jscoverage['Event.js'][13]++;
    this.cancelable = false;
    _$jscoverage['Event.js'][14]++;
    this.currentTarget = false;
    _$jscoverage['Event.js'][15]++;
    this.defaultPrevented = false;
    _$jscoverage['Event.js'][16]++;
    this.eventPhase = 0;
    _$jscoverage['Event.js'][17]++;
    this.target = null;
    _$jscoverage['Event.js'][18]++;
    this.timeStamp = (Date.now() * 1000);
    _$jscoverage['Event.js'][19]++;
    this.type = type.toLowerCase();
    _$jscoverage['Event.js'][20]++;
    this.isTrusted = false;
}
  _$jscoverage['Event.js'][22]++;
  $__Object$defineProperty(Event.prototype, "preventDefault", {value: (function () {
  _$jscoverage['Event.js'][24]++;
  this.defaultPrevented = true;
}), enumerable: false, writable: true});
  _$jscoverage['Event.js'][29]++;
  $__Object$defineProperty(Event.prototype, "stopImmediatePropagation", {value: (function () {
}), enumerable: false, writable: true});
  _$jscoverage['Event.js'][34]++;
  $__Object$defineProperty(Event.prototype, "stopPropagation", {value: (function () {
}), enumerable: false, writable: true});
  _$jscoverage['Event.js'][39]++;
  return Event;
})();