const printMemberName = (target: any, memberName: string) => {
	  console.log(memberName);
};

class Person {
	  @printMemberName
	    name: string = "Jon";
}

