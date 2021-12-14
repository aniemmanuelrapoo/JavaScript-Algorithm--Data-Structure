// radixSort Pseudocode
//1. Define a finction that accepts list of numbers
//2. figure out how many dogits the largest number has
//3. loop from k = 0 up to this largest number of digits
//4. for each iteration of the loop:
    //4.1. create buckets for each digits(0 to 9)
    //4.2. place each number in the corresponding bucket based on its kth digit.
//5. replace our existing array with values in our buckets, starting with 0 and going up to 9
//6. return list at the end!

//solution

// first bring in the helper methods
//method 1 getDigit
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//method 2 digitCount
function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//method 3 maxDigits
function mostDigits(nums){
     let maxDigits = 0;
     for (let i = 0; i < nums.length; i++){
         maxDigits = Math.max(maxDigits, digitCount(nums[i]));
     }
     return maxDigits;
 }


//radixSort code
function radixSort(nums){
   let maxDigitCount = mostDigits(nums);
   for(let k = 0; k < maxDigitCount; k++){
       let digitBuckets = Array.from({length: 10}, () => []);
       for( let i = 0; i < nums.length; i++){
           let digit = getDigit(nums[i], k);
           digitBuckets[digit].push(nums[i]);
       }
       nums = [].concat(...digitBuckets);
   }
   return nums;
}
radixSort([23,345,6543,87,3456,8799]);