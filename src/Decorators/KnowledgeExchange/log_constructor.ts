function logConstructor(constructor: Function) {
	const ret = {
		constructor,
		extensible: Object.isExtensible(constructor),
		frozen: Object.isFrozen(constructor),
		sealed: Object.isSealed(constructor),
		values: Object.values(constructor),
		properties: Object.getOwnPropertyDescriptors(constructor),
		members: {}
	};
	for (const key of Object.getOwnPropertyNames(constructor.prototype)) {
		ret.members[key] = constructor.prototype[key];
	}

	console.log(`ClassDecoratorExample `, ret);
}

@logConstructor
class ClassDecoratorExample {
	constructor(x: number, y: number) {
		console.log(`ClassDecoratorExample(${x}, ${y})`);
	}
	method() {
		console.log(`method called`);
	}
}

new ClassDecoratorExample(3, 4).method()
