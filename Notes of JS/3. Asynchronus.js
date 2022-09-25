/*
your program ask data from:-
a.com it will take 12sec; b.com it will take 14sec and c.com it will only take 2sec.
so in synchronus programming fetching data from c.com will happen after 26sec.

Also as we want data from external entity then our local processor will sit ideal and will wait for response and next task will happen once previous completes, in above e.g nothing will happen for total 28sec and it will hault other DOM process for 28sec- so to overcome this we use asynchronus

**WAYS TO WRITE ASYNCHRONUS CODE IN JS
-> CALLBACKS
-> PROMISES
-> ASYNC/AWAIT

AJAX - Asynchronus javascript XMl - it is used to get data asynchronously
@- AJAX uses XMLHttpRequest object (also called xhr object) to achieve this
@- Modern website uses JSON instead XML for data transfer
@- Data can be transferred in any format and protocol (not always https necessarily)

== AJAX uses and code ==
let fetchBtn = document.getElementById("fetchbtn")
fetchBtn.addEventListener("click",buttonClickHandler)
function buttonclickHandler(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','file.txt',true); //GET - to get data from file.txt or any url *true - for aync * false for sync
  xhr.onprogress = ()=> console.log("on progress")
  xhr.onload = ()=>console.log("load this fnctn once data is loaded")
  xhr.send(); // initiate xhr
}
*************FOR POST REQUEST***************
function buttonclickHandler(){
  const xhr = new XMLHttpRequest();
  xhr.open('POST',"URL where post request can be send",true);
  xhr.getResponseHeader("content-type","application/json");
  param : `{a:1,b:2}`
  xhr.send(param);
}
-------------------------------------------------------------------------------------------------------
[Callback] function: a function which contains another function as argument for calling(invoking) it later according to the requirement of our program are callback function. 
-> in asynchronus any two function gets completed early or later i.e. does not depends on order so in such a case if one function is dependent on other but if they are separated(called outside) then any of them can run based on the server response so we want one function to run only once the previous function completes in Asynchronosu environement- we use call back i.e. send that function as argument in other function
--------------------------------------------------------------------------------------------------------
[Promises] - They are substitute of Callback to execute asynchronous programming

let myPromise = new Promise(function(myResolve, myReject) {
  myResolve(); // when successful
  myReject();  // when error
});

myPromise.then(
  function(value) { code if successful  },
  function(error) {  code if some error  }
);
OR
=>myPromise.then(fn1).catch(fn2)
myPromise - is a function which returns Promise
if promise is successfull then do function fn1 task and if rejected then do function fn2 task
-------------------------------------------------------------------------------------
[FetchAPI] - an alternative of AJAX - xhr object
function getData(){
  url=""
  fetch(url).then((response)=>{return response.text() OR use"response.JSON()-to get data in json object" }).then((data)=>{console.log(data)})
}
getData() //calling function
^^ it uses then twice bcs first one returns another promise - first .then to check if we got response or not and second .then is used what to do with data after getting first successful response 
*************FOR POST REQUEST***************
function postData(){
  url=""
  data="{a:1,b:2}"
  params={method:'post',
  headers:{'content-Type':'application/json'},
  body: data
}
fetch(url,params).then(response=> response.json()).then(data => console.log(data))
}
-------------------------------------------------------------------------------------
[ASYNC - AWAIT ]- In fetchAPI we were using two then so to use another method we use Async await with FetchAPI

async ()=> return "ok";  // Adding async to function means now it will return promise.

async function name(){
  const response = await fetch('url') // await - means asynchronously wait for the response.
  const user = await response.json(); // asynchronously wait.
  return user;
}
name().then(data=>console.log(data))
----------------------------------------------------------------------------------------
Promises came to overcome callbacks
Async -await came to overcome 2 then in fetch API
*/
