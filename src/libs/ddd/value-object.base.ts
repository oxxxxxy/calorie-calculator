import Guard from './guard';
import u from '../utils';
 

export const isValueObject =
	(obj: unknown): obj is ValueObject<unknown> => obj instanceof ValueObject;


export abstract class ValueObject<T> {
 	
 	protected abstract validate(value: T): void;

	static isValueObject = isValueObject;


	private readonly _value: () => T;

	get value() {
		return this._value();
	}

  constructor(value: T) {
    Guard.ifEmpty(value);

    this.validate(value);

    this._value = u.cacheArgs(value);
  }
 
  public isEqualTo(vo: ValueObject<T>): boolean {
  	return u.isEqual(this.value, vo.value);
  }

}

export default ValueObject;
