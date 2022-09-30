console.log("ok");
/*
function example(parameter) {
  console.log(parameter); // Output = foo
}

const argument = "foo";

example(argument);

**[1]**

// Rest and Spread
// Array REST
function rest(a, b, c, ...other) {
  console.log(a, b, c, other);
}
rest(1, 2, 3, 4, 5, 6, 7);

//Array - Spread
function spread(a, b, c) {
  console.log(a, b, c);
}
arr = [1, 2, 3, 4, 5];

spread(...arr);

//with object
let student = {
  name: "mayank",
  job: "pata nhi",
  salary: 150,
};
//Object - Rest
const { job, ...rest1 } = student;
console.log(job, rest1);

//object - Spread
let newStudent = {
  ...student,
  job: "pata chl jayega",
};
console.log(newStudent);
----------------------------------------------------------------------
**[2]**

// CallBAck
const data = [{ name: "a" }, { name: "b" }, { name: "c" }];
function getData() {
  setTimeout(() => {
    let otp = "";
    data.forEach((d, i) => {
      otp += `<li>${d.name}</li>`;
    });
    document.body.innerHTML = otp;
  }, 1000);
}
getData();
function addData(add, callback) {
  setTimeout(() => {
    data.push(add);
    callback();
  }, 1000);
}
addData({ name: "newdata" }, getData);
-------------------------------------------------------------------
// Promises
const data = [{ name: "a" }, { name: "b" }, { name: "c" }];
function getData() {
  setTimeout(() => {
    let otp = "";
    data.forEach((d, i) => {
      otp += `<li>${d.name}</li>`;
    });
    document.body.innerHTML = otp;
  }, 1000);
}
getData();
function addData(add) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(add);
      let e = false;
      if (!e) {
        resolve();
      } else {
        reject("Rejected");
      }
    }, 2000);
  });
}
addData({ name: "newdata" })
  .then(getData)
  .catch((e) => console.log("nope rejected"));
-------------------------------------------------------------------
Async Await

const data = [{ name: "a" }, { name: "b" }, { name: "c" }];
function getData() {
  setTimeout(() => {
    let otp = "";
    data.forEach((d, i) => {
      otp += `<li>${d.name}</li>`;
    });
    document.body.innerHTML = otp;
  }, 1000);
}
// getData();
function addData(add) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(add);
      let e = false;
      if (!e) {
        resolve();
      } else {
        reject("Rejected");
      }
    }, 2000);
  });
}
async function start() {
  await addData({ name: "newData" });
  getData();
}
start();
----------------------------------------------------------------------------------
**[3]**

// Closure - A closure is a function having access to the parent scope, even after the parent function has closed.
let sum = function (a) {
  console.log(a);
  let c = 4;
  return function (b) {
    console.log(a + b + c);
  };
};
let res = sum(2);
res(4);
// function retains the value{here a and c} even called second time{which returned by parent function} is known as closure
// Lexical Scope - a and c is available for returned fuction this sope is called lexical scope
// Second Example =>
let sum2 = function (a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    },
  };
};
let res1 = sum2(7, 8, 1);
console.log(res1.getSumTwo());
console.log(res1.getSumThree());
----------------------------------------------------------------------------------
**[4]**
//Call
let userDetail = {
  name: "Mayank",
  job: "Software Eng",
  // person: function () {
  //   console.log(this.name);
  // },
};

function person() {
  console.log(this.name);
}
// ^^ function need not to be in object, it can be outside
let userDetail1 = {
  name: "Shukla",
  job: "Software Eng",
};

// userDetail.person.call(userDetail1);
person.call(userDetail1); //call when fuction is outside object

//Apply - same as call but multiple arguments can be passed as array list
function person1(a, b) {
  console.log(this.name, a, b);
}
person1.apply(userDetail1, ["v1", "v2"]);

//Bind - Create a copy of function and use it that
let newbind = person.bind(userDetail);
newbind();
---------------------------------------------------------------
**[5]**
-> Higher order function.js
---------------------------------------------------------------
**[6]*****
undefined - Variable create but no value assigned
Not defined - Variable not created but trying to access it.
(obj!==undefined || obj!==null)?obj.name:"";
---------------------------------------------------------------
**[7]**
Prototype - Every object in JavaScript has a built-in property, which is called its prototype. 
const obj = {
  name: "mayank",
  roll: 12,
  getName: function () {
    return this.name;
  },
};
const obj1 = {
  name: "shukla",
  __proto__: obj,
};
console.log(obj1.getName()); // getName function accessible with obj1 using __proto__ value
---------------------------------------------------------------
**[8]**
Map: stores unique key value pair just like object, but with object we can not use forEach and other iterable function but with Map we can 
const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log(map1.get('a'));

weakSet, weakMap = only accept object and does not allows iteration, many functions will not be available in prototype

*/
