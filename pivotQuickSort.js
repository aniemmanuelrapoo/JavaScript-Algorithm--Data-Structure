// Pivot Pseudocode
//1. it will help to accept three argument: an array, a start index, and an end index(these can default to 0 and the array length minus 1, respectivly)
//2. grab the pivot from the start of the array
//3. store the current pivot index in a variable(this will keep track of where the pivot should end up)
//4. loop through the array from the start until the end 
    //4.1. if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
//5. Swap the starting element(i.e the pivot) with the pivot index
//6. Return the pivot index

//sloution 

// function pivot(arr, start=0, end=arr.length+1){
//     function swap(array, i, j){
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     var pivot = arr[start];
//     var swapIdx = start;

//     for(var i = start +1; i < arr.length; i++){
//         if(pivot > arr[i]){
//           swapIdx++;
//           swap(arr, swapIdx, i)
//         }
//     }
//     swap(arr, start, swapIdx)
//     return swapIdx;
// }
// pivot([4,8,2,1,5,7,6,3]);

//es 2015 code
function pivot(arr, start = 0, end = arr.length -1){
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    //we are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++){
        if (pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    //swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}
pivot([4,8,2,1,5,7,6,3]);