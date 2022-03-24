import { Builder, By, Capabilities, until, WebDriver} from "selenium-webdriver"
import {GamestopPage} from "../pageObject"
const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build()

const searchBarTest = new GamestopPage

test("Testing valid Search Bar Input", async () => {
await searchBarTest.navigate()
await searchBarTest.search("Elden Ring")
await searchBarTest.click(searchBarTest.searchResults)
await new Promise(f => setTimeout(f, 2000));
await searchBarTest.driver.quit();
})