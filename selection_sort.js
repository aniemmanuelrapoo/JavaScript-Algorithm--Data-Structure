//Selection Sort Pseudocode
//1. store the first element as the smallest value you've seen so far.
//2. compare this item to the next item in the array untill you find a smaller number.
//3. if a small number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
//4. if the "minimum" is not the value (index) you initially began with, swap the two value.
//5. Repeat this with the next element until the array is sorted


//solution

// function selectionSort(arr){
//     for(var i = 0; i < arr.length; i++){
//         var lowest = i;
//         for(var j = i+1; j < arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             console.log(i, lowest)
//             var temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }
// selectionSort([38,4,6,2,9,4,10]);


//es 2015

function selectionSort(arr){
    const swap = (arr, idx1, idx2) => {
   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
   for(let i = 0; i < arr.length; i++){
       let lowest = i;
       for(let j = i+1; j < arr.length; j++){
           if(arr[j] < arr[lowest]){
               lowest = j;
           }
       }
       if(i !== lowest)swap(arr, i, lowest);
   }
   return arr;
}
selectionSort([38,4,6,2,9,4,10]);