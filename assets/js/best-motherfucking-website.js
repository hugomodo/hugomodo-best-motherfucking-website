"use strict";
// I wish I could have used ES6 extravaganza, but not everyone supports it :(
var documentElement = document.getElementsByTagName("html")[0],
  clickEvent = "ontouchstart" in window ? "touchend" : "click",
  classMethods = ["remove", "add"];

function someControl(id, textArr, className) {
  /* You see? No fucking jQuery needed, check:
   * http://www.vanilla-js.com/
   * http://jsperf.com/getelementbyid-vs-jquery-id/44
   */
  var el = document.getElementsByTagName("html")[0];
  var acbox = document.getElementById(id),
    textNode = acbox.firstChild,
    toggled = false;
  acbox.addEventListener(
    clickEvent,
    function() {
      var selector = Number((toggled = !toggled));
      textNode.data = textArr[selector];
      el.classList[classMethods[selector]](className);
    },
    false
  );
}

function addContrastControl() {
  someControl(
    "contrast",
    ["Add more contrast", "Remove additional contrast"],
    "contrast"
  );
}

function addInvertedControl() {
  someControl(
    "invmode",
    ["Inverted mode", "Normal mode"],
    "inverted"
  );
}

addContrastControl();
addInvertedControl();
