import { Builder, By, Capabilities, until, WebDriver} from "selenium-webdriver"
import {GamestopPage} from "../pageObject"
const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build()

const searchBarTest = new GamestopPage

test("Testing Category Feature", async () => {
await searchBarTest.navigate()
await searchBarTest.search("Xbox One")
await searchBarTest.click(searchBarTest.searchResults)
await searchBarTest.click(searchBarTest.category)
await new Promise(f => setTimeout(f, 2000));
await searchBarTest.driver.quit();
})