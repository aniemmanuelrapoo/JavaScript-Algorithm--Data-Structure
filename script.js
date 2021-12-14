// Frequency Counters code
//part 1: write a function called same, which accepts two Array. the function should return if every value in the array has its corresponding value squared in the second array. the frequency of values must be the same
//e.g same([1,2,3], [4,1,9]) is true
// same([1,2,3], [1,9]) is false
// solution

/*function same(arr1, arr2){
    if (arr1.length !== arr2.length) {
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1  
    }
    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1  
    }
    for (let key in frequencyCounter1){
        if(! (key ** 2 in frequencyCounter2)){
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
console.log(same([1,2,3], [1,4,9])) */



//part2: Anagrams- given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
//e.g validAnagram('aaz', 'zza') is false
//e.g validAnagram('rat', 'atr') is true
//solution

/*function validAnagram(fisrt, second){
    if (fisrt.length !== second.length){
        return false;
    }

    const lookup = {}

    for (let i = 0; i < fisrt.length; i++){
        let letter = fisrt[i];
        // if letter exits, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] =1
    }
    
    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        // cant find letter or letter is zero its not an Anagram
        if (! lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }
    return true;
}
console.log(validAnagram('rat', 'atr')); */



//MULTIPLE POINTERS
// part 1: write a function called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair dose not exit
//e.g sumZero([-3,-2,-1,0,1,2,3]) this is true [-3,3]
//e.g sumZero([-2,0,1,3]) this is undefined
//solution 

/*function sumZero(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if (sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right --;
        }else {
            left ++;
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]))*/

//part 2: implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. there can be negative numbers in the array, but it will always be sorted.
//e.g countUniqueValues([1,1,1,2]) returns 2
//e.g countUniqueValues([1,1,4,4,6,6,6,6]) returns 3
//solution

/*function countUniqueValues (arr){
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j =1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValues([1,1,3,3,4,4,5,5]))*/



//SLIDING WINDOW
//write a function called maxSubarraySum which accepts an array of intergers and a number called n. the function should calculate the maximum sum of n consecutive element in an array.
//e.g maxSubarraySum([1,2,5,2,8,1,5], 2) should return 10
//e.g maxSubarraySum([4,2,1,6], 1) should return 6
// solution

/*function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) */



// DIVIDE AND CONQUER
//part 1: given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found, return -1
//e.g search([1,2,3,4,5,6], 4) should return 3
//e.g search([1,2,3,4,5,6], 6) should return 5
// solution


//RECURSION
//fisrt recursion code to count down 

/*function countDown(){
    if (num <= 0){
        console.log('ALL DONE');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}*/


//second recursion code calculate sum range
/*function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1);
}*/


//third recursion code multiple range
/*function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}*/

//third recursion code collect all odd values in an array
// using helper method
/*function collectOddValues(arr){
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}*/

//third recursion code collect all odd values in an array
// using pure recursion
/*function collectOddValues(arr){
    let newArr = [];

    if (arr.length === 0){
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}*/