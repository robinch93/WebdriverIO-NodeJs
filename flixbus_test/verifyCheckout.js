
const searchPage = require("../flixbus_pages/searchPage")
const codeReedeem = require("../flixbus_pages/codeReedemPage")
const checkout = require("../flixbus_pages/checkoutPage");
const utils = require("./utils");
const moment = require('moment')

describe("Verify Checkout Details: ", function () {

    var depCity = "Venice";
    var arrCity = "Turin";
    var travelDate = moment(travelDate).add(5, "days").format("YYYY-MM-DD");

    before(() => {
        browser.url('https://global.flixbus.com/')
        browser.maximizeWindow()
    })

    it("verify search results list is visible", function () {
        searchPage.handleCookiesBanner();
        searchPage.setTravelDetails(depCity, arrCity, travelDate)
        searchPage.clickSearchButton();
        codeReedeem.waitForCodeReedeemToLoad()
        expect(codeReedeem.getSearchResultList()).to.be.greaterThan(0);
    });

    it("verify your order details are visible", function () {
        codeReedeem.clickReserveButton();
        expect(checkout.getCheckoutSectionText()).to.equal("Your booking");
    });

    it("verify booking details", function () {
        assert.ok(checkout.getDepartureCity().includes(depCity));
        assert.ok(checkout.getArrivalCity().includes(arrCity));
        expect(checkout.getDepartureDate()).to.equal(utils.formatDate(travelDate));
    });

});

