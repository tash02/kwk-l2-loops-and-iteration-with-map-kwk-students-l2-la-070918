// Code your solution in this file.
function lowerCaseStudentNames (students) {
  var newArray = students.map(function (val) { return val.toLowerCase(); });
  return newArray
}

// function nameToAttributes (students) {
//   var firstName = students.split(' ').slice(0, -1).join(' ');
//   var lastName = students.split(' ').slice(-1).join(' ');
//   return 
//   return lastName
// }
