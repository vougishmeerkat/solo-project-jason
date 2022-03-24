import { Builder, By, Capabilities, until, WebDriver} from "selenium-webdriver"
import {GamestopPage} from "../pageObject"
const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build()

const searchBarTest = new GamestopPage

test("Testing Search Result Filters", async () => {
await searchBarTest.navigate()
await searchBarTest.search("Elden Ring")
await searchBarTest.click(searchBarTest.searchResults)
await searchBarTest.click(searchBarTest.dropDown)
await searchBarTest.click(searchBarTest.highToLow)
await new Promise(f => setTimeout(f, 2000));
await searchBarTest.driver.quit();
})