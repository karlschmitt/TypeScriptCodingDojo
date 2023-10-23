function simpleDecorator( b ) {
	console.log('--- hi I am a decorator ---');
	console.log(b);
}

@simpleDecorator
class B {}

const b = new B();

