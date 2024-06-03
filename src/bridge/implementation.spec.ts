import { Abstraction, ExtendedAbstraction, ConcreteImplementationA, ConcreteImplementationB } from './implementation';

test('Abstraction should work with ConcreteImplementationA', () => {
  const implementation = new ConcreteImplementationA();
  const abstraction = new Abstraction(implementation);
  expect(abstraction.operation()).toBe('Abstraction: Base operation with:\nConcreteImplementationA: Here\'s the result on the platform A.');
});

test('Abstraction should work with ConcreteImplementationB', () => {
  const implementation = new ConcreteImplementationB();
  const abstraction = new Abstraction(implementation);
  expect(abstraction.operation()).toBe('Abstraction: Base operation with:\nConcreteImplementationB: Here\'s the result on the platform B.');
});

test('ExtendedAbstraction should work with ConcreteImplementationA', () => {
  const implementation = new ConcreteImplementationA();
  const abstraction = new ExtendedAbstraction(implementation);
  expect(abstraction.operation()).toBe('ExtendedAbstraction: Extended operation with:\nConcreteImplementationA: Here\'s the result on the platform A.');
});

test('ExtendedAbstraction should work with ConcreteImplementationB', () => {
  const implementation = new ConcreteImplementationB();
  const abstraction = new ExtendedAbstraction(implementation);
  expect(abstraction.operation()).toBe('ExtendedAbstraction: Extended operation with:\nConcreteImplementationB: Here\'s the result on the platform B.');
});
