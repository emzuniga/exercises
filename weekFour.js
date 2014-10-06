// Exercise 1.1//
var me = {
	name: "Elaine",
	age: 33
};

console.log("My name is " + me.name + " and I am " + me.age + " years old.");

//Excercise 1.2//

me.age +=1;
console.log ("My name is " + me.name + " and I am " + me.age + " years old.");

//Exercise 1.3//

me.introduce = function () { console.log("My name is " + this.name + " and I am " + this.age + " years old."); };
me.introduce();

//Exercise 2.1//
var favoriteBooks = [
  {
    title: "East of Eden",
    author: "John Steinbeck"
  },
  {
    title: "Kafka on the Shore",
    author: "Haruki Murakami"
  },
  {
    title: "Possible Side Effects",
    author: "Augusten Burroughs"
  }
];

console.table(favoriteBooks);