var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function f(C) {
    console.log('apply decorator');
    C.prototype.anno = 1848;
    return C;
}
var A = /** @class */ (function () {
    function A() {
        this.anno = 1749;
    }
    A = __decorate([
        f
    ], A);
    return A;
}());
// output: apply decorator
var a = new A();
console.log(a.anno);
