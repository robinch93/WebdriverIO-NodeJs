const moment = require('moment')

class Utils {

    formatDate(inputDate) {
        const weekDay = moment(inputDate).format('dddd').substr(0, 3)
        const month = moment(inputDate).format('MMM')
        const day = moment(inputDate).format('DD')
        var formatedDate = weekDay + ', ' + day + ' ' + month
        console.log("Formatted Date is: " + formatedDate)
        return formatedDate;
    }

}

module.exports = new Utils();
