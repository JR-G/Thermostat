'use strict';

class Thermostat {

  constructor() {
    this.temp = 20;
    this.MIN_TEMPERATURE = 10;
    this.powerSavingMode = true;
    this.PS_MAX_TEMPERATURE = 25;
    this.DEF_MAX_TEMPERATURE = 32;
  };

  isPowerSaveOn() {
    return this.powerSavingMode === true;
  };

  switchPowerSaveOn() {
    this.powerSavingMode = true;

  };

  switchPowerSaveOff() {
    this.powerSavingMode = false;
  };

  getCurrentTemp() {
    return this.temp;
  };

  isMaximumTemp() {
    if(this.isPowerSaveOn() === false) {
      return this.temp === this.DEF_MAX_TEMPERATURE;
    }
    return this.temp === this.PS_MAX_TEMPERATURE;
  };

  isMinimumTemp() {
    this.temp = this.MIN_TEMPERATURE
  };

  increaseTemp(by) {

  };

  decreaseTemp(by) {
    if(this.temp - by >= this.MIN_TEMPERATURE) {
      this.temp -= by
    } else {
      this.isMinimumTemp()
      throw new Error('unable to lower below 10 degrees.');
    };
  };

};