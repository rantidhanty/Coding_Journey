function busRoutes(routes, source, target) {
  if (source === target) return 0;

  let graph = new Map();
  for (let i = 0; i < routes.length; i++) {
    for (let stop of routes[i]) {
      if (!graph.has(stop)) graph.set(stop, []);
      graph.get(stop).push(i);
    }
  }

  let visitedStops = new Set();
  let visitedRoutes = new Set();
  let queue = [[source, 0]]; // [stop, jumlah_rute]

  while (queue.length > 0) {
    let [currentStop, routeCount] = queue.shift();
    if (currentStop === target) return routeCount; // Jika mencapai target

    for (let routeIndex of graph.get(currentStop)) {
      if (!visitedRoutes.has(routeIndex)) {
        visitedRoutes.add(routeIndex);
        for (let nextStop of routes[routeIndex]) {
          if (!visitedStops.has(nextStop)) {
            visitedStops.add(nextStop);
            queue.push([nextStop, routeCount + 1]);
          }
        }
      }
    }
  }

  return -1;
}


console.log(
  busRoutes(
    [
      [1, 2, 7],
      [3, 6, 7],
    ],
    1,
    6
  )
);
