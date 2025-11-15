const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false,
    //screenshot: "only-on-failure",
    //video: "retain-on-failure",
    baseURL: "https://www.saucedemo.com/",
  },
  reporter: [["list"]],
});
