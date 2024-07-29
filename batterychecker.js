const { checkTemperature, checkSoc, checkChargeRate } = require('./batteryStatus');

function batteryIsOk(temperature, soc, chargeRate) {
    return checkTemperature(temperature) && checkSoc(soc) && checkChargeRate(chargeRate);
}

module.exports = batteryIsOk;

