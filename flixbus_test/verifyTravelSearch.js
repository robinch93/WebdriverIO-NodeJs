
const searchPage = require("../flixbus_pages/searchPage")
const codeReedeem = require("../flixbus_pages/codeReedemPage")
const utils = require("./utils")
const moment = require('moment')


describe("Verify Travel Details: ", function () {

    var depCity = "Turin";
    var arrCity = "Venice";
    var travelDate = moment(travelDate).add(5, "days").format("YYYY-MM-DD");

    before(() => {
        browser.url('https://global.flixbus.com/')
        browser.maximizeWindow()
    })

    it("verify travel details on search page", function () {
        searchPage.handleCookiesBanner();
        searchPage.setDepartureCity(depCity);
        searchPage.setArrivalCity(arrCity);
        searchPage.setDepartureDate(travelDate);
        expect(searchPage.getDepartureCity()).to.equal(depCity);
        expect(searchPage.getArrivalCity()).to.equal(arrCity);
        searchPage.clickSearchButton();
    });

    it("verify redirection to code reedem page", function () {
        codeReedeem.waitForCodeReedeemToLoad();
        var title = codeReedeem.pageTitle();
        console.log('page title is: ', title)
        expect(title).to.equal("Travel by bus from " + depCity + " to " + arrCity + " on " + utils.formatDate(travelDate))
    });

    it("verify departure label on code reedem page", function () {
        var depLabelText = codeReedeem.getDepartureLabel();
        console.log("DepTxt: " + depLabelText);
        assert.equal(depLabelText, "Departure from: " + depCity);
    });

    it("verify arrival label on code reedem page", function () {
        var arrivalText = codeReedeem.getArrivalLabel();
        console.log("ArrTxt: " + arrivalText);
        expect(arrivalText).to.equal("Arrival in: " + arrCity);
    });

    it("verify active date on code reedem page", function () {
        let activeDate = codeReedeem.getActiveDate();
        let formatedDate = utils.formatDate(travelDate);
        console.log("Active Date: " + activeDate + ": Formated date: " + formatedDate);
        assert.equal(activeDate.replace(/\s/g, ''), formatedDate.replace(/\s/g, ''));
    });

});

