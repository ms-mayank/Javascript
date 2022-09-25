/*
1.Object Literal. In plain English, an object literal is a comma-separated list of name-value pairs inside of curly braces.

2.Object prototype or prototype: Every object in JavaScript has a built-in property, which is called its prototype.

3.OOPS in js:
*******************************************************unlike other Object Oriented Language there are no classes in JavaScript we have only Object. To be more precise, JavaScript is a prototype based Object Oriented Language, which means it doesn’t have classes, rather it defines behaviors using a constructor function and then reuse it using the prototype. 
class Employee{
  constructor(a,b,c){
    this.a =;
    this.b =;
    this.c =;
  }
  slogan(){
    return "something"
  }

}
x = new Employee("a","b","c")
console.log(x)

-> inheritance- yes
-> encapsulation - locking machenism {use let to again define variable inside class (class scope will not allow it use outside the block but no as such feature of private keyword in js)}
-> abstraction - hiding the process - use function no need to know the process
-> polymorphismm - same function name but different signatures being used;  example, $square->area() will return the area of a square, but $triangle->area() might return the area of a triangle
*/
