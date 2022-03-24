import {By} from "selenium-webdriver"
import {basePage} from "./basePage"

export class GamestopPage extends basePage {
    searchBar: By = By.xpath('//input[@id="searchRedesignTemplateInput"]')
    searchResults: By = By.xpath('//a[@class="term"]')
    results: By = By.xpath('//div[@class="Results__Container-sc-1na6s8s-0 ygaFX"]')
    dropDown: By = By.xpath('//button[@id="sortby-dropdown"]')
    highToLow: By = By.xpath('//a[@class="dropdown-item price-high-to-low"]')
    resultLink: By = By.xpath('//a[@class="product-tile-link"]')
    Cart: By = By.xpath('//a[@class="minicart-link"]')
    addToCarts: By = By.xpath('//button[@class="add-to-cart btn btn-primary add-to-cart-redesign"]')
    viewCart: By = By.xpath('//button[@class="view-cart-button"]')
    addToCart: By = By.xpath('//button[@id="add-to-cart"]')
    remove: By = By.xpath('//a[@class="remove-btn remove-product remove-line-hyperlink"]')
    removeYes: By = By.xpath('//button[@id="minicart-delete-confirmation-btn"]')
    category : By = By.xpath('//a[@class="category-link"]')
    signIn : By = By.xpath('//a[@class="signin-option"]')
    email : By = By.xpath('//input[@id="login-form-email"]')
    password : By = By.xpath('//input[@id="login-form-password"]')
    signInButton : By = By.xpath('//button[@class="btn btn-block mb-2 sign-in-submit"]')

    constructor() {
        super({url: "https://www.gamestop.com/"});
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}`)
    }
    async getResults() {
        return this.getText(this.results)
    }
}