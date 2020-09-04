describe('Thermostat', function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starting temp is 20', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);

  });

  describe('increaseTemp', function() {
    it('increases the current temp', function() {
      thermostat.increaseTemp(5);
      expect(thermostat.getCurrentTemp()).toEqual(25);
    });
  });

  describe('decreaseTemp', function() {
    it('decreases the current temp', function(){
      thermostat.decreaseTemp(5);
      expect(thermostat.getCurrentTemp()).toEqual(15)
    });

    it('does not drop below 10', function() {
      expect(function() { thermostat.decreaseTemp(11); } ).toThrowError('unable to lower below 10 degrees.');
      expect(thermostat.getCurrentTemp()).toEqual(10)
    });
  });

  describe('switchPowerSaveOn', function() {
    it('sets maximum temp to 25', function() {
      expect(function() { thermostat.increaseTemp(6); } ).toThrowError('unable to increase above 25 degrees.')
      expect(thermostat.getCurrentTemp()).toEqual(25)
    });
  });

  describe('powerSaveOff', function() {
    it('can switch power saving back on', function() {
      thermostat.switchPowerSaveOff()
      expect(thermostat.isPowerSaveOn()).toBe(false);
      thermostat.switchPowerSaveOn()
      expect(thermostat.isPowerSaveOn()).toBe(true);
    });

    it('sets maximum temp to 32', function() {
      thermostat.switchPowerSaveOff();
      expect(function() { thermostat.increaseTemp(13); } ).toThrowError('unable to increase above 32 degrees.')
      expect(thermostat.getCurrentTemp()).toEqual(32)
    });
  });

  describe('displaying usage levels', function() {
    describe('when the temperature is below 18 degrees', function(){
      it('is considered low-usage', function() {
        thermostat.decreaseTemp(3);
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is between 18 and 25 degrees', function() {
      it('is considered medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is anything else', function() {
      it('is considered high-usage', function() {
        thermostat.switchPowerSaveOff()
        thermostat.increaseTemp(6)
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});