/*

When an operator’s value is NULL, the typeof returned by the unary operator is: Object

typeof(NaN) => Number
 
What will be the output of the following code snippet?

var a = Math.max();
var b = Math.min();
print(a);
print(b);

=> -infinity infinity
{Math.max() < Math.min(); // true}
The Math.max() method returns -Infinity by default and the Math.min() method returns Infinity value by default when passed without any parameters.
In Javascript Math.max() is lesser than Math.min() because Math.max() returns -Infinity and Math.min() returns Infinity.

Object Serialization is the process in which an object or data structure is translated into a format suitable for transferral over a network, or storage.

The JSON.stringify() function is used to convert a JSON object into string format.

In general for objects in Javascript, the objects are associated with 3 basic attributes, Class, prototype, object's extensible flag(object extensible means whether a new property can be added to object ).


 */
