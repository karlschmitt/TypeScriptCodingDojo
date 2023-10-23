// Create a closure and call it directly
var result1 = ( function ( a:number, b:number) {
	return a + b;
})(100,200);

// Identifier for a closue
var sum = function( a:number, b:number) {
	return a + b;
};

// Call closure via identifier
var result2 = sum(100,200);

console.log(result1);
console.log(result2);

