// Language translations
const translations = {
  eng: {
    temperatureOutOfRange: "Temperature is out of range!",
    socOutOfRange: "State of Charge is out of range!",
    chargeRateOutOfRange: "Charge Rate is out of range!",
    allParametersWithinRange: "All parameters are within range.",
    expectedTrueButGotFalse: "Expected true, but got false",
    expectedFalseButGotTrue: "Expected false, but got true"
  },
  ger: {
    temperatureOutOfRange: "Temperatur ist außerhalb des Bereichs!",
    socOutOfRange: "Ladezustand ist außerhalb des Bereichs!",
    chargeRateOutOfRange: "Ladestrom ist außerhalb des Bereichs!",
    allParametersWithinRange: "Alle Parameter sind innerhalb des Bereichs.",
    expectedTrueButGotFalse: "Erwartet wahr, aber bekam falsch",
    expectedFalseButGotTrue: "Erwartet falsch, aber bekam wahr"
  }
};

// Global language variable
let language = 'eng'; // or 'ger' for German

// Get translation for current language
const translatedLanguage = translations[language];

const validationRules = [
  { check: isTemperatureOk, message: translatedLanguage.temperatureOutOfRange },
  { check: isSocOk, message: translatedLanguage.socOutOfRange },
  { check: isChargeRateOk, message: translatedLanguage.chargeRateOutOfRange }
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
      return { result: false, message: rule.message };
    }
  }
  return { result: true, message: translatedLanguage.allParametersWithinRange };
}

function ExpectTrueOrFalse(expression) {
  return expression ? translatedLanguage.expectedTrueButGotFalse : translatedLanguage.expectedFalseButGotTrue;
}

function main() {
  const result1 = batteryIsOk(25, 70, 0.7);
  const result2 = batteryIsOk(50, 85, 0.0);
  return [result1, result2];
}

const results = main();

