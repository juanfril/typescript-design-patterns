interface EANParserStrategy {
  parse(input: string): any[];
}

class MercaCodeFromEANStartWith23 implements EANParserStrategy {
  parse(input: string): any[] {
    return [input.slice(2, 7), Number(input.slice(9, 12)) / 100];
  }
}

class MercaCodeFromEANStartWith84 implements EANParserStrategy {
  parse(input: string): any[] {
    return [input.slice(7, 12)];
  }
}

// You can add more strategies here if needed

class EANParserContext {
  private strategy: EANParserStrategy | undefined;

  setStrategy(strategy: EANParserStrategy) {
    this.strategy = strategy;
  }

  executeStrategy(input: string): any[] {
    return this.strategy!.parse(input);
  }
}

type EANprefix = '23' | '84';

const strategyMap: { [key in EANprefix]: EANParserStrategy } = {
  '23': new MercaCodeFromEANStartWith23(),
  '84': new MercaCodeFromEANStartWith84(),
};

const getEANParserStrategy = (input: string): EANParserStrategy => {
  const key = input.slice(0, 2) as EANprefix;
  const strategy = strategyMap[key];
  if (!strategy) throw new Error('No strategy found for the given input');
  return strategy;
};

export const getInfoFromEAN = (input: string): any[] => {
  const context = new EANParserContext();
  const strategy = getEANParserStrategy(input);
  context.setStrategy(strategy);
  return context.executeStrategy(input);
};
