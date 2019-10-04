const constInworker = 'ConstInWorker';
var timerValue = 1;
onmessage = function (e) {
  
  setInterval(function () {
    timerValue = timerValue + 1;
  }, 1000);
  console.log('Worker: Message received from main script');
  let result = e.data[0] * e.data[1];
  if (isNaN(result)) {
    postMessage('Please write two numbers');
  } else {
    let workerResult = 'Result: ' + result +' timer: '+ timerValue;
    console.log('Worker: Posting message back to main script');
    postMessage(workerResult);
  }
}