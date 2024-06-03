/**
 * Iterator Pattern
 * 
 * Description: The Iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
 * 
 * Use: When you need to traverse a collection without exposing its internal structure, or when you need multiple traversals or different traversal algorithms.
 */

// Iterator interface
interface Iterator<T> {
  current(): T;
  next(): T;
  key(): number;
  valid(): boolean;
  rewind(): void;
}

// Aggregator interface
interface Aggregator<T> {
  getIterator(): Iterator<T>;
}

// Concrete Iterator
class ConcreteIterator<T> implements Iterator<T> {
  private collection: T[];
  private position: number = 0;

  constructor(collection: T[]) {
    this.collection = collection;
  }

  public current(): T {
    return this.collection[this.position];
  }

  public next(): T {
    const item = this.collection[this.position];
    this.position += 1;
    return item;
  }

  public key(): number {
    return this.position;
  }

  public valid(): boolean {
    return this.position < this.collection.length;
  }

  public rewind(): void {
    this.position = 0;
  }
}

// Concrete Aggregator
class ConcreteCollection<T> implements Aggregator<T> {
  private collection: T[] = [];

  public addItem(item: T): void {
    this.collection.push(item);
  }

  public getIterator(): Iterator<T> {
    return new ConcreteIterator<T>(this.collection);
  }
}

export { Iterator, Aggregator, ConcreteIterator, ConcreteCollection };
