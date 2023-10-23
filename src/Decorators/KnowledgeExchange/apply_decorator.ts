function f(C) {
	  console.log('apply decorator');
	  C.prototype.anno = 1848;
	    return C
}

@f
class A {
	anno = 1749;
}

// output: apply decorator
let a = new A();
console.log(a.anno);
