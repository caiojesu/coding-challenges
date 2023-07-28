///Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
///Example
///createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
///The returned format must be correct in order to complete this challenge.
///Don't forget the space after the closing parentheses!

const createPhoneNumber = (formatNumber) => (numbers) =>  formatNumber(numbers);

const formatNumber = (numbers) => {
    if (numbers.length !== 10) {
        return "The phone number must be 10 digits long.";
    } else{
        return  `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
    }
}

const formatBrazilianNumber = (numbers) => {
    if (numbers.length !== 11) {
        return "The phone number must be 11 digits long.";
    } else{
        return  `(${numbers.slice(0, 2).join('')}) ${numbers.slice(2, 7).join('')}-${numbers.slice(7).join('')}`;
    }
}


console.log(createPhoneNumber(formatNumber)([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //(123) 456-7890
console.log(createPhoneNumber(formatBrazilianNumber)([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); //(12) 34567-8901