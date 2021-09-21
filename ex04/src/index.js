function localScope() {
  var myVariable = "I am here!";
  console.log("localScope:" , myVariable);
}

if (typeof myVariable != "undefined") {
  console.log("outside localScope", myVariable);
} else {
  console.log("outside localScope UNDEFINED!!!");
}

localScope();
module.exports = localScope;
