/*
// Iterator
function func(value) {
  let nextIndex = 0;
  return {
    next: function () {
      if (nextIndex < value.length) {
        value: value[nextIndex++];
        done: false;
      } else {
        done: true;
      }
    },
  };
}

const arr = ["a", "b", "c"];
console.log(func.next().value); //a
console.log(func.next().value); //b
console.log(func.next().value); //c
// Generators

function numberGen() {
  let i = 0;
  // yield 1;
  // yield 2;
  // yield 3;
  // yield 4;
  while(true){
    yield i++;
  }
}
console.log(numberGen().next()); // 1
console.log(numberGen().next()); // 2
console.log(numberGen().next()); // 3
console.log(numberGen().next()); // 4 and so on

*/
