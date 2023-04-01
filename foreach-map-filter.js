/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
const myArray = [1,2,3,4,5,6,7,8,9,10];
const doubleArray = doubleValues(myArray);
console.log(doubleArray); // [2,4,6,8,10,12,14,16,18,20]

function doubleValues(arr){
    return arr.map(function(val){
        return val * 2;
    });
    
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
const evenArray = onlyEvenValues(myArray);
console.log(evenArray); // Output: [2, 4]

function onlyEvenValues(arr){
    return arr.filter(value => value % 2 === 0);
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    return arr.map(str => str[0] + str[str.length - 1])
}

const myOtherArray = ['Cameron', 'Rules', 'The', 'World'];
const firstAndLastArray = showFirstAndLast(myOtherArray);
console.log(firstAndLastArray); // Output: ['Cn', 'Rs', 'Te', 'Wd']

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    return arr.map(obj => ({...obj, [key]: value}));
}

const myObjectArray = [{name: 'Cameron', age :32}, {name: 'Gen', age: 29}, {name: 'Daz', age: 32}, {name: 'Ender', age: 40}];
const newObjectArray = addKeyAndValue(myObjectArray, 'isMyFriend', true);
console.log(newObjectArray); // Output: 
// [{name: 'Cameron', age :32, isMyFriend: true}, {name: 'Gen', age: 29, isMyFriend: true}, {name: 'Daz', age: 32, isMyFriend: true}, {name: 'Ender', age: 40, isMyFriend: true}]

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const counts = {};
    for (let i = 0; i < str. length; i++) {
        const char = str[i].toLowerCase();
        if (vowels.includes(char)) {
            if (counts[char]) {
                counts[char]++;
            } else {
                counts[char] = 1;
            }
        }
   
}
return counts;
}

const myString = 'I am awesome and so are you';
const counts = vowelCount(myString);
console.log(counts); // Output: {i: 1, a: 4, e: 3, o: 3, u: 1}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map(value => value * 2);
}

const myDoubleArray = [1,2,3,4,5,6,7,8,9,10];
const myNewDoubleArray = doubleValuesWithMap(myDoubleArray);
console.log(myNewDoubleArray); // Output: [2,4,6,8,10,12,14,16,18,20]

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map((value, index) => value * index);
    }

    const myIndexArray = [1,2,3,4,5,6,7,8,9,10];
    const myNewIndexArray = valTimesIndex(myIndexArray);
    console.log(myNewIndexArray); // Output: [0,2,6,12,20,30,42,56,72,90]

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(obj => obj[key]);
}

const myObjectArray2 = [{name: 'Cameron', age :32}, {name: 'Gen', age: 29}, {name: 'Daz', age: 32}, {name: 'Ender', age: 40}];
const newObjectArray2 = extractKey(myObjectArray2, 'age');
console.log(newObjectArray2); // Output: [32, 29, 32, 40]

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(obj => `${obj.first} ${obj.last}`);
    }

    const myObjectArray3 = [{first: 'Cameron', last: 'Ebanks'}, {first: 'Gen', last: 'Ebanks'}, {first: 'Daz', last: 'Hobbs'}, {first: 'Ender', last: 'Rozell'}];
    const newObjectArray3 = extractFullName(myObjectArray3);
    console.log(newObjectArray3); // Output: ['Cameron Ebanks', 'Gen Ebanks', 'Daz Hobbs', 'Ender Rozell']

/*Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(obj => obj.hasOwnProperty(key));
}

const myObjectArray4 = [{first: 'Cameron', last: 'Ebanks'}, {first: 'Gen', last: 'Ebanks'}, {first: 'Daz', last: 'Hobbs'}, {first: 'Ender'}];
const newObjectArray4 = filterByValue(myObjectArray4, 'last');
console.log(newObjectArray4); // Output: [{first: 'Cameron', last: 'Ebanks'}, {first: 'Gen', last: 'Ebanks'}, {first: 'Daz', last: 'Hobbs'}]


/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    return arr.find(element => element === searchValue);
}

const myEleArray = [1,2,3,4,5,6,7,8,9,10];
const myNewEleArray = find(myEleArray, 3);
console.log(myNewEleArray); // Output: 3

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    const foundObj = arr.find(obj => obj[key] === searchValue);
    return foundObj ? foundObj[key] : undefined;
}

const myObjectArray5 = [{first: 'Cameron', last: 'Ebanks'}, {first: 'Gen', last: 'Ebanks'}, {first: 'Daz', last: 'Hobbs'}, {first: 'Ender', last: 'Rozell'}];
const newObjectArray5 = findInObj(myObjectArray5, 'last', 'Ebanks');
console.log(newObjectArray5); // Output: Ebanks

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowercaseStr = str.toLowerCase();
    return lowercaseStr.split('').filter(char => !vowels.includes(char)).join('');
}

const myString2 = 'Cameron Rules';
const newString2 = removeVowels(myString2);
console.log(newString2); // Output: cmrn rls

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0).map(num => num * 2);
}

const myNumArray = [1,2,3,4,5,6,7,8,9,10];
const newNumArray = doubleOddNumbers(myNumArray);
console.log(newNumArray); // Output: [2,6,10]
