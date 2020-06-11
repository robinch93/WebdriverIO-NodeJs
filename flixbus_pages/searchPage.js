
class SearchPage{

    get lowCostText() { return $('div.hero-module--content--1pOtd h1') }

    waitForloginPageToLoad () {
        if(!this.SearchPage.isDisplayed()){
          this.SearchPage.waitForDisplayed(5000);
        }
      }

    get pageTitle() { return browser.getTitle(); }

    get cookieBanner() { return $$(`#cookie-consent-accept-all-button`); }

    get departureCity() { return $('(//input[@type="text"])[1]'); }
    
    get arrivalCity(){ return $('(//input[@type="text"])[2]'); }

    get dropdownList(){ return $('.Dropdown__dropdownList___sfiW6'); }

    get departureDate(){ return $('(//input[@type="text"])[3]');}

    get passengers() { return $('(//input[@type="text"])[4]'); }

    get searchButton(){ return $('button.flix-btn') }

    waitForSearchPageToLoad () {
        if(!this.lowCostText.isDisplayed()){
          this.contactUsText.waitForDisplayed(3000);
        }
      }

    handleCookiesBanner(){
        var existBanner = this.cookieBanner.length;
        if(existBanner > 0){
            console.log("count is :" + existBanner);
            $(`#cookie-consent-accept-all-button`).click();
        }
    }

    getDepartureCity(){
        return this.departureCity.getProperty('value');
    }

    setDepartureCity(departureCity){ 
        this.departureCity.setValue(departureCity);
        browser.pause(500);
        this.dropdownList.click();
        browser.keys(['\ue015','\uE007']);
    }

    getArrivalCity(){
        return this.arrivalCity.getProperty('value');
    }

    setArrivalCity(arrivalCity){ 
        this.arrivalCity.setValue(arrivalCity); 
        browser.pause(500);
        this.dropdownList.click();
        browser.keys(['\ue015','uE007']);
    }

    getDepartureDate(){
        this.departureDate.getText();
    }

    specificDate(index){
        return  $(`//span[@data-date="${index}"]`);
     }

    setDepartureDate(departureDate){ 
        this.departureDate.click(); 
        browser.pause(500);
        this.specificDate(departureDate).click();
    }

    getPassengers(){
        this.passengers.getText();
    }

    selectAdults(adults){
        this.passengers.click();
        $('//div[@data-product-type="adult"]').setValue(adults);
    }

    selectChildren(children){
        this.passengers.click();
        $('//div[@data-product-type="children"]').setValue(children);
    }

    selectBikes(bike_slot){
        this.passengers.click();
        $('//div[@data-product-type="bike_slot"]').setValue(bikes);
    }

    setPassengers(adults=null, children=null, bikes=null){
        if(adults!=null){
            this.selectAdults(adults);
        }

        if(children!=null){
            this.selectChildren(children);
        }
        
        if(bikes!=null){
            this.selectBikes(bikes);
        }

    }

    setTravelDetails(depCity, arrCity, date, pass){
        this.departureCity(depCity);
        this.arrivalCity(arrCity);
        this.departureDate(date);
        this.passengers(pass);
    }

    clickSearchButton(){
        this.searchButton.click();  
    }

}

module.exports = new SearchPage();