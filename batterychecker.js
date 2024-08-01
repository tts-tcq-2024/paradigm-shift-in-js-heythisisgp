// Define translations for each language
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

// Set the global language variable
let language = 'en'; // or 'de' for German

function batteryIsOk(temperature, soc, chargeRate) {
  const translation = translations[language];

  console.log(
    temperature < 0 || temperature > 45 ? translation.temperatureOutOfRange :
    soc < 20 || soc > 80 ? translation.socOutOfRange :
    chargeRate > 0.8 ? translation.chargeRateOutOfRange :
    translation.allParametersWithinRange
  );

  let value = ((temperature < 0 || temperature > 45) || (soc < 20 || soc > 80) || (chargeRate > 0.8)) ? false : true;
  return value;
}

function ExpectTrueOrFalse(expression) {
  const translation = translations[language];

  if (!expression) {
    console.log(translation.expectedTrueButGotFalse);
  } else {
    console.log(translation.expectedFalseButGotTrue);
  }
}

function main() {
  ExpectTrueOrFalse(batteryIsOk(25, 70, 0.7));
  ExpectTrueOrFalse(batteryIsOk(50, 85, 0.0));
  console.log(translations[language].allParametersWithinRange);
  return 0;
}

main();
