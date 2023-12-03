import Guard from './guard';
import u from '../utils';
 

export const isValueObject =
	(obj: unknown): obj is ValueObject<unknown> => obj instanceof ValueObject;


export abstract class ValueObject<T> {
  public readonly getValue: () => T;
 	
 	protected abstract validate(value: T): void;

	static isValueObject = isValueObject;

  constructor(value: T) {
    Guard.ifEmpty(value);

    this.validate(value);

    this.getValue = u.pipe(u.memoizeArgs(value), structuredClone);
  }
 
  public isEqualTo(vo: ValueObject<T>): boolean {
  	return u.isEqual(this.getValue(), vo.getValue());
  }

}

export default ValueObject;
