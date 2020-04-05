import { expect } from "chai";
import { before } from "mocha";
import { browser, by, element } from "protractor";

const url: string = "https://e2e-boilerplate.github.io/sandbox/";

describe("Sandbox", () => {
  before(() => {
    this.timeout(5000);
    browser.get(url);
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    expect(title).to.equal("Sandbox");
    expect(await header.getText()).to.equal("Sandbox");
  });
});
