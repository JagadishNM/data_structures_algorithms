class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addvertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}
}

let graph = new WeightedGraph();
graph.addvertex('A');
graph.addvertex('B');
graph.addvertex('C');
graph.addEdge('A', 'B', 9);
graph.addEdge('A', 'C', 5);
graph.addEdge('B', 'C', 7);
console.log(graph.adjacencyList);
