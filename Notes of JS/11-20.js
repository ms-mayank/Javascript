"Use strict";
/*
window object:
console.log(window)
few e.g are alert, prompt and others
window object can be written as window.alert() or only alert()

document is part of window object 
window.document.innerheight; or document.innerheight;
window have location:
location.href
location.href("//google.com")
location.toString(); // will return current href in string
window.history
*/

/*
document.all; // will give all the tags in HTML
document.body; // return body tag with its child tag
document.form; // returns all forms

**forEach function does not works on document.

*********************************
use forEach() fuction with document as:

a=document.all;
Array.from(a).forEach(fuction(element){
  console.log(element)
})
*******************************
document.links; //gives all the links in webpage
document.links.href;//gives href of all the links

*/
/*

EVENT & EVENT OBJECT

Events are like: click, mouseover, dblclick, mouseenter, mouseleave 
Event object is => e -> define in the fuction; it give element {e.target, e.target.className, e.target.id, e.target.classList, e.target.offsetX}
************************
.addEventListener("eventtype",function(e){})
************************

document.getElementById('someid').addEventListener('click',function(e){
  console.log("Do something on clicking whose Id is 'someid'",e)
  let variable= Array.from(e.target.classList); // all class in list form then in array
  //e.target.className - will give class name
  //e.preventDefault(); => disables button load event 
})

*/
