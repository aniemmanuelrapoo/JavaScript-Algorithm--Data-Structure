class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTrees{
    constructor(){
        this.root = null;
    }
    //inserting pseudocode
    //1. create a new node
    //2. starting at the root
        //2.1. check if there is a root, if not - the root now becomes that new node
        //2.2. if there is a root, check if the value of the new node is greater than or less than the value of the root
        //2.3. if it is greater
            //2.3.1. check to see if there is a node to the right
            //2.3.2. if there is, move to that node and repeat these steps
            //2.3.3. if there is not, add that node as the right property
        //2.4. if it is less
            //2.4.1. check to see if there is a node to the left
            //2.4.2. if there is, move to that node and repeat these steps
            //2.4.3. if there is not, add that node as the left property
//     insert(value){
//         var newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         }else{
//             var current = this.root;
//             while(true){
//                 if(value === current.value) return undefined;
//                 if(value < current.value){
//                     if(current.left === null){
//                         current.left = newNode;
//                         return this;
//                     }else{
//                         current = current.left;
//                     }
//                 } else if(value > current.value){
//                     if(current.right === null){
//                         current.right = newNode;
//                         return this;
//                     }else{
//                         current = current.right
//                     }
//                 }
//             }
//         }
//     }

// removing else 
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else{
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
        
    }

    //finding a node in a BST
    //steps
    //1. starting at the root
    //2. checkif there is a root, if not - we're done searching
    //3. if there is a root, check if the value of the new node is the value we are looking for, if we found it we're done
    //4. if not, check to see if the value is greater than or less than the value of the root
    //5. if it is greater
        //5.1. check to see if there is a node to the right
        //5.2. if there is, move to that node and repeat thses steps
        //5.3. if there is not, we're done searching
    //6. if it is less
        //6.1. check to see if there is a node to the left
        //6.2. if there is, move to that node and repeat these steps
        //6.3. if there is not, we're done searching

    //find returns the found node  
    find(value){
        var newNode = new Node(value);
        if(this.root === null) return false;
        var current = this.root, found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            }else{
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    // contains return only true and false
    contains(value){
        var newNode = new Node(value);
        if(this.root === null) return false;
        var current = this.root, found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            }else{
                return true;
            }
        }
        return false;
    }

    //Breadth-First-Search
    //steps
    //1. create a queue(this can be an array) and a variable to store the values of nodes visited
    //2. place the root node in the queue
    //3. loop as long as there is anything in the queue
        //3.1. dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        //3.2. if there is a left property on the node dequeued - add it to the queue
        //3.3. if there is a right property on the node dequeued - add it to the queue
    //4. return the variable that stores the value

    BFS(){
        var node = this.root, data = [], queue = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
        return data
    }

    //Depth-First-Search are three orders
    //DFS - PreOrder
    // steps
    //1. create a variable to store the values of node visited
    //2. store the root of the BST in a variable called current
    //3. write a helper function which accepts a node
        //3.1. push the value of the node to the variable that stores the values
        //3.2. if the node has a left property, call the helper function with the left property on the node
        //3.3. if the node has a right property, call the helper function with the right property on the node
    //4. invoke the helper function with the current variable
    //5. return the array of values

    DFSPreOrder(){
        var data = [];
//         var current = this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
//         traverse(current)
        traverse(this.root);
        return data;
    }

    //DFS - PostOrder
    // steps
    //1. create a variable to store the values of node visited
    //2. store the root of the BST in a variable called current
    //3. write a helper function which accepts a node
        //3.1. if the node has a left property, call the helper function with the left property on the node
        //3.2. if the node has a right property, call the helper function with the right property on the node
        //3.3. push the value of the node to the variable that stores the values
        //3.4. invoke the helper function with the current variable
    //4. return the array of values

    DFSPostOrder(){
        var data = [];
//         var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
//         traverse(current)
        traverse(this.root)
        return data;
    }

    //DFS - InOrder
    // steps
    //1. create a variable to store the values of node visited
    //2. store the root of the BST in a variable called current
    //3. write a helper function which accepts a node
        //3.1. if the node has a left property, call the helper function with the left property on the node
        //3.2. push the value of the node to the variable that stores the values
        //3.3. if the node has a right property, call the helper function with the right property on the node
    //4. invoke the helper function with the current variable
    //5. return the array of values

    DFSInOrder(){
        var data = [];
//         current = this.root;
        function traverse(node){
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }
//         traverse(current);
        traverse(this.root)
        return data;
    }
}
var tree = new BinarySearchTrees();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
// tree.DFSPreOrder();
// tree.DFSPostOrder();
tree.DFSInOrder();

// in all DFS WE CAN REMOVE THE if(node.left or right) AND USE node.left && or node.right &&..


//                             10
//                         6       15
//                       3   8        20