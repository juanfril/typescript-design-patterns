import { getInfoFromEAN } from '../strategy/implementation-two';
describe('Merca code', () => {
  const testCases: {
    description: string;
    input: string;
    expected: any[];
  }[] = [
    {
      description: 'Given an EAN starting with 84 return mecacode',
      input: '8480000278623',
      expected: ['27862'],
    },
    {
      description: 'Given an EAN stating with 23 return mercadode and price',
      input: '2369664001999',
      expected: ['69664', 1.99],
    },
  ];
  it.each(testCases)('$description', ({ input, expected }) => {
    const result = getInfoFromEAN(input);
    expect(result).toStrictEqual(expected);
  });

  const errorTestCases: {
    description: string;
    input: string;
    expectedError: string;
  }[] = [
    {
      description: 'Given an EAN starting with 99 return error',
      input: '9900000000000',
      expectedError: 'No strategy found for the given input',
    },
  ];

  it.each(errorTestCases)('$description', ({ input, expectedError }) => {
    expect(() => getInfoFromEAN(input)).toThrow(expectedError);
  });
});
