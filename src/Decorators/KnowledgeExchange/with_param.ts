function withParam(path: string) {
	console.log(`outer withParam ${path}`);
	return (target: Function) => {
		console.log(`inner withParam ${path}`);
	};
}

@withParam('first')
@withParam('middle')
@withParam('last')
class ExampleClass {
}
