
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';

  public pressNumericKey(key: NumericKeys): void {
    if (key === NumericKeys.ONE) {
      this._buffer = '1';
    }
  }

  public pressOperatorKey(key: OperatorKeys): void {
    throw new Error('Method not implemented.');
  }

  public pressActionKey(key: ActionKeys): void {
    throw new Error('Method not implemented.');
  }

  public display(): string {
    return '';
  }

}