const { Builder, By, Key } = require("selenium-webdriver");
require("geckodriver");

async function test_case() {

    //creates the driver
    let driver = await new Builder().forBrowser("firefox").build();

    // send driver to the website then Wait for Google homepage to appear
    await driver.get("https://github.com");

    // (grab an element from the page) Type "Hello World" into the search input field and press Enter
    await driver.findElement(By.partialLinkText("Sign in")).click();

    // Wait for 10 seconds and then quit the driver
    //     setTimeout(async function () {
    //         await driver.quit();
    //     }, 10000);
    // }

}
//calling the function above
test_case();
