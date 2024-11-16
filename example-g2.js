


// Given a 2d array of bools representing land and water, return the area of the continent with the largest *landlocked* area.
 
// Rules:
// * Cells can contain either land or water, denoted as True, False.
// * A continent is created by one or more land cells connected horizontally or vertically.
// * Assume every cell outside the grid contains water.
 
// Implement `largestLandlockedArea(grid) -> int`.
 
// You may assume 1 cell border of water.
 
// Examples (Xs are land):
//              . . . . .    . . . . .
// . . . . .    . X X X .    . X X X .
// . X X . .    . X . X .    . X . X .
// . . . X .    . X X X .    . X . X .
// . . . . .    . . . . .    . . . . .
                                   
// answer: 2    answer: 9    answer: 7

// . . . . . . .
// . X X X X X .
// . X . . . X .
// . X . X . X .
// . X . . . X .
// . X X X X X .
// . . . . . . .
// answer: 25

// . . . . . . .
// . X X X . . .
// . X . X . . .
// . X . X X X .
// . X . . . X .
// . X X X X X .
// . . . . . . .
// answer: 21


// // Example input
// grid = [
//   [false, false, false, false, false],
//   [false, true, true, false,false],
//   [false, false, false, true, false],
//   [false, false, false, false, false],
// ]
// 
// // Example output
// 2
//


// true = land
// false = water

// Here is the solution to find the largest landlocked continent in a 2D grid using JavaScript with a depth-first search (DFS) approach:

// javascript
// Copy code
function largestLandlockedArea(grid) {
    function isLandlocked(x, y) {
        // DFS to determine if the continent is landlocked and calculate its area
        let stack = [[x, y]];
        let area = 0;
        let isLandlocked = true;
        visited.add(`${x},${y}`);

        while (stack.length > 0) {
            let [cx, cy] = stack.pop();
            area += 1;

            for (let [dx, dy] of directions) {
                let nx = cx + dx;
                let ny = cy + dy;

                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
                    if (grid[nx][ny] && !visited.has(`${nx},${ny}`)) {
                        visited.add(`${nx},${ny}`);
                        stack.push([nx, ny]);
                    }
                } else {
                    // If it reaches beyond the grid, it is not landlocked
                    isLandlocked = false;
                }
            }
        }

        return isLandlocked ? area : 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let visited = new Set();
    let maxArea = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] && !visited.has(`${r},${c}`)) {
                maxArea = Math.max(maxArea, isLandlocked(r, c));
            }
        }
    }

    return maxArea;
}

// Example grid
const grid = [
    [false, false, false, false, false],
    [false, true, true, false, false],
    [false, false, false, true, false],
    [false, false, false, false, false]
];

// Expected output: 2
console.log(largestLandlockedArea(grid));
// Explanation:
// The function isLandlocked performs a depth-first search (DFS) starting from a given cell (x, y) to calculate the size of the connected landmass.
// If the DFS reaches outside the grid's boundaries, the landmass is not considered landlocked.
// visited keeps track of cells that have already been checked to avoid redundant computations.
// The main function iterates through each cell in the grid, applying the isLandlocked function to unvisited land cells and keeping track of the maximum landlocked area found.