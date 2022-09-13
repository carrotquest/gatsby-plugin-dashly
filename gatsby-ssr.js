/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
// You can delete this file if you're not using it

const React = require("react");

exports.onRenderBody = ({ setHeadComponents }, { dashlyId, mobileDelay = 0, desktopDelay = 0 }) => {
  if (!dashlyId) {
    console.log("You have not provided dashlyId, gatsby-plugin-dashly will not take effect.");
    return null;
  }

  const delay = `if (document.documentElement.clientWidth < 700) { setTimeout(init, ${mobileDelay}); } else { setTimeout(init, ${desktopDelay}); }`;

  const scriptInnerHTML =
    `window.dashlyId = "${dashlyId}";` +
    `window.dashlyMobileDelay = "${dashlyId}";` +
    `window.dashlyDesktopDelay = "${dashlyId}";` +
    `if (typeof dashly === "undefined") { function Build(name, args) { return function () { window.dashlyasync.push(name, arguments); }; } window.dashly = {}; window.dashlyasync = []; dashly.settings = {}; var m = [ "connect", "track", "identify", "auth", "open", "onReady", "addCallback", "removeCallback", "trackMessageInteraction", ]; for (var i = 0; i < m.length; i++) dashly[m[i]] = Build(m[i]); }` +
    `function init() { var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = "//cdn.dashly.app/api.min.js"; var x = document.getElementsByTagName("head")[0]; x.appendChild(s); }` +
    delay;

  return setHeadComponents([
    <script key="gatsby-plugin-dashly" dangerouslySetInnerHTML={{ __html: scriptInnerHTML }} />,
  ]);
};
