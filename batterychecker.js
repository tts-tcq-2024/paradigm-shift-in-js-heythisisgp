const { testTemperature, testSocThreshold, testChargeRate } = require('./batterystatusmain');

function batteryIsOk(temperature, soc, chargeRate) {
    return testTemperature(temperature) && testSocThreshold(soc) && testChargeRate(chargeRate);
}

module.exports = batteryIsOk;

