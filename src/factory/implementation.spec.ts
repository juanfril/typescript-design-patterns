import { ConcreteCreator1, ConcreteCreator2 } from './implementation';

test('ConcreteCreator1 should create ConcreteProduct1', () => {
  const creator = new ConcreteCreator1();
  expect(creator.someOperation()).toBe("Creator: The same creator's code has just worked with Result of ConcreteProduct1");
});

test('ConcreteCreator2 should create ConcreteProduct2', () => {
  const creator = new ConcreteCreator2();
  expect(creator.someOperation()).toBe("Creator: The same creator's code has just worked with Result of ConcreteProduct2");
});
