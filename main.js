// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = array => {
    let sub = [array[array.length-1]]  //initialize final array of numbers with last num in it. 
    for (let i = array.length-2; i>=0; i -= 2) {   // loop through array by taking 2 steps from right to left of arr.
      if (array[i]*2 > 9) {             // check for condition
        let prod = array[i]*2 - 9         // if true push num after subtracting 9 from it in our sub array
        sub.push(prod)
      } else if (array[i]*2 < 9) {      // if false push without subtracting.
        sub.push(array[i]*2)
      }
    };
    for (let i = array.length-3; i>=0; i -= 2) {  //loop starting from 3rd-last num bcz last num already in sub
      sub.push(array[i])                          // and take two steps for remaining nums.
    };
    var sum = 0;
    for (let i = 0; i < sub.length; i++) {          // sum all the nums in sub arr.
          sum += sub[i];
    };
    if (sum%10===0) {                   // check whether sum%10 === 0 if it is return true
      return true
    } else {
      return false
    };
};
  //console.log(validateCred(invalid1))
  
const findvalidCards = nestarr => {
    let invalidCards = [];
    for (let k = 0; k < nestarr.length; k++){
      if (validateCred(nestarr[k]) === false){
        invalidCards.push(nestarr[k])
      }
     } return invalidCards;
  }
  
const idInvalidCardCompanies = invalid => {
    let companies = [];
    for (let l = 0; l < invalid.length; l++){
      let firstDigit = invalid[l][0];
      switch (firstDigit) {
        case 3: companies.push('Amex');
        break;
        case 4: companies.push('Visa');
        break;
        case 5: companies.push('Mastercard');
        break;
        case 6: companies.push('Discover');
        break;
        default: companies.push('Company not found');
      }
    } return companies.filter((a,b) => companies.indexOf(a) === b)
  }






