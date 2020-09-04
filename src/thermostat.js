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

  isMaximumTemp(amount) {
    if(this.isPowerSaveOn() === false) {
      return (this.temp + amount) > this.DEF_MAX_TEMPERATURE
    }
    return (this.temp + amount) > this.PS_MAX_TEMPERATURE
  };

  isMinimumTemp(amount) {
    return (this.temp - amount) < this.MIN_TEMPERATURE
  };

  theMaximumTemp() {
    if(this.isPowerSaveOn() === false) {
      return this.DEF_MAX_TEMPERATURE
    }
    return this.PS_MAX_TEMPERATURE
  };

  increaseTemp(amount = 1) {
    if(this.isMaximumTemp(amount)) {
      this.temp = this.theMaximumTemp()
      throw new Error(`unable to increase above ${this.theMaximumTemp()} degrees.`)
    }
    this.temp += amount
  };

  decreaseTemp(amount = 1) {
    if(this.isMinimumTemp(amount)) {
      this.temp = this.MIN_TEMPERATURE
      throw new Error(`unable to lower below ${this.MIN_TEMPERATURE} degrees.`)
    } 
    this.temp -= amount
  };
};