# gatsby-plugin-dashly

<img src="https://www.dashly.io/logos/en-logo.svg" alt="dashly logo" width="200"/>

With [Dashly](https://www.dashly.io/) you can:

1. Collect your users through all the channels including messengers. All users in one inbox, all channels in one user profile.
2. Engage with every user on their terms. Chat, messengers, e-mail are in one user profile.  
   Never lose track of conversation with your customer
3. Save time for you team, create an automated customer service FAQ chatbot and knowledge base
4. Accelerate growth throughout the customer lifecycle and engage more people with the help of communication tools
5. Qualify leads and focus your sales team on hot ones. Provide the other with self-service <br>

## Install

```shell
yarn add gatsby-plugin-dashly
```

or

```shell
npm install --save gatsby-plugin-dashly
```

<br>

## How to use

To integrate Dashly Livechat to your Gatsby site, you need to have an account with Dashly. [Sign up](https://dashly.io/panel/unauthorized/register/).

Upon obtaining your `CRISP_WEBSITE_ID`, you need to modify your `gatsby-config.js` as follows:

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-dashly",
      options: {
        carrotquestId: "DASHLY_ID",
        mobileDelay: 2000, // Optional. Delay for mobile devices.
        desktopDelay: 500, // Optional. Delay for other devices.
      },
    },
  ],
};
```

<br>

### Track your pages visits for SPA

```js
// gatsby-browser.js
const isEnabledDashly = () => typeof dashly === `object`;

exports.onRouteUpdate = ({ location }) => {
  if (isEnabledDashly()) {
    if (location.href.indexOf("/blog/") > -1) {
      dashly.track("Visited blog", {
        URL: location.href,
      });
    } else {
      dashly.track("Visited landing", {
        URL: location.href,
      });
    }
  }
};
```
