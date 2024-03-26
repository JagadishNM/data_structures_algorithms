// Javascript Program for Left Rotation and Right Rotation of a String
// Input : s = "GeeksforGeeks"
//         d = 2
// Output : Left Rotation  : "eksforGeeksGe"
//          Right Rotation : "ksGeeksforGee"

// Input : s = "qwertyu"
//         d = 2
// Output : Left rotation : "ertyuqw"
//          Right rotation : "yuqwert"

function leftRotate(str, d) {
	let ans = str.substring(d, str.length) + str.substring(0, d);
	console.log(ans);
	return ans;
}

function rightRotate(str, d) {
	let ans =
		str.substring(str.length - d, str.length) +
		str.substring(0, str.length - d);
	console.log(ans);
}

leftRotate('angular', 2);
rightRotate('angular', 2);
