const insertionSort = require('../insertion-sort');

describe('Insertion sort', () => {
  it('sorts an array', () => {
    const array = [5, 6, 1, 2, 3, 4]
    expect(insertionSort(array)).toEqual([1, 2, 3, 4, 5, 6]);
  });
})