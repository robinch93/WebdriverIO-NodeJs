const { formatDate } = require("../flixbus_test/utils");

class CheckoutPage {

    get checkoutSection() {
        return $('.flix-checkout-section-cart h2');
    }

    get departureCity() {
        return $('(//tbody//tr)[1]');
    }

    get arrivalCity() {
        return $('(//tbody//tr)[2]');
    }

    getCheckoutSectionText() {
        this.checkoutSection.waitForDisplayed()
        return this.checkoutSection.getText()
    }

    getDepartureDate() {
        var depDate = $('span.flix-connection__title-departure').getHTML(false);
        console.log("Retrieved Departure Date is: " + depDate);
        return depDate;
    }

    getDepartureCity() {
        return this.departureCity.getText();

    }

    getArrivalCity() {
        return this.arrivalCity.getText();
    }

    getNoOfPassengers() {
        return $('div.flix-cart-item>span').getText();
    }

}

module.exports = new CheckoutPage();