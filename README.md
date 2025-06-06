# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

#### Runtime of this Depth-First Search: $T(n)\in\Theta(|E|+|V|)$

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst case would be a connected graph that needs to search the whole graph to find the target node
1.  starting at the start node, while unvisited nodes remain
	1.  if current vertex  v  is the node we're looking for, return it. $\Theta(1)$  
	2. mark v as visited and push it onto the path. $\Theta(1)$
	3. for each edge  (v,w): This has a complexity of $\Theta(|E|)$ since each edge will be processed once overall
		1. If not visited, recursively process w. This has a complexity of  $\Theta(|V|)$ since each vertex will be visited at least once.
	4. if all nodes on a path are visited, backtrack. $\Theta(1)$


Since each edge will be visited once and each vertex will be visited once, the runtime equation is:

$T(n) = 1 \cdot (1 + |E| + |V|) + 1$

$= |E|+ |V| + 2$

The constant factor is asymptotically insignificant, therefore

$T(n)\in\Theta(|E|+|V|)$

## Bonus

Implement and analyze breadth-first search.

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."
