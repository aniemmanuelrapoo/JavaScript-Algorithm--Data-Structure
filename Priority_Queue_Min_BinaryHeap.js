//our Priority Queue psudocode
//1. write a min Binary Heap - lower number means higher priority
//2. Each Node has a val and a priority. use the priority to build the heap
//3. ENQUEUE method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority
//4. DEQUEUE method removes root element, returns it, and rearranges heap using priority

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    //INSERT PSEUDOCODE
    //1. push the value into the values property on the heap
    //2. Bubble the value up to its correct spot
    //BUBBLE UP
    //1. create a variable called index which is the length of the values property - 1;
    //2. create a variable called parentindex which is the floor of (index-1)/2
    //3. keep looping as long as the values element at the parentindex is less than the values element at the child index
        //3.1. swap the value of the values element at the parentindex with the value of the element property at the child index
        //3.2. set index to be the parentindex, and start over!
    
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    //Removing (extractMax)
    //1. swap the first value in the values property with the last one
    //2. pop from the values property, so you can return the value at the end
    //3. have the new root "sink down" to the correct spot
        //3.1. your parent index starts at 0 (the root)
        //3.2. find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
        //3.3. find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
        //3.4. if the left or right child is greater than the element... swap, if both left and right children are larger, swap with the largest child
        //3.5. the child index you swapped to now become the new parent index.
        //3.6. keep looping and swapping until neither child is larger than the element
        //3.6. return the old root!
    
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
 