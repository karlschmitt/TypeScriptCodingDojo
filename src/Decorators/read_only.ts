class Company {
	@ReadOnly
	name:string = "TypeScript";
}

let comp = new Company();

comp.name = 'Kotlin'
console.log(comp.name);
