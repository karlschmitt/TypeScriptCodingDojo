const arr: { id:number; name: string }[] = [
	{ id: 1, name: 'Tom' },
	{ id: 2, name: 'Alfred' },
	{ id: 3, name: 'Fred' },

];

const found = arr.find((obj) => {
	return obj.id === 2;
});

console.log(found);

if(found !== undefined) {
	console.log('The object is contained in the array')
} else {

	console.log('The object is not contained in the array')
}
