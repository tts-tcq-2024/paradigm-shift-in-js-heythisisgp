// Language translations
const translations = {
  en: {
    temperatureOutOfRange: "Temperature is out of range!",
    socOutOfRange: "State of Charge is out of range!",
    chargeRateOutOfRange: "Charge Rate is out of range!",
    allParametersWithinRange: "All parameters are within range.",
    expectedTrueButGotFalse: "Expected true, but got false",
    expectedFalseButGotTrue: "Expected false, but got true"
  },
  de: {
    temperatureOutOfRange: "Temperatur ist außerhalb des Bereichs!",
    socOutOfRange: "Ladezustand ist außerhalb des Bereichs!",
    chargeRateOutOfRange: "Ladestrom ist außerhalb des Bereichs!",
    allParametersWithinRange: "Alle Parameter sind innerhalb des Bereichs.",
    expectedTrueButGotFalse: "Erwartet wahr, aber bekam falsch",
    expectedFalseButGotTrue: "Erwartet falsch, aber bekam wahr"
  }
};

// Global language variable
let language = 'en'; // or 'de' for German

// Get translation for current language
const t = translations[language];

const validationRules = [
  { check: isTemperatureOk, message: t.temperatureOutOfRange },
  { check: isSocOk, message: t.socOutOfRange },
  { check: isChargeRateOk, message: t.chargeRateOutOfRange }
];

function isTemperatureOk(temperature){
  return temperature >= 0 && temperature <= 45;
}
function isSocOk(soc){
  return soc >= 20 && soc <= 80;
}
function isChargeRateOk(chargeRate){
  return chargeRate >= 0 && chargeRate <= 0.8;
}

function batteryIsOk(temperature, soc, chargeRate) {
  for (let rule of validationRules) {
    if (!rule.check(temperature, soc, chargeRate)) {
      console.log(rule.message);
      return false;
    }
  }
  console.log(t.allParametersWithinRange);
  return true;
}

function ExpectTrueOrFalse(expression) {
  console.log(expression ? t.expectedTrueButGotFalse : t.expectedFalseButGotTrue);
}

function main() {
  ExpectTrueOrFalse(batteryIsOk(25, 70, 0.7));
  ExpectTrueOrFalse(batteryIsOk(50, 85, 0.0)); 
  return 0;
}

main();
