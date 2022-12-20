"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
// You can delete this file if you're not using it

exports.onRenderBody = function (_ref, _ref2) {
  var setHeadComponents = _ref.setHeadComponents;
  var dashlyId = _ref2.dashlyId,
    _ref2$mobileDelay = _ref2.mobileDelay,
    mobileDelay = _ref2$mobileDelay === void 0 ? 0 : _ref2$mobileDelay,
    _ref2$desktopDelay = _ref2.desktopDelay,
    desktopDelay = _ref2$desktopDelay === void 0 ? 0 : _ref2$desktopDelay;
  if (!dashlyId) {
    console.log("You have not provided dashlyId, gatsby-plugin-dashly will not take effect.");
    return null;
  }
  var delay = "if (document.documentElement.clientWidth < 700) { setTimeout(initDashly, " + mobileDelay + "); } else { setTimeout(initDashly, " + desktopDelay + "); }";
  var scriptInnerHTML = "window.dashlyId = \"" + dashlyId + "\";" + "if (typeof dashly === \"undefined\") { function Build(name, args) { return function () { window.dashlyasync.push(name, arguments); }; } window.dashly = {}; window.dashlyasync = []; dashly.settings = {}; var m = [ \"connect\", \"track\", \"identify\", \"auth\", \"open\", \"onReady\", \"addCallback\", \"removeCallback\", \"trackMessageInteraction\", ]; for (var i = 0; i < m.length; i++) dashly[m[i]] = Build(m[i]); }" + "function initDashly() { var s = document.createElement(\"script\"); s.type = \"text/javascript\"; s.async = true; s.src = \"//cdn.dashly.app/api.min.js\"; var x = document.getElementsByTagName(\"head\")[0]; x.appendChild(s); }" + delay;
  return setHeadComponents([/*#__PURE__*/_react.default.createElement("script", {
    key: "gatsby-plugin-dashly",
    dangerouslySetInnerHTML: {
      __html: scriptInnerHTML
    }
  })]);
};