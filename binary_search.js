//Binary Search Pseudocode
//1. this function accepts a sorted array and a value
//2. create a left pointer at the start of the array, and a right pointer at the end of the array
//3. while the left pointer comes before the right pointer:
    //3.1 create a pointer in the middle
    //3.2 if you find the value you want, return the index
    //3.3 if the  value is to small, move the left pointerup
    //3.4 if the value is too large, move the right pointer down
//4. if you never find the value, return -1
 

//solution

// function binarySearch(arr, elem){
//     var start = 0;
//     var end = arr.length -1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end){
//         if(elem < arr[middle]){
//             end = middle - 1;
//         }else{
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if (arr[middle] === elem){
//         return middle
//     }
//     return -1;
// }

// reduced version but the same thing
function binarySearch(arr, elem){
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end){
        if(elem < arr[middle])end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1
}
binarySearch([2,5,6,9,13,15,28,30], 28)