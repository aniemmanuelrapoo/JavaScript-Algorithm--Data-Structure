class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    //enqueue = add to the very end
    //enqueue pseudocode
    //1. this function accepts some value
    //2. create a new node using that value passed to the function
    //3. if there are no nodes in the queue, set this node to be the first and last property of the queue
    //4. otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
    //5. increment the size of the queue by 1 and return

    enqueue(val){
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    
    //dequeue = remove from the beginning
    //dequeue pseudocode
    //1. if there is no first property, just return null
    //2. store the first property in a variable
    //3. see if the first is the same as the last(check if there is only 1 node). if so, set the first and last to be null
    //4. if there is more than 1 node, set the first property to be the next property of first
    //5. decrement the size by 1
    //6. return the value of the node dequeued

    dequeue(){
        if(!this.first) return null;
        var temp =this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

var queue =  new Queue();
 queue.enqueue("this");
 queue.enqueue("is");
 queue.enqueue("good");
 queue.enqueue("good1"); 