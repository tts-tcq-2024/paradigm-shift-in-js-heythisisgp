
const batteryIsOk = require('../src/batteryChecker');

function testMethod(expected, actual, message) {
  if (expected !== actual) {
    console.error(`Test failed: ${message}`);
    console.error(`Expected: ${expected}`);
    console.error(`Actual: ${actual}`);
  } else {
    console.log(`Test passed: ${message}`);
  }
}

function testBatteryIsOk() {
  testMethod(true, batteryIsOk(25, 70, 0.7), 'Temperature, SOC, and charge rate are within range');
  testMethod(false, batteryIsOk(50, 70, 0.7), 'Temperature is out of range');
  testMethod(false, batteryIsOk(25, 85, 0.7), 'SOC is out of range');
  testMethod(false, batteryIsOk(25, 70, 0.9), 'Charge rate is out of range');
  testMethod(true, batteryIsOk(2, 30, 0.7), 'Temperature is low but within warning range');
  testMethod(true, batteryIsOk(40, 30, 0.7), 'Temperature is high but within warning range');
  testMethod(true, batteryIsOk(25, 22, 0.7), 'SOC is low but within warning range');
  testMethod(true, batteryIsOk(25, 78, 0.7), 'SOC is high but within warning range');
  testMethod(true, batteryIsOk(25, 70, 0.78), 'Charge rate is high but within warning range');
}

testBatteryIsOk();
