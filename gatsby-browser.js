const isEnabled = () => typeof dashly === `object` && window.dashlyId;

exports.onInitialClientRender = () => {
  if (isEnabled) {
    dashly.connect(window.dashlyId);
  }
};
