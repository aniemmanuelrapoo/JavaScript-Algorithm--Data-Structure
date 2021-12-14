//Node = val, next, prev
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

//Doubly Linked List = head, tail, length
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //pushing = adding a node to the end of the doubly linked list
    //pushing pseudocode
    //1. create a new node with the value passed to the function
    //2. if the head property is null set the head and tail to be the newly created node
    //3. if not, set the next property on the tail to be that node
    //4. set the previous property on the newly created node to be the tail
    //5. set the tail to be the newly created node
    //6. increment the length
    //7. return the doubly linked list

    push(val){
       var newNode = new Node(val)
       if(this.length === 0){
           this.head = newNode;
           this.tail = newNode;
       }else{
           this.tail.next = newNode;
           newNode.prev = this.tail;
           this.tail = newNode;
       }
       this.length ++;
       return this;
    }

    //popping = removing a node from the end of the doubly linked list
    //popping Pseudocode
    //1. if there is no head, return undefined
    //2. store the current tail in a variable to return later
    //3. if the length is 1, set the head and tail to be null
    //4. update the tail to be the previous Node.
    //5. set the newTail's next to null
    //6. decrement the length
    //7. return the value removed

    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            poppedNode.prev = this.tail;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    //shifting = removing a node from the beginning of the doubly linked list
    //shifting Pseudocode
    //1. if length is 0, return undefined
    //2. store the current head property in a variable(we'll call it old head)
    //3. if the length is one set the head and taill to null
    //5. update the head to be the next of the old head
    //6. set the head's prev property to be null
    //7. set the old head's next to null
    //8. decrement the length
    //9. return old head

    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null
        }
        this.length--;
        return oldHead;
    }

    //unshifting = adding a node to the beginning of the doubly linked list
    //unshifing Pseudocode
    //1. create a new node with the value passed to the function
    //2. if the length is 0, set the head and tail to be the new node
    //3. otherwise (i) set the property on the head of the list to be the new node. (ii)set the next property on the new node to be the head property (iii)update the head to be the new node
    //4. increment the length
    //5. return the list

    unShift(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //get = accessing a node in a doubly linked list
    //get Pseudocode
    //1. if the index is less than 0 or greater or equal to the length, return null
    //2. if the index is less than or equal to half the lenght of the list
           //2.1. loop through the list starting from the head and loop twoards the middle
           //2.2. return the node once it is found
    //3. if the index is greater than half the length of the list
           //3.1. loop through the list starting from the tail and loop towards the middle
           //3.2. return the node once it is found
    
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        var count, current;
        if(index <= this.length/2){
             count = 0;
             current = this.head;
             while(count !== index){
                 current = current.next;
                 count++;
                }
         } else{
             count = this.length - 1;
             current = this.tail;
             while(count !== index){
                 current.prev = current;
                 count--;
                }
        }
         return current;
    }

    //set = replacing the value of a node in a doubly linked list
    //set pseudocode
    //1. create a variable which is the result of the GET method at the index passed to the function
    //2. if the GET method returns a valid node, set the value of that node to be the value passed to the function (i) return true
    //3. otherwise return false

    set(index, val){
       var foundNode = this.get(index);
       if(foundNode != null){
           foundNode.val = val;
           return true;
       }
       return false;
    }

    //insert = adding a node in a doubly linked list by a certin position
    //insert pseuducode
    //1. if the index is less than zero or greater than or equal to the length return false
    //2. if the index is 0, unshift
    //3. if the index is the same as the length, push
    //4. use the GET method to access the index -1
    //5. set the next and prev property on the correct node to link everything together
    //6. increment the length
    //7. return true

    insert(index, val){
       if(index < 0 || index >= this.length) return false;
       // !! means to turn shift and push to return true or false
       if(index === 0) return !!this.unShift(val);
       if(index === this.length) return !!this.push(val);

       var newNode = new Node(val);
       var beforeNode = this.get(index-1);
       var afterNode = beforeNode.next;

       beforeNode.next = newNode, newNode.prev = beforeNode;
       newNode.next = afterNode, afterNode.prev = newNode;

       this.length++;
       return true;
    }

    //remove = removing a node in a doubly linked list by a certain position
    //remove pseudocode
    //1. if the index is less than zero or greater than or equal to the length return undefined
    //2. if the index is 0, shift
    //3. if the index is the same as the length-1, pop 
    //4. use the GET method to retrieve the item to be removed
    //5. update the next and prev properties to be remove the found node from the list
    //6. set next and prev to null on the found node
    //7. decrement the length
    //8. return the removed node

    remove(index){
       if(index < 0 || index >= this.length) return undefined;
       if(index === 0) return this.shift();
       if(index === this.length-1) return this.pop()
       var removedNode = this.get(index)
       var beforeNode = removedNode.prev;
       var afterNode = removedNode.next;
       beforeNode.next = afterNode;
       afterNode.prev = beforeNode;
//         removedNode.prev.next = removedNode.next;
//         removedNode.next.prev = removedNode.prev;
       removedNode.next = null;
       removedNode.prev = null;
       this.length--;
       return removedNode;
    }
}

list = new DoublyLinkedList();
list.push("this");
list.push("is");
list.push("good");
list.push("good1");