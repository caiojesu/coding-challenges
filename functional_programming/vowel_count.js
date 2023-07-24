/// Return the number (count) of vowels in the given string.
/// We will consider a, e, i, o, u as vowels for this Kata (but not y).
/// The input string will only consist of lower case letters and/or spaces.

const countVowels = (vowels) => (word) => {
    const letters = [...word];
    return letters.filter(item => vowels.includes(item)).length;
  }
  
  const vowels = ["a", "e", "i", "o", "u"]
  
  const getCount = countVowels(vowels);
  console.log(getCount("abracadabra"));