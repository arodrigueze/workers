/// <reference lib="webworker" />
// triple slash directive

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});
