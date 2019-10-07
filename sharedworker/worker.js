
var timerValue = 1;
setInterval(function () {
  timerValue = timerValue + 1;
}, 1000);
onconnect = function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]) + ' Timer: ' + timerValue;
    port.postMessage(workerResult);
  }

}
