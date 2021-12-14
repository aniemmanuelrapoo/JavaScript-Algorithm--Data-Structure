class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    //ADDING A VERTEX
    //1. write a method called addVertex, which accepts a name of a vertex
    //2. it should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    //ADDING AN EDGE
    //1. this function should accept two vertices, we can call them vertex1 and vertex2
    //2. the function should find in the adjacency list the key of vertex1 and push vertex2 to the array
    //3. the function should find in the adjacency list the key of vertex2 and push vertex1 to the array
    //4. dont worry about handling errors/invalid vertices
    addEdge(v1,v2){
         this.adjacencyList[v1].push(v2);
         this.adjacencyList[v2].push(v1);
     }

     //REMOVING AN EDGE
     //1. this function should accept two vertices, we'll call them vertex1 and vertex2
     //2. this function should reassign the key of vertex1 to be an array that dose not contain vertex2
     //2. this function should reassign the key of vertex2 to be an array that dose not contain vertex1
     //3. dont worry about handling errors/invalid vertices
     removeEdge(vertex1,vertex2){
         this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
         );
         this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
         );
     }

     //REMOVING A VERTEX
     //1. the function should accept a vertex to remove 
     //2. the function should loop as long as there are any other vertices in the adjacency list for that vertex 
     //3. inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex 
     //4. delete the key in the adjacency list for that vertex
     removeVertex(vertex){
         while(this.adjacencyList[vertex].length){
             const adjacentVertex = this.adjacencyList[vertex].pop();
             this.removeEdge(vertex, adjacentVertex);
         }
         delete this.adjacencyList[vertex]
     }

     //DFS PSEUDOCODE
     //Recursive
//      DFS(vertex):
//         if vertex is empty
//             return (this is base case)
//         add vertex to results list
//         mark vertex as visited
//         for each neighbor in vertex's neighbors:
//             if neighbor is not visited:
//                 recursively call DFS on neighbor

     //Depth First Traversal 
     // recursive 
     //1. the function should accept a starting node
     //2. create a list to store the end result, to be returned at the very end
     //3. create an object to store visited vertices
     //4. create a helper function which accepts a vertex
        //4.1. the helper function should return early if the vertex is empty
        //4.2. the helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
        //4.3. loop over all of the values in the adjacencyList for that vertex
        //4.4. if any of those values have not been visited, recursively invoke the helper function with that vertex
        
     depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);
        return result;
     }

     //DFS PSEEUDOCODE
     //Iterative
//      DFS-iterative(start):
//         let S be a stack
//         S.push(start)
//         while S is not empty
//             vertex = S.pop()
//             if vertex is not labeled as discovered:
//                 visit vertex (add to result list)
//                 label vertex as discovered
//                 for each of vertex's neighbors, N do S.push(N)

    //Depth First Traversal
    //iterative
    //1. the function should accept a starting node
    //2. create a stack to help use keep track of vertices(use a list/array)
    //3. create a list to store the end result, to be returned at the very end
    //4. create an object to store visited vertices
    //5. add the starting vertex to the stack, and mark it visited
    //6. while the stack has something in it:
        //6.1. pop the next vertex from the stack
        //6.2. if that vertex hasn't been visited yet:
            //6.2.1. mark it as visited
            //6.2.2. add it to the result list
            //6.2.3. push all od its neighbors into the stack
    //7. return the result array
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
//             console.log(stack)
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
        return result;
    }

    //BREADTH FIRST
    //1. this function accept a starting vertex
    //2. create a queue(you can use an array) and place the starting vertex in it
    //3. create an array to store the nodes visited
    //4. create an object to store nodes visited
    //5. mark the starting vertex as visited
    //6. loop as long as there is anything in the queue
    //7. remove the first vertex from the queue and push it into the array that stores nodes visited
    //8. loop over each vertex in the adjacency list for the vertex you are visiting
    //9. if it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    //10. once you have finished looping, return the array of visited nodes

    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong");
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");


g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")



