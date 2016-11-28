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
  var yob = yearOfBirth(age)
  console.log('Hi my name is ' + name + ' and I\'m ' + age + ' years old');
  console.log('I was born on ' + yob);
}
whoAmI('Roberto', 36);