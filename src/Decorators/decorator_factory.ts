const allowlistOnly = (allowlist: string[]) => {
	  return (target: any, memberName: string) => {
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
}

class Person {
	  @allowlistOnly(["Claire", "Oliver"])
	    name: string = "Claire";
}

const person = new Person();
console.log(person.name);
person.name = "Peter";
console.log(person.name);
person.name = "Oliver";
console.log(person.name);

