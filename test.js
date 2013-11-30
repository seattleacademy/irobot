var Robot = require('./irobot').Robot;
var songs = require('./songs');

var robot = new Robot('/dev/ttyUSB0');

robot.on('ready', function () {
  setTimeout(function () {
    robot.sing(songs.IMPERIAL_MARCH);
  }, 500);
});
