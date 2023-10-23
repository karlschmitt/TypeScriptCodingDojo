function simpleDecorator(constructor:Function) {
	console.log("---hi I am a decorator ---");
	console.log(constructor);
	constructor.prototype.anno = 1848;
	constructor.prototype.foo();
	return constructor;
}

@simpleDecorator
class A {
	anno = 1747;

	foo () {
		console.log('foo');
	}
}

const a = new A();
console.log(a.anno);

