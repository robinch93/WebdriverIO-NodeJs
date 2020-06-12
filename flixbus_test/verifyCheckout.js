
const searchPage = require("../flixbus_pages/searchPage")
const codeReedeem = require("../flixbus_pages/codeReedemPage")
const checkout = require("../flixbus_pages/checkoutPage");
const methods = require("../flixbus_test/methods");

describe("Verify Checkout Details: ", function(){

    var depCity = "Rome";
    var arrCity = "Turin";
    var travelDate = "2020-06-20";

    it("verify shopping cart is visible", function(){
        browser.url('https://global.flixbus.com/');
        browser.pause(2000);
        searchPage.handleCookiesBanner();
        searchPage.setTravelDetails(depCity, arrCity, travelDate)
        searchPage.clickSearchButton();
        expect(codeReedeem.shoppingCart.getText()).to.equal("Shopping Cart");
    });

    it("verify your order details are visible", function(){ 
       codeReedeem.clickReserveButton();
       browser.pause(2000);
       codeReedeem.clickBookButton();
       browser.pause(2000);
       expect(checkout.checkoutSection.getText()).to.equal("Your Order");
    });

    it("verify order details", function(){ 
        assert.ok(checkout.getDepartureCity().includes(depCity));
        assert.ok(checkout.getArrivalCity().includes(arrCity));
        expect(checkout.getDepartureDate()).to.equal(methods.formatDate(travelDate));
    });

});

