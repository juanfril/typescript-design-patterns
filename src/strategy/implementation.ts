/**
 * Strategy Pattern
 *
 * Description: The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. This pattern lets the algorithm vary independently from clients that use it.
 *
 * Use: When you have a family of algorithms and want to make them interchangeable, or when you want to avoid multiple conditional statements.
 */

// Strategy interface
export interface Strategy {
  doAlgorithm(data: string[]): string[];
}

// Concrete Strategies
export class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

export class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort().reverse();
  }
}

// Context
export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): string[] {
    console.log('Context: Sorting data using the strategy');
    const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
    console.log(result.join(','));

    return result;
  }
}
