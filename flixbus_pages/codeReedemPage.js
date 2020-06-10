class CodeReedeemPage{

    get departureFromLabel(){
        return $('//label[@for="direct_departure_time_slider"]').getText();
    }

    get arrivalInLabel(){
        return $('//label[@for="direct_arrival_time_slider"]').getText();
    }

    clickReserveSeat(){
        $('(//input[@value="Reserve 1 Seat"])[4]').click();
    }

    clickBookButton(){
        $('#book-button').click();
    }

}

module.exports = new CodeReedeemPage();