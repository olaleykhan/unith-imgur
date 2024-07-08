import { transformObjectToArray, sortByIndex } from "../transform";

// Test for transformObjectToArray
describe('transformObjectToArray', () => {
  test('transforms an object to an array with id as key', () => {
    const input = {
      a: { name: 'Alice', age: 25 },
      b: { name: 'Bob', age: 30 }
    };

    const result = transformObjectToArray(input);

    expect(result).toEqual([
      { id: 'a', name: 'Alice', age: 25 },
      { id: 'b', name: 'Bob', age: 30 }
    ]);
  });
});

// Test for sortByIndex
describe('sortByIndex', () => {
  test('sorts an array of objects by the index property', () => {
    const input = [
      { name: 'Charlie', index: 2 },
      { name: 'Alice', index: 1 },
      { name: 'Bob', index: 3 }
    ];

    const result = sortByIndex(input);

    expect(result).toEqual([
      { name: 'Alice', index: 1 },
      { name: 'Charlie', index: 2 },
      { name: 'Bob', index: 3 }
    ]);
  });
});
