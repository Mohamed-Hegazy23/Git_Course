console.log(ages);
var names = "fouzia";
var ages = 20;
var data = `She name is ${names} ${ages}`;
var details = `Hi how are you,i want tell you about my life
i love someone very much`;
var rand1to10 = Math.floor(Math.random() * 10 + 1);
var a = "20";
var b = (a = 30);
document.write(a + b);

function YES() {
  alert("Name Is " + names + " Ages Is " + ages);
}
function Yes() {
  alert(data);
  document.write(`details is>> ${details}`);
}
function NO() {
  alert(`Why ${rand1to10}`);
  document.querySelector("h1").style.color = "green";
}
function welcome() {
  var mo = document.getElementById("name").value;
  alert(`Why ${mo}`);
  var mo = (document.getElementById("name").value = "merwfo");
  alert(`Why merwfo`);
}

function changeText() {
  var span = document.getElementById("output");

  var textBox = document.getElementById("textbox");

  textbox.style.fontSize = "20pt";
  textbox.style.fontFamily = "Comic Sans";
}
// confirm("How are you ?");
// prompt("now i learn javascript");
////////Arrow/////////
var arrow = function () {
  return "Hallow";
};
console.log(arrow());

var arrow1 = () => "hallow";
console.log(arrow1());

var number = [10, 30, 8, 75, 95];
console.log(number);

var newNumber = number.map(test); //map

function test(num) {
  return num * 10;
}
console.log(newNumber);
///////////Scope////////////////
function calculateTotalAmount(vip) {
  var amount = 0;
  if (vip) {
    var amount = 1;
  }
  // first amount is 1
  {
    var amount = 100; // first amount is 100
    var amount = 1000;
  } //first amount is 1000}// more crazy

  return amount;
}
console.log(calculateTotalAmount(true));
////////////////////Set/////
let data1 = [32, 85, 2, 3, 2, 35, 2, 5, 2];
let UniqueData = new Set(data1);
console.log(data1);
console.log(UniqueData);

function fun() {
  var name = document.getElementById("indexin").value;
  var name1 = document.getElementById("indexin2").value;
  alert(`hi ${name},how are you ${name1}`);
  var name = (document.getElementById("indexin").value = "");
  var name1 = (document.getElementById("indexin2").value = " ");
}
// ////////////////////////
var string1 = "elmoled147@gmail.com";
var string2 = "0101-0752-506";
let string =
  "My name is mohamed ,i leave in a small vilage ,i love beauty girl,his name is fouzia ,Fouzia leave next me";
let regex = /fouzia/i;
let text = "Zeze";
var mat = /^\d{4}-\d{4}-\d{3}$/;
var st1 = /[a-zA-Z0-9]+@+(([a-zA-Z])+\.)+[a-zA-Z]{2,4}/;
console.log(string1.match(st1));
console.log(string2.match(mat));

var practice = "mod15abcdj nfwkAbc15  fjeo51ABCewdkj15 15ewnabCjm152 ek5 ";
var pra = /([a-zA-Z]+[0-9]+[a-zA-Z]+[0-9])/;
var pra0 = /a/g;
console.log(practice.match(pra0));

// var string0="";
// var stringrex=//;
var num = 0;
let array = [20, 25, 6, 8, 4, 97, 4, 9, 7, 2];

for (let index = 0; index < array.length; index++) {
  if (array[index] == 97) {
    num = index;
    break; // Break the loop once we find 97
  }
  console.log(array[index]); // This will log all elements until 97 is found
}
console.log(num+5);
console.log("stooooooooop thereeeeeeeeeeeeeeee")
console.log("2"*3);
console.log("5.0" == 5) ;
