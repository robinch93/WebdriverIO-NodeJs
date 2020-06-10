class checkoutPage{

    get departureTime(){
        return $('span.flix-connection__title-departure').getText();
    }

    get noOfPassengers(){
        return $('div.flix-cart-item>span').getText();
    }

}