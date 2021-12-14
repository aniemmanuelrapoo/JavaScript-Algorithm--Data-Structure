//Linear search pseudocode
//1. this function accepts an array and a value
//2. loop through the array and check if the current array element is equal to the value
//3. if it is, return the index at which the element is found
//4. if the value is never found, return -1


//solution

function arrOfValue(arr, val){
    for(var i=0; i<=arr.length; i++){
//         console.log(arr[i])
        if(arr[i] === val){
            return i;
        }
    }
    return -1
}
arrOfValue([1,2,3,3,5,6,8,8], 7);