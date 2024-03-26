function throttle(mainFunction, delay = 300) {
	let timerFlag = null;

	return (...args) => {
		if (timerFlag === null) {
			mainFunction(args);
			timerFlag = setTimeout(() => {
				timerFlag = null;
			}, delay);
		}
	};
}

function fetchData() {
	console.log('Fetching data...');
	// Simulate an API call with a random delay
	setTimeout(() => {
		console.log('Data fetched!');
	}, Math.random() * 1000);
}

// Throttle the fetchData function with a delay of 5000 ms
const throttledFetchData = throttle(fetchData, 5000);
throttledFetchData();

// Add an event listener to the window scroll event that calls the throttledFetchData function
//window.addEventListener('scroll', throttledFetchData);
