import Guard from './guard';


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
		// I think there is no point in complicating the comparison.
		// We compare only data values( primitives, arrays, objects ),but no functions or buffers or etc.
		// So such an implementation as below is enough.
    return JSON.stringify(this) === JSON.stringify(vo);
  }

}

