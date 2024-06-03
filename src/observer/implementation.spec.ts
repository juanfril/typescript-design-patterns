import { ConcreteSubject, ConcreteObserver } from './implementation';

test('Observer should be notified of state changes', () => {
  const subject = new ConcreteSubject();

  const observer1 = new ConcreteObserver();
  const observer2 = new ConcreteObserver();

  subject.attach(observer1);
  subject.attach(observer2);

  subject.setState(1);
  subject.setState(2);

  subject.detach(observer1);

  subject.setState(3);
});
