// Translation Interface
class Translation {
  constructor(translations) {
    this.translations = translations;
  }

  getTranslation(key) {
    return this.translations[key];
  }
}

// Validation Interface
class ValidationRule {
  constructor(check, message) {
    this.check = check;
    this.message = message;
  }

  validate(temperature, soc, chargeRate) {
    return this.check(temperature, soc, chargeRate) 
      ? { result: true, message: this.message }
      : { result: false, message: this.message };
  }
}

// Translation implementation
class TranslationService extends Translation {
  constructor(translations, language) {
    super(translations);
    this.language = language;
  }

  getCurrentTranslations() {
    return this.getTranslation(this.language);
  }
}

// Validation implementation
class ValidationService {
  constructor(translations) {
    const translatedOutput = translations;
    this.rules = [
      new ValidationRule(isTemperatureOk, translatedOutput.temperatureOutOfRange),
      new ValidationRule(isSocOk, translatedOutput.socOutOfRange),
      new ValidationRule(isChargeRateOk, translatedOutput.chargeRateOutOfRange)
    ];
  }

  validate(temperature, soc, chargeRate) {
    for (let rule of this.rules) {
      const result = rule.validate(temperature, soc, chargeRate);
      if (!result.result) {
        return result;
      }
    }
    return { result: true, message: translatedOutput.allParametersWithinRange };
  }
}

// Helper functions
function isTemperatureOk(temperature) {
  return temperature >= 0 && temperature <= 45;
}

function isSocOk(soc) {
  return soc >= 20 && soc <= 80;
}

function isChargeRateOk(chargeRate) {
  return chargeRate >= 0 && chargeRate <= 0.8;
}

// Main logic
function main(translations, language) {
  const translationService = new TranslationService(translations, language);
  const translatedOutput = translationService.getCurrentTranslations();
  const validationService = new ValidationService(translatedOutput);

  const result1 = validationService.validate(25, 70, 0.7);
  const result2 = validationService.validate(50, 85, 0.0);

  return [result1, result2];
}

// Sample translations
const translations = require('./translations');

// Execute
const language = 'eng'; // or 'ger' for German
const results = main(translations, language);

console.log(results);


