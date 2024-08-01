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

// Define validation rules
const validationRules = [
  { check: (temperature, soc, chargeRate) => temperature < 0 || temperature > 45, message: t.temperatureOutOfRange },
  { check: (temperature, soc, chargeRate) => soc < 20 || soc > 80, message: t.socOutOfRange },
  { check: (temperature, soc, chargeRate) => chargeRate > 0.8, message: t.chargeRateOutOfRange }
];

function batteryIsOk(temperature, soc, chargeRate) {
  const failedRule = validationRules.find(rule => rule.check(temperature, soc, chargeRate));
  if (failedRule) {
    console.log(failedRule.message);
    return false;
  }
  console.log(t.allParametersWithinRange);
  return true;
}

function ExpectTrueOrFalse(expression) {
  console.log(expression ? t.expectedFalseButGotTrue : t.expectedTrueButGotFalse);
}

function main() {
  ExpectTrueOrFalse(batteryIsOk(25, 70, 0.7));
  ExpectTrueOrFalse(batteryIsOk(50, 85, 0.0));
  return 0;
}

main();
