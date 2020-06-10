const searchPageObj = require("../flixbus_pages/searchPage")
const codeReedeemObj = require("../flixbus_pages/codeReedemPage")

describe("Verify Travel Details", function(){

    it("verify departure label in filter section", function(){
        let depLabelText = codeReedeemObj.departureFromLabel();
        let inputDeparture = searchPageObj.departureCity();
        depLabelText.isEqual(inputDeparture);
    });

});
