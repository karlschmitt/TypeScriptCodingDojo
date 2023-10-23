var introduction = (name:string, country?:string) => {
	if ( country ) {
		console.log(`Hello, my name is ${name} from ${country}`);
	} else {
		console.log(`Hello, my name is ${name}`);
	}
}

// Call the Closure
introduction('Rebecca','USA');
introduction('Billy','Canada');

// Create a Closure with Arrow Syntax and call it directly:
((name: string, country?:string) => {
	if (country){
		console.log(`Hello, my name is ${name} from ${country}`);
	} else {
		console.log(`Hello, my name ist ${name}`);
	}
})('Peggy','USA');
