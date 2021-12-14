//BubbleSort Pseudocode
//1. start looping from the end of the array towards the beginning with a variabe called i
//2. start an inner loop with a variable called j from the beginning until i - 1
//3. if arr[j] is greater than arr[j+1], swap those two values!
//4. return the sorted array


//solution

// // normal sorting 
// function bubbleSort(arr){
    //var noSwaps
//     for(var i = 0; i < arr.length; i++){
           //noSwaps = true;
//         for(var j = 0; j < arr.length; j++){
               //console.log(arr, arr[j], arr[j+1]);
//             if(arr[j] > arr[j+1]){
//                 //SWAP 1
//                 //[arr[j], arr[j+1]] = [arr[j+1], arr[j]];

//                 //SWAP2
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;

                   //noSwaps = false;
//             }
//         }
            //if (noSwaps) break;
//     }
//     return arr;
// }
// bubbleSort([30, 27, 24, 5, 8, 6])


// bubble Sorting 
// function bubbleSort(arr){
    //var noSwaps
//     for(var i = arr.length; i > 0; i--){
           //noSwaps = true;
//         for(var j = 0; j < i - 1; j++){
//             console.log(arr, arr[j], arr[j+1]);
//             if(arr[j] > arr[j+1]){
//                 //SWAP 1
//                 //[arr[j], arr[j+1]] = [arr[j+1], arr[j]];

//                 //SWAP2
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;

                //noSwaps = false;
//             }
//         }
           //if (noSwaps) break;
//         console.log('one pass complete');
//     }
//     return arr;
// }
// bubbleSort([30, 27, 24, 5, 8, 6])



// using es 2015 
function bubbleSort(arr){
    var noSwaps
    const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);

                noSwaps = false;
            }
        }
        if (noSwaps) break;
        console.log('one pass complete');
    }
    return arr;
}
bubbleSort([30, 27, 24, 5, 8, 6])