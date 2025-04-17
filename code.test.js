// Maya Conway
// code.test.js
// Graph Search Unit Tests using node's assert
// 4-16-25

const assert = require('assert');
const fs = require('fs');
eval(fs.readFileSync('code.js') + '');

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

    assert.deepEqual(depthFirstSearch(acyclicGraph, 'A', 'E'), ['A', 'B', 'D', 'C', 'E'], 'Acyclic from A to E failed');
    assert.deepEqual(depthFirstSearch(cyclicGraph, 'A', 'C'), ['A', 'B', 'C'], 'Cyclic from A to C failed');
    assert.deepEqual(depthFirstSearch(selfCycleGraph, 'A', 'C'), ['A', 'B', 'C'], 'Self Cyclic from A to C failed');
    assert.deepEqual(depthFirstSearch(disconnectedGraph, 'A', 'D'), [], 'Disconnected from A to D failed');
}
dfsTests();
