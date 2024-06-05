const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];

const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
  ];

const numIslands = (grid) => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++; //grid = 9 , grid2 = 7
        deep_first_search(grid, i, j);
      }
    }
  }
  return count;
}

const deep_first_search = (grid, i, j) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === "0") {
    return;
  }
  grid[i][j] = "0";
  deep_first_search(grid, i - 1, j);
  deep_first_search(grid, i + 1, j);
  deep_first_search(grid, i, j - 1);
  deep_first_search(grid, i, j + 1);
}

console.log(numIslands(grid));
console.log(numIslands(grid2));