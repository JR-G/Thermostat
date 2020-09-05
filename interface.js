$(document).ready(function() {
  let thermostat = new Thermostat();
  updateTemperature();

  $('')

  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
  };
})