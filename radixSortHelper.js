//getDigit(num,place)-returns the digit in num at the given place value
//e.g getDigit(12345, 0):  = 5
//getDigit(12345, 1):  = 4
//getDigit(12345, 2):  = 3
//getDigit(12345, 3):  = 2
//getDigit(12345, 4):  = 1

//solution
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


// digitCount(num) - returns the number of digits in num
//e.g digitCount(1); = 1
//digitCount(23); = 2
//digitCount(134); = 3

//solution
function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}


//mostDigits(nums) - given an array of numbers, return the number of digits in the largest number in the list
//e.g mostDigits([1234, 56, 7]); = 4
 //mostDigits([1, 4, 11111, 8]); = 5
 //mostDigits([65, 31, 73, 4]); = 2

 //solution
 function mostDigits(nums){
     let maxDigits = 0;
     for (let i = 0; i < nums.length; i++){
         maxDigits = Math.max(maxDigits, digitCount(nums[i]));
     }
     return maxDigits;
 }