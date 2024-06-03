import { ConcreteCollection } from './implementation';

test('Iterator pattern should iterate over collection', () => {
  const collection = new ConcreteCollection<string>();
  collection.addItem('Item 1');
  collection.addItem('Item 2');
  collection.addItem('Item 3');

  const iterator = collection.getIterator();

  const results: string[] = [];
  while (iterator.valid()) {
    results.push(iterator.next());
  }

  expect(results).toEqual(['Item 1', 'Item 2', 'Item 3']);
});

test('Iterator pattern should rewind and iterate again', () => {
  const collection = new ConcreteCollection<number>();
  collection.addItem(1);
  collection.addItem(2);
  collection.addItem(3);

  const iterator = collection.getIterator();

  // First iteration
  const firstIterationResults: number[] = [];
  while (iterator.valid()) {
    firstIterationResults.push(iterator.next());
  }

  // Rewind and second iteration
  iterator.rewind();
  const secondIterationResults: number[] = [];
  while (iterator.valid()) {
    secondIterationResults.push(iterator.next());
  }

  expect(firstIterationResults).toEqual([1, 2, 3]);
  expect(secondIterationResults).toEqual([1, 2, 3]);
});
