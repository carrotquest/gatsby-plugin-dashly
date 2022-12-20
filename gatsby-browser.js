"use strict";

var isEnabled = function isEnabled() {
  return typeof dashly === "object" && window.dashlyId;
};
exports.onInitialClientRender = function () {
  if (isEnabled) {
    dashly.connect(window.dashlyId);
  }
};