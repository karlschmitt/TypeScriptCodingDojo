// The decorator factory
const change = value => {
	// The factory will return a new handler
	return (target,prop) => {
		// We replace the old value with a new one
		Object.defineProperty(target,prop,{value})
	}
}

class Gun {
	@change(20)
	ammo = 10
}

const gun = new Gun();
console.log(gun.ammo);

