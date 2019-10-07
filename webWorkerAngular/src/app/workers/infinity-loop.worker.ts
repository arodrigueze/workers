/// <reference lib="webworker" />

var timerValue = 1;
setInterval(function () {
  timerValue = timerValue + 1;
  postMessage('Timer ' + timerValue);
}, 5000);

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response + 'Timer ' + timerValue);
});
