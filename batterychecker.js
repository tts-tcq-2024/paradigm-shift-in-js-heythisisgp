let currentLanguage = 'english';
let translations = {};

function fetchLanguage(lang) {
  fetch('translations.json')
    .then(response => response.json())
    .then(data => {
      if (data[lang]) {
        currentLanguage = lang;
        translations = data;
      } else {
        console.error(`Language ${lang} not supported`);
      }
    })
    .catch(error => {
      console.error('Error loading translations:', error);
    });
}

function getTranslation(key) {
  return translations[currentLanguage][key];
}

function checkRange(value, min, max) {
  const checkRange = value >= min && value <= max;
  if (!checkRange) {
    console.log(getTranslation(`${value} is out of range!`)); 
  }
  return checkRange;
}

function batteryStatusOK(temperature, soc, chargeRate) {
  const temperatureIsOk = isInRange(temperature, 0, 45);
  const socIsOk = isInRange(soc, 20, 80);
  const chargeRateIsOk = isInRange(chargeRate, 0, 0.8);

  return temperatureIsOk && socIsOk && chargeRateIsOk;
}

function main() {
  loadLanguage('german'); 
  let batteryOk = batteryStatusOK(25, 70, 0.7);

  if (batteryOk) {
    console.log(getTranslation('allOk'));
  } else {
    console.log(getTranslation('batteryNotOk'));
  }
}
