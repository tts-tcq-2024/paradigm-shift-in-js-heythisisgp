function checkTemperature(temperature) {
    return temperature < 0 || temperature > 45;
}

function checkSoc(soc) {
    return soc < 20 || soc > 80;
}

function checkChargeRate(chargeRate) {
    return chargeRate > 0.8;
}

function logMessage(message) {
    console.log(message);
}

function batteryIsOk(temperature, soc, chargeRate) {
    if (checkTemperature(temperature)) {
        logMessage("Temperature is out of range!");
        return false;
    }
    if (checkSoc(soc)) {
        logMessage("State of Charge is out of range!");
        return false;
    }
    if (checkChargeRate(chargeRate)) {
        logMessage("Charge Rate is out of range!");
        return false;
    }

    logMessage("All parameters are within range.");
    return true;
}

function ExpectTrueOrFalse(expression) {
    if (!expression) {
        logMessage("Expected true, but got false");
    } else {
        logMessage("Expected false, but got true");
    }
}

function main() {
    ExpectTrueOrFalse(batteryIsOk(25, 70, 0.7));
    ExpectTrueOrFalse(batteryIsOk(50, 85, 0.0));
    logMessage("All ok");
    return 0;
}

// Call the main function to execute the tests
main();

