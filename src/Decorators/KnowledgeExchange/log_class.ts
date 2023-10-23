function logClass(target: any) {

	// save a reference to the original constructor
	var original = target;

	// a utility function to generate instances of a class
	function construct(constructor, args) {
		var c : any = function () {
			console.log("Object: " + this);
			console.log("Attributes: "+args);
			return constructor.apply(this, args);
		}
		// c.prototype = constructor.prototype;
		// console.log("new instance of a class");
		let c1 = new c();
		console.log(c1);
		return c1;
	}


	// the new constructor behaviour
	var f : any = function (...args) {
		console.log("Original class: " + original.name);
		console.log("Original args: " + args);
		return construct(original, args);
	}

	// copy prototype so intanceof operator still works
	f.prototype = original.prototype;
	
	f.prototype.surnamme = "Sparrow";

	// return new constructor (will override original)
	console.log("New closure will overide origial constructor: " + f );
	return f;
}

@logClass
class Person { 

	public name: string;
	public surname: string;

	constructor(name : string, surname : string) { 
		this.name = name;
		this.surname = surname;
	}
}

var p = new Person("James", "Bond");

