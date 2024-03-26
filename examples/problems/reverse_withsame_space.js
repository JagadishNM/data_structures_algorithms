let input = 'I am java Developer';
// let output =  'r ep olev eDavajmaI'
const reverseStr = (input) => {
	const revArr = input.replaceAll(' ', '').split('').reverse();
	for (let i = 0; i < revArr.length; i++) {
		if (input[i] === ' ') revArr.splice(i, 0, ' ');
	}
	return revArr.join('');
};
reverseStr(input);
