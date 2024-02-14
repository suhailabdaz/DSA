// This code represents a simple graph with nodes A, B, and C connected as follows: A-B-C.

// Adjacency matrix representation of the graph.
const adjacencyMatrix = [
    [0, 1, 0],  // A is connected to B (1) but not to C (0)
    [1, 0, 1],  // B is connected to A and C
    [0, 1, 0]   // C is connected to B only
];

// Output the value at the first row, first column of the adjacency matrix (index 0, 0), which represents the connection from A to A.
console.log(adjacencyMatrix[0][0]); // Output: 0

// Adjacency list representation of the graph.
const adjacencyList = {
    "A": ["B"], // A is connected to B
    "B": ["A", "C"], // B is connected to A and C
    "C": ["B"] // C is connected to B
};

// Output the adjacency list for node A.
console.log(adjacencyList["A"]); // Output: ["B"]
