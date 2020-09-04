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
});