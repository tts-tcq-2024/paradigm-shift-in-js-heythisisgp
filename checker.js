function batteryIsOk(temperature,  soc,  chargeRate) {
  console.log(
    temperature < 0 || temperature > 45 ? "Temperature is out of range!" :
    soc < 20 || soc > 80 ? "State of Charge is out of range!" :
    chargeRate > 0.8 ? "Charge Rate is out of range!" :
    "All parameters are within range."
);
    let value = ((temperature < 0 || temperature > 45) || (soc < 20 || soc > 80) || (chargeRate > 0.8)) ? false: true;
    return value;

}

function ExpectTrueOrFalse(expression) {
    if(!expression) {
        console.log("Expected true, but got false");
        
    } else {
        console.log("Expected false, but got true"); 
    }
}
function main() {
    ExpectTrueOrFalse(batteryIsOk(25, 70, 0.7));
    ExpectTrueOrFalse(batteryIsOk(50, 85, 0.0));
    console.log("All ok");
    return 0;
}

main();
