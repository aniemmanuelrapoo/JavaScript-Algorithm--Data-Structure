class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //pushing = add a value to the top of the stack
    //pushing pseudocode
    //1. the function should accept a value
    //2. create a new node with that value
    //3. if there are no nodes in the stack, set the first and last property to be the newly created node
    //4. if there is at least one node, create a variable that stores the current first property on the stack
    //5. reset the first property to be the newly created node
    //6. set the next property on the node to be the previously created variable
    //7. increment the size of the stack by 1

    push(value){
        var newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    //pop pseudocode
    //1. if there are no node in the stack, return null
    //2. create a temporary variable to store the first property on the stack
    //3. if there is only 1 node, set the first and last property to be null
    //4. if there is more than one node, set the first property to be the next property on the current first
    //5. decrement the size by 1
    //6. return the value of the node removed.

    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

var stack =  new Stack();
 stack.push("this");
 stack.push("is");
 stack.push("good");
 stack.push("good1"); 