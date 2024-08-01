let currentLanguage = 'english';
let translations = {};

const loadLanguage = async lang => {
  try {
    const response = await fetch('translations.json');
    const data = await response.json();
    currentLanguage = data[lang] ? lang : currentLanguage;
    translations = data;
  } catch (error) {
    console.error('Error loading translations:', error);
  }
};

const getTranslation = key => translations[currentLanguage][key] || key;
const isInRange = (value, min, max, key) => value >= min && value <= max || !console.log(getTranslation(key));
const batteryIsOk = (temperature, soc, chargeRate) => 
  isInRange(temperature, 0, 45, 'temperatureOutOfRange') &&
  isInRange(soc, 20, 80, 'socOutOfRange') &&
  isInRange(chargeRate, 0, 0.8, 'chargeRateOutOfRange');

(async () => {
  await loadLanguage('german');
  console.log(getTranslation(batteryIsOk(25, 70, 0.7) ? 'allOk' : 'batteryNotOk'));
})();

