class SearchPage {

    get lowCostText() { return $('div.hero-module--content--1pOtd h1') }

    waitForloginPageToLoad() {
        if (!this.SearchPage.isDisplayed()) {
            this.SearchPage.waitForDisplayed(5000);
        }
    }

    get pageTitle() { return browser.getTitle(); }

    get departureCity() { return $('//div[@data-e2e="departure-city-input-field"]//div//input'); }

    get arrivalCity() { return $('//div[@data-e2e="arrival-city-input-field"]//div//input'); }

    get dropdownList() { return $('.pVGAc'); }

    get departureDate() { return $('//input[@data-e2e="departure-date-input-field"]'); }

    get passengers() { return $('//div[@data-e2e="products-input-field"]//div//input'); }

    get searchButton() { return $('//div[@data-e2e="search-button"]') }

    waitForSearchPageToLoad() {
        if (!this.lowCostText.isDisplayed()) {
            this.contactUsText.waitForDisplayed(3000);
        }
    }

    handleCookiesBanner() {
        browser.pause(1000)
        browser.execute(() => {
            const cookieBanner = document.querySelector('#usercentrics-root').shadowRoot.querySelector('.gSmhlT')
            if (cookieBanner != null) {
                cookieBanner.click()
            }
        })
    }

    getDepartureCity() {
        return this.departureCity.getProperty('value');
    }

    setDepartureCity(departureCity) {
        this.departureCity.waitForDisplayed()
        this.departureCity.setValue(departureCity);
        this.dropdownList.waitForDisplayed()
        this.dropdownList.click();
        browser.keys(['\ue015', '\uE007']);
    }

    getArrivalCity() {
        return this.arrivalCity.getProperty('value');
    }

    setArrivalCity(arrivalCity) {
        this.arrivalCity.waitForDisplayed()
        this.arrivalCity.setValue(arrivalCity);
        this.dropdownList.waitForDisplayed()
        this.dropdownList.click();
        browser.keys(['\ue015', 'uE007']);
    }

    getDepartureDate() {
        this.departureDate.getText();
    }

    specificDate(index) {
        return $(`//span[@data-date="${index}"]`);
    }

    setDepartureDate(departureDate) {
        this.departureDate.click();
        browser.pause(500);
        this.specificDate(departureDate).click();
    }

    getPassengers() {
        this.passengers.getText();
    }

    selectAdults(adults) {
        this.passengers.click();
        $('//div[@data-product-type="adult"]').setValue(adults);
    }

    selectChildren(children) {
        this.passengers.click();
        $('//div[@data-product-type="children"]').setValue(children);
    }

    selectBikes(bike_slot) {
        this.passengers.click();
        $('//div[@data-product-type="bike_slot"]').setValue(bikes);
    }

    setPassengers(adults = null, children = null, bikes = null) {
        if (adults != null) {
            this.selectAdults(adults);
        }

        if (children != null) {
            this.selectChildren(children);
        }

        if (bikes != null) {
            this.selectBikes(bikes);
        }

    }

    setTravelDetails(depCity, arrCity, date) {
        this.setDepartureCity(depCity)
        this.setArrivalCity(arrCity);
        this.setDepartureDate(date);
    }

    clickSearchButton() {
        this.searchButton.click();
    }

}

module.exports = new SearchPage();