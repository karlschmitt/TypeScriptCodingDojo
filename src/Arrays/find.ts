const arr: string[] = ['one', 'two', 'three'];

const str = 'TWO';

const found = arr.find((element) => {
	return element.toLowerCase() === str.toLowerCase();
});

console.log(found);

if (found !== undefined ) {
	console.log('the string is contained in the array');
} else {
	console.log('the string is not contained in the array');
}
