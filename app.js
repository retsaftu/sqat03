const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')

let url = `https://github.com/retsaftu/sqat03`

let signInHrefXpath = `/html/body/div[1]/header/div/div[2]/div/div/div[2]/a`
let emailXpath = `//*[@id="login_field"]`;
let passwordXpath = `//*[@id="password"]`;

let continueXpath = `//*[@id="login"]/div[4]/form/div/input[12]`
let addFilesXpath = `//*[@id="repo-content-pjax-container"]/div/div/div[3]/div[1]/div[2]/details/summary`
let createNewFileXpath = `//*[@id="repo-content-pjax-container"]/div/div/div[3]/div[1]/div[2]/details/div/ul/li[3]/form/button`
let newFileNameXpath = `//*[@id="repo-content-pjax-container"]/div/div/form[2]/div/div[1]/span/input`

let user = {
    email: '*****@gmail.com',
    password: '******'
}
async function start() {
    const options = new chrome.Options()

    options.addArguments('--disable-dev-shm-usage')
    options.addArguments('--no-sandbox')
    options.addArguments("--window-size=1100,1000")

    const driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build()

    try {
        await driver.get(url)
        await driver.sleep(3000)

        await driver.findElement(By.xpath(signInHrefXpath)).click()
        await driver.sleep(3000)

        await driver.findElement(By.xpath(emailXpath)).sendKeys(user.email);

        await driver.findElement(By.xpath(passwordXpath)).sendKeys(user.password);
        // await driver.findElement(By.xpath(finishXpath)).click();
        await driver.sleep(3000)
        await driver.findElement(By.xpath(continueXpath)).click()
        await driver.sleep(3000)

        await driver.findElement(By.xpath(addFilesXpath)).click()
        await driver.sleep(1000)
        await driver.findElement(By.xpath(createNewFileXpath)).click()
        await driver.sleep(3000)
        await driver.findElement(By.xpath(newFileNameXpath)).sendKeys(user.email);


        await driver.sleep(5000)
        await driver.quit()
    } catch (error) {
        await driver.quit()

        console.log(`error`, error);

    }

}

start()