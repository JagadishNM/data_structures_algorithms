const worker = new Worker('worker.js');

const computation = document.getElementById('computationButton');
const bagroundChange = document.getElementById('changeColor');

bagroundChange.addEventListener('click', function () {
	if (document.body.style.background !== 'green') {
		document.body.style.background = 'green';
	} else {
		document.body.style.background = 'blue';
	}
});

computation.addEventListener('click', (event) => {
	worker.postMessage();
});

worker.onmessage = (event) => {
	console.log(event);
};
