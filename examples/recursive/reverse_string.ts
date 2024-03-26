function reverse(str: string) {
	if (str.length === 1) return str;
	return reverse(str.slice(1)) + str[0];
}

/*
Link ===> https://www.youtube.com/watch?v=ExjpYfCB3bM
*/
reverse('awesome');
reverse('rithmschool');
//Write a recursive function called reverse which accepts a string and returns a new string in reverse.
