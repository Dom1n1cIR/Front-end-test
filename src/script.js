// Task 1 - palindrome

function isPalindrome(str) {
    const clean = (str) => str.toLowerCase().replace(/[\W_]/g, '');
    const cleanStr = clean(str);
    const reverseStr = cleanStr.split('').reverse().join('');
    return reverseStr === cleanStr;
}
// console.log('isPalindrome', isPalindrome('Rotator'));

// Task 2 - build a page that holds an image container, etc.

// Task 4 - array manipulation.

const people = [
    {
        name: "Bob",
        age: 29
    },
    {
        name: "Alice",
        age: 42,
    },
    {
        name: "Greg",
        age: 23
    },
    {
        name: "Jean",
        age: 50
    }
];
// code example end

// - 4.1	Order the people by age in decending order
const byAge = people.sort((a, b) => {
    if(a.age > b.age) {
        return 1
    } else {
        return -1
    }
})
// console.log('byAge', byAge)
// - 4.2	Order the people by name alphabetically A-Z
const byName = people.sort((a, b) => {
    if(a.name > b.name) {
        return 1
    } else {
        return -1
    }
})
// console.log('byName', byName)
// - 4.3	Pull just the ages into a new array

const ageOnly = people.map(({age}) => ({ age }));
// console.log(ageOnly);

module.exports = { isPalindrome }
