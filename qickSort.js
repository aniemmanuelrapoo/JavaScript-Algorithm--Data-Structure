//Quicksort Pseudocode
//1. call the pivot helper on the array
//2. when the helper returns to you the updataed pivot index recursively call the pivot helper on the subarray to the right of that index
//3. your base case occurs when you consider a subbarray with less than 2 elements


//solution

//first let bring our pivot code
function pivot(arr, start=0, end=arr.length+1){
    function swap(array, i, j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    var pivot = arr[start];
    var swapIdx = start;

    for(var i = start +1; i < arr.length; i++){
        if(pivot > arr[i]){
          swapIdx++;
          swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx;
}


//sort function
function quickSort(arr, left = 0, right = arr.length -1){
  if (left < right){
      let pivotIndex = pivot(arr, left, right)

      //left
      quickSort(arr, left, pivotIndex-1);

      //right
      quickSort(arr, pivotIndex+1, right);
  }
  return arr;
}
quickSort([4,6,9,1,2,5,3])