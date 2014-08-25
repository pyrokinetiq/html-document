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
if (! _$jscoverage['Document.js']) {
  _$jscoverage['Document.js'] = [];
  _$jscoverage['Document.js'][1] = 0;
  _$jscoverage['Document.js'][2] = 0;
  _$jscoverage['Document.js'][4] = 0;
  _$jscoverage['Document.js'][8] = 0;
  _$jscoverage['Document.js'][9] = 0;
  _$jscoverage['Document.js'][10] = 0;
  _$jscoverage['Document.js'][11] = 0;
  _$jscoverage['Document.js'][12] = 0;
  _$jscoverage['Document.js'][13] = 0;
  _$jscoverage['Document.js'][14] = 0;
  _$jscoverage['Document.js'][15] = 0;
  _$jscoverage['Document.js'][16] = 0;
  _$jscoverage['Document.js'][17] = 0;
  _$jscoverage['Document.js'][18] = 0;
  _$jscoverage['Document.js'][19] = 0;
  _$jscoverage['Document.js'][20] = 0;
  _$jscoverage['Document.js'][21] = 0;
  _$jscoverage['Document.js'][22] = 0;
  _$jscoverage['Document.js'][23] = 0;
  _$jscoverage['Document.js'][24] = 0;
  _$jscoverage['Document.js'][26] = 0;
  _$jscoverage['Document.js'][27] = 0;
  _$jscoverage['Document.js'][28] = 0;
  _$jscoverage['Document.js'][29] = 0;
  _$jscoverage['Document.js'][31] = 0;
  _$jscoverage['Document.js'][32] = 0;
  _$jscoverage['Document.js'][33] = 0;
  _$jscoverage['Document.js'][38] = 0;
  _$jscoverage['Document.js'][40] = 0;
  _$jscoverage['Document.js'][41] = 0;
  _$jscoverage['Document.js'][42] = 0;
  _$jscoverage['Document.js'][47] = 0;
  _$jscoverage['Document.js'][49] = 0;
  _$jscoverage['Document.js'][50] = 0;
  _$jscoverage['Document.js'][52] = 0;
  _$jscoverage['Document.js'][53] = 0;
  _$jscoverage['Document.js'][55] = 0;
  _$jscoverage['Document.js'][56] = 0;
  _$jscoverage['Document.js'][58] = 0;
  _$jscoverage['Document.js'][59] = 0;
  _$jscoverage['Document.js'][61] = 0;
  _$jscoverage['Document.js'][62] = 0;
  _$jscoverage['Document.js'][67] = 0;
  _$jscoverage['Document.js'][69] = 0;
  _$jscoverage['Document.js'][70] = 0;
  _$jscoverage['Document.js'][71] = 0;
  _$jscoverage['Document.js'][76] = 0;
  _$jscoverage['Document.js'][78] = 0;
  _$jscoverage['Document.js'][83] = 0;
  _$jscoverage['Document.js'][85] = 0;
  _$jscoverage['Document.js'][90] = 0;
  _$jscoverage['Document.js'][92] = 0;
  _$jscoverage['Document.js'][97] = 0;
  _$jscoverage['Document.js'][99] = 0;
  _$jscoverage['Document.js'][104] = 0;
  _$jscoverage['Document.js'][106] = 0;
  _$jscoverage['Document.js'][111] = 0;
  _$jscoverage['Document.js'][113] = 0;
}
_$jscoverage['Document.js'].source = ["\"use strict\";","Object.defineProperties(exports, {","  Document: {get: function() {","      return Document;","    }},","  __esModule: {value: true}","});","var $__Object$defineProperty = Object.defineProperty;","var $__Object$create = Object.create;","var Node = require('./Node').Node;","var Comment = require('./Comment').Comment;","var DocumentFragment = require('./DocumentFragment').DocumentFragment;","var HTMLElement = require('./HTMLElement').HTMLElement;","var Text = require('./Text').Text;","var HTMLOptionElement = require('./HTMLElement/elements/HTMLOptionElement').HTMLOptionElement;","var HTMLSelectElement = require('./HTMLElement/elements/HTMLSelectElement').HTMLSelectElement;","var Document = function($__super) {","  \"use strict\";","  function Document() {","    this.documentElement = this.createElement('html');","    this.head = this.createElement('head');","    this.documentElement.appendChild(this.head);","    this.body = this.createElement('body');","    this.documentElement.appendChild(this.body);","  }","  Document.__proto__ = ($__super !== null ? $__super : Function.prototype);","  Document.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));","  $__Object$defineProperty(Document.prototype, \"constructor\", {value: Document});","  $__Object$defineProperty(Document.prototype, \"createComment\", {","    value: function(data) {","      var comment = new Comment(data);","      comment.ownerDocument = this;","      return comment;","    },","    enumerable: false,","    writable: true","  });","  $__Object$defineProperty(Document.prototype, \"createDocumentFragment\", {","    value: function() {","      var fragment = new DocumentFragment();","      fragment.ownerDocument = this;","      return fragment;","    },","    enumerable: false,","    writable: true","  });","  $__Object$defineProperty(Document.prototype, \"createElement\", {","    value: function(name) {","      var element;","      switch (name.toLowerCase()) {","        case 'select':","          element = new HTMLSelectElement();","          break;","        case 'option':","          element = new HTMLOptionElement();","          break;","        default:","          element = new HTMLElement();","          element.nodeName = name;","      }","      element.ownerDocument = this;","      return element;","    },","    enumerable: false,","    writable: true","  });","  $__Object$defineProperty(Document.prototype, \"createTextNode\", {","    value: function(textContent) {","      var text = new Text(textContent);","      text.ownerDocument = this;","      return text;","    },","    enumerable: false,","    writable: true","  });","  $__Object$defineProperty(Document.prototype, \"getElementById\", {","    value: function(id) {","      return this.documentElement.getElementById(id);","    },","    enumerable: false,","    writable: true","  });","  $__Object$defineProperty(Document.prototype, \"getElementsByTagName\", {","    value: function(tagName, _array) {","      return this.documentElement.getElementsByTagName(tagName, _array);","    },","    enumerable: false,","    writable: true","  });","  $__Object$defineProperty(Document.prototype, \"getElementsByClassName\", {","    value: function(className) {","      throw new Error('Not implemented');","    },","    enumerable: false,","    writable: true","  });","  $__Object$defineProperty(Document.prototype, \"querySelector\", {","    value: function() {","      throw new Error('Not implemented');","    },","    enumerable: false,","    writable: true","  });","  $__Object$defineProperty(Document.prototype, \"querySelectorAll\", {","    value: function() {","      throw new Error('Not implemented');","    },","    enumerable: false,","    writable: true","  });","  return Document;","}(Node);","Object.defineProperty(Document.prototype, 'nodeType', {value: Node.DOCUMENT_NODE});","","//# sourceMappingURL=Document.js.map"];
_$jscoverage['Document.js'][1]++;
"use strict";
_$jscoverage['Document.js'][2]++;
Object.defineProperties(exports, {Document: {get: (function () {
  _$jscoverage['Document.js'][4]++;
  return Document;
})}, __esModule: {value: true}});
_$jscoverage['Document.js'][8]++;
var $__Object$defineProperty = Object.defineProperty;
_$jscoverage['Document.js'][9]++;
var $__Object$create = Object.create;
_$jscoverage['Document.js'][10]++;
var Node = require("./Node").Node;
_$jscoverage['Document.js'][11]++;
var Comment = require("./Comment").Comment;
_$jscoverage['Document.js'][12]++;
var DocumentFragment = require("./DocumentFragment").DocumentFragment;
_$jscoverage['Document.js'][13]++;
var HTMLElement = require("./HTMLElement").HTMLElement;
_$jscoverage['Document.js'][14]++;
var Text = require("./Text").Text;
_$jscoverage['Document.js'][15]++;
var HTMLOptionElement = require("./HTMLElement/elements/HTMLOptionElement").HTMLOptionElement;
_$jscoverage['Document.js'][16]++;
var HTMLSelectElement = require("./HTMLElement/elements/HTMLSelectElement").HTMLSelectElement;
_$jscoverage['Document.js'][17]++;
var Document = (function ($__super) {
  _$jscoverage['Document.js'][18]++;
  "use strict";
  _$jscoverage['Document.js'][19]++;
  function Document() {
    _$jscoverage['Document.js'][20]++;
    this.documentElement = this.createElement("html");
    _$jscoverage['Document.js'][21]++;
    this.head = this.createElement("head");
    _$jscoverage['Document.js'][22]++;
    this.documentElement.appendChild(this.head);
    _$jscoverage['Document.js'][23]++;
    this.body = this.createElement("body");
    _$jscoverage['Document.js'][24]++;
    this.documentElement.appendChild(this.body);
}
  _$jscoverage['Document.js'][26]++;
  Document.__proto__ = (($__super !== null)? $__super: Function.prototype);
  _$jscoverage['Document.js'][27]++;
  Document.prototype = $__Object$create((($__super !== null)? $__super.prototype: null));
  _$jscoverage['Document.js'][28]++;
  $__Object$defineProperty(Document.prototype, "constructor", {value: Document});
  _$jscoverage['Document.js'][29]++;
  $__Object$defineProperty(Document.prototype, "createComment", {value: (function (data) {
  _$jscoverage['Document.js'][31]++;
  var comment = new Comment(data);
  _$jscoverage['Document.js'][32]++;
  comment.ownerDocument = this;
  _$jscoverage['Document.js'][33]++;
  return comment;
}), enumerable: false, writable: true});
  _$jscoverage['Document.js'][38]++;
  $__Object$defineProperty(Document.prototype, "createDocumentFragment", {value: (function () {
  _$jscoverage['Document.js'][40]++;
  var fragment = new DocumentFragment();
  _$jscoverage['Document.js'][41]++;
  fragment.ownerDocument = this;
  _$jscoverage['Document.js'][42]++;
  return fragment;
}), enumerable: false, writable: true});
  _$jscoverage['Document.js'][47]++;
  $__Object$defineProperty(Document.prototype, "createElement", {value: (function (name) {
  _$jscoverage['Document.js'][49]++;
  var element;
  _$jscoverage['Document.js'][50]++;
  switch (name.toLowerCase()) {
  case "select":
    _$jscoverage['Document.js'][52]++;
    element = new HTMLSelectElement();
    _$jscoverage['Document.js'][53]++;
    break;
  case "option":
    _$jscoverage['Document.js'][55]++;
    element = new HTMLOptionElement();
    _$jscoverage['Document.js'][56]++;
    break;
  default:
    _$jscoverage['Document.js'][58]++;
    element = new HTMLElement();
    _$jscoverage['Document.js'][59]++;
    element.nodeName = name;
  }
  _$jscoverage['Document.js'][61]++;
  element.ownerDocument = this;
  _$jscoverage['Document.js'][62]++;
  return element;
}), enumerable: false, writable: true});
  _$jscoverage['Document.js'][67]++;
  $__Object$defineProperty(Document.prototype, "createTextNode", {value: (function (textContent) {
  _$jscoverage['Document.js'][69]++;
  var text = new Text(textContent);
  _$jscoverage['Document.js'][70]++;
  text.ownerDocument = this;
  _$jscoverage['Document.js'][71]++;
  return text;
}), enumerable: false, writable: true});
  _$jscoverage['Document.js'][76]++;
  $__Object$defineProperty(Document.prototype, "getElementById", {value: (function (id) {
  _$jscoverage['Document.js'][78]++;
  return this.documentElement.getElementById(id);
}), enumerable: false, writable: true});
  _$jscoverage['Document.js'][83]++;
  $__Object$defineProperty(Document.prototype, "getElementsByTagName", {value: (function (tagName, _array) {
  _$jscoverage['Document.js'][85]++;
  return this.documentElement.getElementsByTagName(tagName, _array);
}), enumerable: false, writable: true});
  _$jscoverage['Document.js'][90]++;
  $__Object$defineProperty(Document.prototype, "getElementsByClassName", {value: (function (className) {
  _$jscoverage['Document.js'][92]++;
  throw new Error("Not implemented");
}), enumerable: false, writable: true});
  _$jscoverage['Document.js'][97]++;
  $__Object$defineProperty(Document.prototype, "querySelector", {value: (function () {
  _$jscoverage['Document.js'][99]++;
  throw new Error("Not implemented");
}), enumerable: false, writable: true});
  _$jscoverage['Document.js'][104]++;
  $__Object$defineProperty(Document.prototype, "querySelectorAll", {value: (function () {
  _$jscoverage['Document.js'][106]++;
  throw new Error("Not implemented");
}), enumerable: false, writable: true});
  _$jscoverage['Document.js'][111]++;
  return Document;
})(Node);
_$jscoverage['Document.js'][113]++;
Object.defineProperty(Document.prototype, "nodeType", {value: Node.DOCUMENT_NODE});
