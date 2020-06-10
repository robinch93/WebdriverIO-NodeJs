
class SearchPage{

    get pageTitle(){
        return browser.getTitle();
    }

    get departureCity(){
        return $('(//input[@type="text"])[1]').getText();
    }

    get arrivalCity(){
        return $('(//input[@type="text"])[2]').getText();
    }

    get departureDate(){
        return $('(//input[@type="text"])[3]').getText(); 
    }

    get passengers(){
        return $('(//input[@type="text"])[4]').getText(); 
    }

    set departureCity(departureCity){
         $('(//input[@type="text"])[1]').setValue(departureCity);
    }

    set arrivalCity(arrivalCity){
         $('(//input[@type="text"])[2]').setValue(arrivalCity);
    }

    set departureDate(departureDate){
         $('(//input[@type="text"])[3]').setValue(departureDate); 
    }

    set passengers(noOfPassengers){
         $('(//input[@type="text"])[4]').setValue(noOfPassengers); 
    }

    clickSearchButton(){
        $('button.flix-btn').click();
    }

}

module.exports = new SearchPage();