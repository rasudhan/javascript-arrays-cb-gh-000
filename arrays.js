var chocolateBars=["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
  var arr=[...array]
  arr.unshift(element)
  return arr
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}
