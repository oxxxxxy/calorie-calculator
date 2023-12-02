import Guard from './guard';
import u from '../utils';


export const isValueObject =
	(obj: unknown): obj is ValueObject<unknown> => obj instanceof ValueObject;


export abstract class ValueObject<T> {
  protected readonly value: T;
 	
 	protected abstract validate(value: T): void;

	static isValueObject = isValueObject;

  constructor(value: T) {
  	// guarding
    Guard.ifEmpty(value);

    this.validate(value);

    this.value = value;
  }

	public getValue(): T {
		return structuredClone(this.value);
	};
 
  public isEqualTo(vo: ValueObject<T>): boolean {
  	return u.isEqual(this.getValue(), vo.getValue());
  }

}

