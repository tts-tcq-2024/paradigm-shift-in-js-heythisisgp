let currentLanguage = 'english';
let translations = {};

async function loadLanguage(lang) {
  try {
    const response = await fetch('translations.json');
    const data = await response.json();
    if (data[lang]) {
      currentLanguage = lang;
      translations = data[lang]; // Directly assign the language-specific translations
    } else {
      console.error(`Language ${lang} not supported`);
    }
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

function getTranslation(key) {
  return translations[key] || `Translation missing for ${key}`; // Provide default value if missing
}

function isInRange(value, min, max) {
  const isInRange = value >= min && value <= max;
  if (!isInRange) {
    console.log(getTranslation(`${value} is out of range!`));
  }
  return isInRange;
}

function batteryIsOk(temperature, soc, chargeRate) {
  const temperatureIsOk = isInRange(temperature, 0, 45);
  const socIsOk = isInRange(soc, 20, 80);
  const chargeRateIsOk = isInRange(chargeRate, 0, 0.8);

  return temperatureIsOk && socIsOk && chargeRateIsOk;
}

async function main() {
  await loadLanguage('german');
  const batteryOk = batteryIsOk(25, 70, 0.7);

  console.log(batteryOk ? getTranslation('allOk') : getTranslation('batteryNotOk'));
}
