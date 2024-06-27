function batteryIsOk(temperature, soc, chargeRate) {
    let temperatureIsInRange = temperature >= 0 && temperature <= 45;
    let socIsInRange = soc >= 20 && soc <= 80;
    let chargeRateIsInRange = chargeRate <= 0.8;

    if (!temperatureIsInRange) {
        console.log("Temperature is out of range!");
    }
    if (!socIsInRange) {
        console.log("State of Charge is out of range!");
    }
    if (!chargeRateIsInRange) {
        console.log("Charge Rate is out of range!");
    }

    return temperatureIsInRange && socIsInRange && chargeRateIsInRange;
}

function main() {
    let batteryOk = batteryIsOk(25, 70, 0.7);

    if (batteryOk) {
        console.log("All ok");
    } else {
        console.log("Battery is not ok");
    }
}

main();

