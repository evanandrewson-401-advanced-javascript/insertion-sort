# InsertionSort
Coding challenge #26

## Challenge
The challenge is to create a function that will sort an array with the insertion sort method.

## Approach & Efficiency 
The solution uses nested loops so it's quadratic. It works by first iterating through the array and setting a temp variable equal to the array at each index (i) and setting a new index (j) equal to the current index minus 1. There's a another loop inside that loop while j is greater than or equal to 0 and while the value at i is less than the value at j. For each iteration of this while loop, it shifts the values in the array over to the right 1 and decrements j. After exiting the while loop, we finally set the value at j + 1 equal to the temp variable before the next iteration of the for loop.