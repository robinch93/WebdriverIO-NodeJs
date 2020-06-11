class CodeReedeemPage{

    get sortBy(){ return $('#search-results-sort-items') }

    waitForCodeReedeemToLoad () {
        if(!this.sortBy.isDisplayed()){
          this.sortBy.waitForDisplayed(5000);
        }
      }
    
    pageTitle() { return browser.getTitle(); }

    get departureFromLabel(){
        return $('label[for=direct_departure_time_slider]');
    }

    get arrivalInLabel(){
        return $('label[for=direct_arrival_time_slider]');
    }

    get activeDate(){
        return $('a.active strong');
    }

    get reserveSeatButton(){
        return $('(//input[@value="Reserve 1 Seat"])[2]');
    }

    get bookButton(){
        return $('#book-button');
    }

    getDepartureLabel(){
        return this.departureFromLabel.getText();
    }

    getArrivalLabel(){
        return this.arrivalInLabel.getText();
    }

    getActiveDate(){
        return this.activeDate.getHTML(false);
    }

    clickReserveButton(){
        if(this.reserveSeatButton){
            
        }
    }

}

module.exports = new CodeReedeemPage();