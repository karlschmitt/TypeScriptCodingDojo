// Create a closure and call it directly!
(function (name: string ) {
	console.log(`Hello ${name}`);
})('Karl');

// Identifier for a closure
var sayHello = function (name: string) {
	console.log(`Hello ${name}`);
}
// Call closure via identifier
sayHello('Rudi');

