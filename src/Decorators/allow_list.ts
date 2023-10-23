const allowlist: string[] = ["Jon", "Jane"];

const allowlistOnly = (target: any, memberName: string) => {
	  let currentValue: any = target[memberName];

	    Object.defineProperty(target, memberName, {
		        set: (newValue: any) => {
				      if (!allowlist.includes(newValue)) {
					              return;
				      }
				      currentValue = newValue;
		        },
		        get: () => currentValue
	   });
};

class Person {
	  @allowlistOnly
	    name: string = "Jon";
}

const person = new Person();
console.log(person.name);

person.name = "Peter";
console.log(person.name);

person.name = "Jane";
console.log(person.name);

