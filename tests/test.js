const { Builder, By, Key } = require("selenium-webdriver");
require("geckodriver");


//run code with npm test
async function test_case() {

    //creates the driver
    let driver = await new Builder().forBrowser("firefox").build();

    // send driver to the website then Wait for Google homepage to appear
    await driver.get("https://github.com");

    // (grab an element from the page) Type "Hello World" into the search input field and press Enter
    await driver.findElement(By.partialLinkText("Sign in")).click();

    //display title so we can make sure its correct 
    console.log(await driver.getTitle());

    //end test if title does not match 
    if (await driver.getTitle() === "Sign in to GitHub · GitHub") {

        console.log("test number 1 is a success")

    } else {

        console.log("Test one failed, return");
        return;
    }


    //enter username and password int the fields... I inspected the page to get the attribute
    await driver.findElement(By.name("login")).sendKeys("naomyATestAccount", Key.RETURN);

    await driver.findElement(By.id("password")).sendKeys("N@0myT3$tacc!", Key.RETURN);

    await driver.findElement(By.href("password")).sendKeys("/naomyATestAccount/Selenium_with_js_testAcc").click();




    // Wait for 10 seconds and then quit the driver
    //     setTimeout(async function () {
    //         await driver.quit();
    //     }, 10000);
    // }

}
//calling the function above
test_case();
