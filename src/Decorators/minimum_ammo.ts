
const minAmmo = ( ammo:number ) => (
	target: Object,
	prop: string,
	descriptor: PropertyDescriptor
) => {

	const original = descriptor.value;

	console.log(`${this.ammo} ${ammo}`);
	descriptor.value = function (...args) {

	        console.log(`${this.ammo} ${ammo}`);
		if (this.ammo >= ammo) {
			original.apply(this);
			console.log(`${this.ammo} ${ammo}`);
		} else {
			console.log('Not enough ammo!');
		}
	}

	return descriptor;
}

class Gun {

	ammo = 0

	@minAmmo(2)
	fireTwice() {
		console.log('Fireing in 3.. 2.. 1.. ');
	}
}

const gun = new Gun();
console.log(gun.ammo);





