var solution = function (N, E, Edges, M) {
  let graph = new Map();

  for (let i = 0; i < N; i++) {
    graph.set(i, []);
  }
  for (let [n, m] of Edges) {
    graph.get(n).push(m);
    graph.get(m).push(n);
  }

  let colors = new Array(N).fill(0);

  return backtrack(0, graph, colors, M, N);
};

var backtrack = function (node, graph, colors, M, N) {
  if (node === N) return true;

  for (let color = 1; color <= M; color++) {
    if (isSafe(node, graph, color, colors)) {
      colors[node] = color;
      if (backtrack(node + 1, graph, colors, M, N)) {
        return true;
      }
      colors[node] = 0;
    }
  }

  return false;
};

var isSafe = function (node, graph, color, colors) {
  for (let neighbor of graph.get(node)) {
    if (colors[neighbor] === color) {
      return false;
    }
  }

  return true;
};

let N = 4,
  M = 3,
  E = 5,
  Edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
    [0, 2],
  ];

let res = solution(N, E, Edges, M);
console.log(res);
