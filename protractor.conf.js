exports.config = {
  directConnect: true,
  specs: ["./spec/*.spec.ts"],
  capabilities: {
    browserName: "chrome"
  },
  framework: "mocha",
  mochaOpts: {
    reporter: "dot",
    slow: 3000
  },
  onPrepare: async () => {
    await browser.waitForAngularEnabled(false); // TODO research
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json")
    });
  }
};
