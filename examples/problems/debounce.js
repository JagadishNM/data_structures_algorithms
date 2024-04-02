
// https://medium.com/@bs903944/debounce-and-throttling-what-they-are-and-when-to-use-them-eadd272fe0be#:~:text=Debouncing%20delays%20the%20execution%20of,in%20every%20specified%20time%20interval.


// Debouncing delays the execution of your code until the user stops
// performing a certain action for a specified amount of time.

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
