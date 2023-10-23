const defaultGun = (gun: Function) => class extends Gun {
	ammo = 10
}

@defaultGun
class Gun {
	ammo:number = 5;
}

const gun = new Gun();

console.log(gun.ammo)

