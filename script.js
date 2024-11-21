//1
let arr = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}
//2
var firstName = 'Harry';
var house = 'Gryffindor';
console.log(`Welcome, ${firstName} of ${house}!`);

//3
var characterName = 'Hermione';
console.log(characterName.toLowerCase()); 
console.log(characterName.toUpperCase()); 

//4
var spell = ' Expelliarmus ';
var trimmedSpell = spell.trim();
console.log(trimmedSpell);

//5
var quote = 'I solemnly swear that I am up to no good';
var swear = quote.slice(11, 16);
console.log(swear);

//6
var firstName = 'Ron';
var lastName = 'Weasley';
let combined = firstName.concat(' ', lastName);
console.log(combined);

//7
var sentence = 'Draco is a good wizard';
let change = sentence.replace('good', 'bad');
console.log(change);

//8
let  houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
console.log(houses); 
houses.pop();
console.log(houses); 

//9
let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

//10
let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
let prof = professors.slice(1, 3);
console.log(prof);

//11
let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1, 2);
console.log(students);

//12
var phrase = ' Mischief Managed ';
let managed = phrase.trim().toLowerCase() + ' - Harry';
console.log(managed);

//13
let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);

//14
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let end = message.slice(11, 19).concat(' Castle');
console.log(end);