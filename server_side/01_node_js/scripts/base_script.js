function change_p() {
  var a_p = document.getElementById("a_p");
  a_p.innerHTML = "A paragraph has been changed!";
  a_p.style.border = "1px solid black";
}

function say_something(something) {
	alert("The value passed to this function was: " + something);
	console.log("say_something called with: " + something);
}

function person_stuff() {
  //console.log(person.fullName);
  //console.log("person.fullName(): " + person.fullName());
  //console.log("name_maker(person): " + name_maker(person));
  //console.log("name_maker(person2): " + name_maker(person2));
  console.log("person: " + person);
  console.log("people: " + people);
  
  for(var i = 0; i < people.length; ++i) {
	//it's complicated...
    console.log(`people[name_maker(${i})]: ${name_maker(people[i])}`);
  }
}

function name_maker(whom) {
    return whom.firstName + " " + whom.lastName;
}

var person = {
  firstName: "Fus",
  lastName : "Ro",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

var person2 = {
  firstName: "Ro",
  lastName : "Dah",
  id       : 6566,
};

var people = [person, person2];