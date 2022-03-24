import { Builder, By, Capabilities, until, WebDriver} from "selenium-webdriver"
import {GamestopPage} from "../pageObject"
const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build()

const searchBarTest = new GamestopPage
//Security on the Gamestop website prevents this test from working properly.

test("Testing Add to Cart Feature", async () => {
await searchBarTest.navigate()
await searchBarTest.search("Halo Reach")
await searchBarTest.click(searchBarTest.searchResults)
await searchBarTest.click(searchBarTest.resultLink)
await new Promise(f => setTimeout(f, 2000));
await searchBarTest.click(searchBarTest.addToCart)
await new Promise(f => setTimeout(f, 2000));
await searchBarTest.click(searchBarTest.viewCart)
await searchBarTest.click(searchBarTest.remove)
await searchBarTest.click(searchBarTest.removeYes)
await searchBarTest.driver.quit();
})
