
import { CalculatorModel } from './calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

describe('CalculatorModel', (): void => {

  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {

    const calculator: ICalculatorModel = new CalculatorModel();

    expect(calculator).toBeDefined();

  });

});

it('should have an empty display on init', (): void => {

  // Assemble
  const calculator: ICalculatorModel = new CalculatorModel();

  // Act
  const displayValue: string = calculator.display();

  // Assert
  expect(displayValue).toEqual('');

});
