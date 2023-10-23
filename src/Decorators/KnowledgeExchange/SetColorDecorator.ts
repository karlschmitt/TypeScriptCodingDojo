function SetColorDecorator(constructor: Function) {
	console.log("first class decorator");
	return class extends Car {
		constructor() {
			super();
			this.color = "red";
		}
	};
}

@SetColorDecorator
class Car {
	public isFixed: boolean;
	public color: "red" | "blue";
	constructor() {
		console.log("calling class constructor");
		this.isFixed = true;
	}
}

const car = new Car();

console.log({
	isFixed: car.isFixed,
	color: car.color,
});

