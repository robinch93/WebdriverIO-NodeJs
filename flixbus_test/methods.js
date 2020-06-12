class Methods{

    swapDate(date) {
        var day = date.substring(8,10);
        var month = date.substring(5,7);
        var year = date.substring(0,4);
        var swappedDate = day + '.' + month + '.' + year;
        return swappedDate;
    }
    
    formatDate(inputDate){
        const date = new Date(inputDate);
        var day = date.getDate();
        var shortMonth = date.toLocaleString('default', { month: 'short' });
        var formatedDate = day + " " + shortMonth;
        console.log("Formatted Date is: " + formatedDate)
        return formatedDate;
    }

}

module.exports = new Methods();
