const { urlToHttpOptions } = require("url");

class CodeReedeemPage {

    get sortBy() { return $('label.flix-label') }

    waitForCodeReedeemToLoad() {
        this.sortBy.waitForDisplayed({ timeout: 5000 });
    }

    pageTitle() { return browser.getTitle(); }

    get departureFromLabel() {
        return $('(//label[@class="TimeSliderFilter__title___InJhl"])[1]');
    }

    get arrivalInLabel() {
        return $('(//label[@class="TimeSliderFilter__title___InJhl"])[2]');
    }

    get activeDate() {
        return $("a[class='flix-pager__item DatePicker__datePickerItem___PWkQM DatePicker__datePickerItemActive___MWf46'] span[class='DatePicker__day___U7Rhg DatePicker__dayWithPrice___uaPDy']");
    }

    get reserveSeatButton() {
        return $('(//button[@data-e2e="button-reserve-trip"])[1]');
    }

    get searchResultItems() {
        return $$('//div[@data-e2e="search-result-list"]//div');
    }

    getSearchResultList() {
        return this.searchResultItems.length
    }

    getDepartureLabel() {
        this.departureFromLabel.waitForDisplayed()
        return this.departureFromLabel.getText();
    }

    getArrivalLabel() {
        this.arrivalInLabel.waitForDisplayed()
        return this.arrivalInLabel.getText();
    }

    getActiveDate() {
        return this.activeDate.getText();
    }

    clickReserveButton() {
        this.reserveSeatButton.click();
    }

}

module.exports = new CodeReedeemPage();