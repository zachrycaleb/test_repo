function yearOfBirth (age) {
  return 2016 - age
}	
function whoAmI(name, age) {
  var yob = yearOfBirth(age)
  console.log('Hi my name is ' + name + ' and I\'m ' + age + ' years old');
  console.log('I was born on ' + yob);
}
whoAmI('Roberto', 36);