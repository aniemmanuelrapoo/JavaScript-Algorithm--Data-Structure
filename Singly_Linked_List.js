//NODE
// piece of data = val
// reference to next node = next
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//Singly Linked List
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //push
    //pushing = adding a new node to the end of the Linked list
    //Pushing Pseudocode
    //1. this function should accept a value
    //2. create a new node using the value passed to the function
    //3. if there is no head property on the list, set the head and tail to be the newly created node
    //4. otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    //5. increment the length by one
    //6. return the linked list
    push(val){
       var newNode = new Node(val)
       if(!this.head){
           this.head = newNode;
           this.tail = this.head;
       }else{
           this.tail.next = newNode;
           this.tail = newNode;
       }
       this.length++;
       return this;
    }
      
      //popping
      //poping = removing a node from the end of the Linked List
      //poping Pseudocode
      //1. if there are no node in the list, return underfined
      //2. loop through the list until you reach the tail
      //3. set the next property of the 2nd to last node to be null
      //4. set the tail to be the 2nd to the last node
      //5. decrement the length of the list by 1
      //6. return the value of the node removed
      pop(){
       if(!this.head) return "undefine";
       var current = this.head;
       var newTail = current;
       while(current.next){
           newTail = current;
           current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
          this.head = null;
          this.tail = null;
      }
      return current;
    }

    //shift
    //shifting = removing a new node from the beginning of the linked list
    //shifting Pseudocode
    //1. if there are no nodes, return undefine
    //2. store the current head property in a variable
    //3. set the head property to be the current head's next property
    //4. decrement the length by 1
    //5. return the value of the node removed

    shift(){
      if(!this.head) return "undefine";
      var currentHead = this.head;
      this.head = currentHead.next;
      this.length --;
      if(this.length === 0){
          this.tail = null;
      }
      return currentHead;
    }
    
    //unShift
    //Unshifting = adding a new node to the beginning of the linked list
    //Unshifting pseudocode
    //1. this function should accept a value
    //2. Create a new node using the value passed to the function
    //3. if there is no head property on the list, set the head and tail to be the newly created node
    //4. otherwise set the newly created nodes next property to be the current head property on the list
    //5. set the head property on the list to be that newly created node
    //6. increment the length of the list by 1
    //7. return the linked list
    unShift(val){
        var newNode1 = new Node(val)
        if(!this.head){
            this.head = newNode1;
            this.tail = this.head;
        }else{
            newNode1.next = this.head;
        }
        this.head = newNode1;
        this.length ++;
        return this;
    }

    //get
    //get = Retrieving a node by its position in the linked list
    //Get Pseudocode 
    //1. this function should accept an index
    //2. if the index is less than zero or greater than or equal to the length of the list, return null
    //3. loop through the list until you reach the index and return the node at that specific index

    get(index){
      if(index < 0 || index >= this.length) return null;
      var counter = 0;
      var current = this.head;
      while(counter !== index){
          current = current.next;
          counter++;
      }
      return current;
    }

    //set
    //set = changing the value of a node based on its position in the linked list
    //set Pseudocode
    //1.this function should accept a value and an index
    //2. use your get functioto find the specific node
    //3. if the node is not found, return false
    //4. if the node is found, set the value of that node to be the value passed to the function and return true

    set(index, val){
       var foundNode = this.get(index)
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    //insert
    //insert = adding a node to the linked list at a specific position
    //insert Pseudocode
    //1. function that takes two inputs a index and value
    //2. if the index is less than zero or greater than length, return false
    //3. if the index is the same as the length, push a new node to the end of the list
    //4. if the index is 0, unshift a new node to the start of the list
    //5. otherwise, using the get method, access the node at the index -1
    //6. set the next property on that node to be the new node
    //7. set the next property on the new node to be the previous next
    //8. increment the length
    //9. return true

    insert(index, val){
      if(index < 0 || index > this.length) return false;
      if(index === this.length) return !!this.push(val);
      if(index === 0) return !!this.unShift(val);
      var newNode = new Node(val);
      var prev = this.get(index - 1);
      var temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }

    //remove
    //remove = removing a node from the Linked List at a specific position
    //remove Pseudocode
    //1. if the index is less than zero or grater than the length return underfined
    //2. if the index is the same as the lenght-1, pop
    //3. if the index is 0, shift
    //4. otherwise using the get method, access the node at all index -1
    //5. set the next property on that node to be the next of the next node
    //5. Decrement the length
    //6. Return the value of node removed

   remove(index){
       if(index < 0 || index >= this.length) return underfined;
       if(index === 0) return this.shift();
       if(index === this.length - 1) return this.pop();
       var previousNode = this.get(index - 1);
       var removed = previousNode.next;
       previousNode.next = removed.next;
       this.length--;
       return removed;
   }

   //Reverse
   //Reverse = reversing the linked list in place
   //Reverse Pseudocode
   //1. swap the head and tail
   //2. create a variable called next
   //3. create a variable called prev
   //4. create a variable called node and initialize it to the head property
   //5. loop through the list
   //6. set next to be the next property on whatever node is
   //7. set the next property on the node to be whatever prev is
   //8. set prev to be the value of the node variable
   //9. set the node variable to be the value of the next variable

   reverse(){
     var node = this.head;
     this.head = this.tail;
     this.tail = node;
     var next;
     var prev = null;
     for(var i = 0; i < this.length; i++){
         next = node.next;
         node.next = prev;
         prev = node;
         node = next;
     }
     return this;
   }

   //to print our list items in an array
   print(){
       var arr = [];
       var current = this.head
       while(current){
           arr.push(current.val)
           current = current.next
       }
       console.log(arr);
   }
}


var list = new SinglyLinkedList()
list.push("hello")
list.push("goodbye")
list.push("all")