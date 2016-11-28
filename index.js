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
whoAmI("Roberto", 36);

// Set 2
function jediName(firstName, lastName) {
  var firstThreeChars = lastName.substr(0,3);
  var firstTwoChars = firstName.substr(0,2);
  return firstThreeChars + firstTwoChars;
}
console.log(jediName('Roberto', 'Quezada') === 'QueRo');
//If num is zero it should log out 'Staying home'.
function beyond (num) {
  if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
    return "And beyond";
  }
  else if (num == 0) {
    return "Staying home"
  }
  else if (isFinite(num) && num < 0) {
    return "To negative infinity";
  }
  else if (isFinite(num)) {
    return "To infinity";
  }
}
console.log(beyond(Infinity))

function getChar(word) {
  var table = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
  }
  var firstLetter = word[0];
  var character = ' ';
  for (var key in table) {
    if (key === firstLetter) {
      var position = table[key] - 1;
      character = word.substr(position, 1);
    }
  }
  return character;
}

// input is a string space separated (a phrase)
function decode(message) {
  var words = message.split(' ');

  return words.map(function(word) { // ['l', 'c', 'd', 'f'].join()
    return getChar(word);
  }).join('');
}

console.log(getChar('cycle') === 'l');
console.log(decode('craft block argon meter bells brown croon droop'));
