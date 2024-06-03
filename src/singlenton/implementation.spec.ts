import Singleton from './implementation';

test('Singleton should return the same instance', () => {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  expect(instance1).toBe(instance2);
});

test('Singleton should execute business logic', () => {
  const instance = Singleton.getInstance();

  expect(instance.someBusinessLogic()).toBe('Business Logic');
});
