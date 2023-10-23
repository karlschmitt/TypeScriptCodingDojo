const addFuelToRocket = (target: Function) => {
	return class extends target {
		fuel = 100;
	}

}

@addFuelToRocket
class Rocket {}

// Now your Rocket class will have a fuel property with a default value of 100.

const rocket = new Rocket();
console.log((rocket).fuel);

