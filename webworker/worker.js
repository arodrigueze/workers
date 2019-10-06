const constInworker = 'ConstInWorker';
var timerValue = 1;
setInterval(function () {
  timerValue = timerValue + 1;
}, 1000);

onmessage = function (e) {
  console.log(self);  
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

function superProcess() {
	var counter = 1000000000;
	for(let i = 0; i<=counter; i++){
		if(i===counter) {
			console.log('finish process');
		}
	}
}
superProcess();
superProcess();
superProcess();
postMessage('After super process');



onmessageerror = function (e) {
  console.log('error in worker');
  postMessage(e);
}