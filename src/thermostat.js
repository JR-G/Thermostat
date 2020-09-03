'use strict';

class Thermostat {

  constructor() {
    this.temp = 20;
  };

  getCurrentTemp() {
    return this.temp;
  };

  increaseTemp(by) {
    this.temp += by
  };

};