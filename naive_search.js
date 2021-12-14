//Pseudocode for naive Search
//1. loop over the longer string
//2. loop over the shorter string
//3. if the characters dont match, break out of the inner loop
//4. if the characters do match, keep going
//5. if yu complete the inner loop and find a match, increment the count of matches
//6. return the count


//solution

function naiveSearch(long, short){
    var count = 0;
    for (var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]) break;
            if (j === short.length -1) count++;
        }
    }
    return count;
}
naiveSearch("lorie loled", "lol")