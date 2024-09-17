
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';
  private _operator: OperatorKeys | null = null;
  private _operand: number | null = null;

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    if (this._buffer) {
      this._operand = parseFloat(this._buffer);
      this._operator = key;
      this._buffer = '';
    }
  }

  public pressActionKey(key: ActionKeys): void {
    if (key === ActionKeys.EQUALS && this._operator && this._operand !== null) {
      const secondOperand = parseFloat(this._buffer);
      switch (this._operator) {
        case OperatorKeys.PLUS:
          this._buffer = (this._operand + secondOperand).toString();
          break;
        case OperatorKeys.MINUS:
          this._buffer = (this._operand - secondOperand).toString();
          break;
        case OperatorKeys.MULT:
          this._buffer = (this._operand * secondOperand).toString();
          break;
        case OperatorKeys.DIV:
          this._buffer = (this._operand / secondOperand).toString();
          break;
        default:
          throw new Error('Unsupported operator');
      }
      this._operator = null;
    }
  }

  public display(): string {
    return this._buffer;
  }

}