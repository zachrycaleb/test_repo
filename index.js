function yearOfBirth (age) {
  try{
    if (age <= 0) {
      throw new Error("Age can not be negative");
  	}
  }
  catch (e) {
    console.log(e.message);
  }
  return 2016 - age;
}
function whoAmI(name, age) {
  if (name == null ||  age == null || typeof age !== 'number') {
  	console.error("Arguments not valid");
  }
  else {
  	  var yob = yearOfBirth(age)
  	  console.log('Hi my name is ' + name + ' and I\'m ' + age + ' years old');
 	  console.log('I was born on ' + yob);
  }
}
whoAmI("Roberto", '36');

// Set 2
function jediName(firstName, lastName) {
  var firstThreeChars = lastName.substr(0,3);
  var firstTwoChars = firstName.substr(0,2);
  return firstThreeChars + firstTwoChars;
}

console.log(jediName('Roberto', 'Quezada') === 'QueRo');
