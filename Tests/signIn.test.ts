import { Builder, By, Capabilities, until, WebDriver} from "selenium-webdriver"
import {GamestopPage} from "../pageObject"
const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build()

const searchBarTest = new GamestopPage

test("Testing Category Feature", async () => {
await searchBarTest.navigate()
await searchBarTest.click(searchBarTest.signIn)
await searchBarTest.setInput(searchBarTest.email,"FakeAccount@gmail.com")
await new Promise(f => setTimeout(f, 2000));
await searchBarTest.setInput(searchBarTest.password,"BadPassword123")
await new Promise(f => setTimeout(f, 2000));
await searchBarTest.click(searchBarTest.signInButton)
await new Promise(f => setTimeout(f, 2000));
await searchBarTest.driver.quit();
})