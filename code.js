//Maya Conway
//code.js
//Depth First Search
//4-15-25

function depthFirstSearch(graph, startNode, targetNode, visited = [], path = []) {
    visited.push(startNode); //push v onto visited
    path.push(startNode); //push v onto the path

    if (startNode === targetNode) { //if v is the node we're looking for, return the path
        return path;
    }
    for (let i = 0; i < graph[startNode].length; i++) { //for each edge (v, w)
        if (!visited.includes(graph[startNode][i])) { //if w isn't marked visited
            const foundPath = depthFirstSearch(graph, graph[startNode][i], targetNode, visited, path); //recursively process w
            if (foundPath.length > 0) return foundPath;
        }
    }   

    path.pop(); //remove v from the path if we need to backtrack
    return [];
}
