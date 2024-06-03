/**
 * Observer Pattern
 * 
 * Description: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
 * 
 * Use: When an object should notify other objects without making assumptions about who those objects are.
 */

// Observer interface
interface Observer {
  update(subject: Subject): void;
}

// Subject interface
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Concrete Subject
class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state!: number;

  public getState(): number {
    return this.state;
  }

  public setState(state: number): void {
    this.state = state;
    this.notify();
  }

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Observer has been attached already.');
    }

    console.log('Attached an observer.');
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Detached an observer.');
  }

  public notify(): void {
    console.log('Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

// Concrete Observer
class ConcreteObserver implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject) {
      console.log(`Observer: Reacted to the event. New state is: ${subject.getState()}`);
    }
  }
}

export { ConcreteSubject, ConcreteObserver };
