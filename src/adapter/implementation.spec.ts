import { Adaptee, Adapter } from './implementation';

test('Adapter should translate Adaptee interface to Target interface', () => {
  const adaptee = new Adaptee();
  const adapter = new Adapter(adaptee);

  expect(adapter.request()).toBe('Adapter: (TRANSLATED) Hello, I am write.');
});
