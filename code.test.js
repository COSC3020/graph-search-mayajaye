//Maya Conway
//code.test.js
//Graph Search Unit Tests
//4-14-25

const fs = require('fs');
eval(fs.readFileSync('code.js')+'');

function dfsTests() {
    //normal acyclic directed graph
    const acyclicGraph = {
        A: ['B'],
        B: ['D'],
        C: ['E'],
        D: ['C'],
        E: []
    };

    //graph that has a cycle around A B and C
    const cyclicGraph = {
        A: ['B'],
        B: ['C'],
        C: ['A'],
        D: [],
    };

    //graph that has B cycle itself
    const selfCycleGraph = {
        A: ['B'],
        B: ['B', 'C'],
        C: [],
    };

    //disconnected graph that should not return a path from A to D
    const disconnectedGraph = {
        A: ['B'],
        B: [],
        C: ['D'],
        D: [],
    };

    console.log("Acyclic from A to E:", depthFirstSearch(acyclicGraph, 'A', 'E')); // ['A', 'B', 'D', 'C', 'E']
    console.log("Cyclic from A to C", depthFirstSearch(cyclicGraph, 'A', 'C')); // ['A', 'B', 'C']
    console.log("Self Cyclic from A to C", depthFirstSearch(selfCycleGraph, 'A', 'C')); //['A', 'B', 'C']
    console.log("Disconnected from A to D:", depthFirstSearch(disconnectedGraph, 'A', 'D')); // []

}
dfsTests();

