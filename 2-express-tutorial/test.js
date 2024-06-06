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
// variable 'count' is used to count the number of islands. It increases by 1 when we find one unit of land.
  let count = 0;
// We loop through the grid, which is 4 arrays.
  for (let i = 0; i < grid.length; i++) {
// We loop through the inside of every array. (Each array has 5 elements.)
    for (let j = 0; j < grid[i].length; j++) {
// If we find a unit of land ('1'), we increase the count by 1.
// So for 'grid', the count = 9. For 'grid2', the count = 7.
      if (grid[i][j] === "1") {
        count++; //grid = 9 , grid2 = 7
        deep_first_search(grid, i, j);
      }
    }
  }
  return count;
}

const deep_first_search = (grid, i, j) => { //this function is called recursively to check the adjacent elements of the land
// If the element is out of bounds or it is water ('0'), we return (exit the function)
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === "0") {
// Examples:
// if i < 0 - example: grid[0][0] - 1 < 0, so we return.
// if i >= grid.length - example: grid[4][0] - 4 >= 4, so we return.
// if j < 0 - example: grid[0][0] - 0 < 0, so we return.
// if j >= grid[i].length - example: grid[0][5] - 5 >= 5, so we return.
// if grid[i][j] === "0" - example: grid[0][4] - "0" === "0", so we return.
    return;
  }
  grid[i][j] = "0"; //it marks grid[i][j] as zero (visited), so that we don't count it again
  deep_first_search(grid, i - 1, j);//check the top element
  deep_first_search(grid, i + 1, j);//check the bottom element
  deep_first_search(grid, i, j - 1);//check the left element
  deep_first_search(grid, i, j + 1);//check the right element
//The number has to follow the condition on line 35 to be counted as an island. If it doesn't, it will not be counted as an island.
// If we find a unit of land, we check the adjacent elements of the land.
}

console.log(numIslands(grid));
console.log(numIslands(grid2));