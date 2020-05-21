// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

// Return the number of negative numbers in grid.

var countNegatives = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        let newArr = grid[i].filter(e => e < 0);
        count += newArr.length;
    }
    return count;
};