const { chromium } = require('playwright');

describe("Check official version", () => {
  it("should have the exact same version", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
  
    // Open new page
    const page = await context.newPage();
  
    // Go to https://media.interieur.gouv.fr/attestation-deplacement-derogatoire-covid-19/
    await page.goto('https://media.interieur.gouv.fr/attestation-deplacement-derogatoire-covid-19/');
  
    // Click text=2021 - 2.5.1
    await page.click('text=2021 - 2.5.1');
  
    // ---------------------
    await context.close();
    await browser.close();
  })
})