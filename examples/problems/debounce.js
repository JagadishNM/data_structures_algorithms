function debounce(func, delay = 300) {
	let timer;

	return (...args) => {
		clearTimeout(timer);

		timer = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}

function saveInput() {
	console.log('Saving data');
}
const processChange = debounce(saveInput, 2000);
processChange();

//<button onclick='processChange()'>Click me</button>;
