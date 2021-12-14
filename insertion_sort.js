//Insertion Sort Pseudocode
//1. start by picking the second element in the array
//2. now compare the second element with the one before it and swap if necessary.
//3. continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e. the left side) to place the element in the correct place.
//4. repeat untill the array is sorted.


//solution

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
insertionSort([2,5,7,3,6,9]);