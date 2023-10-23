import { v4 as uuidv4 } from 'uuid';

function TimeStamp<T extends { new(...args: any[]): {}}>(target: T) {
	return class extends target {
		uuid = uuidv4();
		created = new Date().toLocaleString("en-US");

		hello(msg: string) { console.log(`Extended ${msg}`); }
	}
}

@TimeStamp
class ClockIn {
	// methods and properties
}

@TimeStamp
class ClockOut {
	     // methods and properties
}
