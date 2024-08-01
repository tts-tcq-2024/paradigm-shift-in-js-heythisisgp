let currentLanguage = 'english';
let translations = {};

fetch('translations.json')
  .then(response => response.json())
  .then(data => {
    currentLanguage = 'german';
    translations = data;
  })
  .catch(error => console.error('Error loading translations:', error));

function getTranslation(key) {
  return translations[currentLanguage][key] || key;
}

function isInRange(value, min, max, key) {
  return value >= min && value <= max || console.log(getTranslation(key));
}

function batteryIsOk(temperature, soc, chargeRate) {
  return isInRange(temperature, 0, 45, 'temperatureOutOfRange') 
    && isInRange(soc, 20, 80, 'socOutOfRange') 
    && isInRange(chargeRate, 0, 0.8, 'chargeRateOutOfRange');
}

batteryIsOk(25, 70, 0.7) 
  ? console.log(getTranslation('allOk')) 
  : console.log(getTranslation('batteryNotOk'));

