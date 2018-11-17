//this defines an array chocolateBars
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//this defines a function which adds an element to an array and leaves the original array untouched
function addElementToBeginningOfArray(myArray, element){
  var newArray = [element, ...myArray]
  return newArray
}

//this defines a function which adds an element to an array and changes the original array
function destructivelyAddElementToBeginningOfArray(myArray, element){
  myArray.unshift(element)
  return myArray
}

function addElementToEndOfArray(myArray, element){
  var newArray = [...myArray, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(myArray, element){
  myArray.push(element)
  return myArray
}

function accessElementInArray(myArray, index){
  return myArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(myArray){
  var newArray = myArray.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(myArray){
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray(myArray){
  var newArray = myArray.slice(0, myArray.length - 1)
  return newArray
}
