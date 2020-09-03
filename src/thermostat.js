'use strict';

class Thermostat {

  constructor() {
    this.temp = 20;
    this.MIN_TEMPERATURE = 10
  };

  getCurrentTemp() {
    return this.temp;
  };

  increaseTemp(by) {
    this.temp += by
  };

  decreaseTemp(by) {
    if(this.temp - by >= this.MIN_TEMPERATURE) {
      this.temp -= by
    } else {
      this.temp = this.MIN_TEMPERATURE
      throw new Error('unable to lower below 10 degrees.');
    }
  };

};