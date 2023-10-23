export class IceCreamComponent {
	@Emoji()
	flavor = 'vanilla';
}


// Property Decorator
function Emoji() {
	return function(target: Object, key: string | symbol) {

		let val = target[key];

		const getter = () =>  {
			return val;
		};
		const setter = (next) => {
			console.log('updating flavor...');
			val = `í½¦ ${next} í½¦`;
		};

		Object.defineProperty(target, key, {
			get: getter,
			set: setter,
			enumerable: true,
			configurable: true,
		});

	};
}

