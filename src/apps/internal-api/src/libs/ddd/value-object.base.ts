import Guard from './guard';
import u from '../utils';




export const isValueObject = (obj: unknown): obj is ValueObject<unknown> =>	{
	return obj instanceof ValueObject;
}




export abstract class ValueObject<T> {
  protected readonly props: T;
  protected readonly getValue: T;

  constructor(props: T) {
    this.checkIfEmpty(props);//guard

		this.getValue = 

    this.validate(props);
    this.props = props;
  }

	public getValue2(): T{
		//func from -> pipe(memoize(value) ona vernet memoizd, deepCopy)
		return this.props;
	}

  protected abstract validate(props: T): void;
 

  public equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {// change empty check
      return false;
    }
    return JSON.stringify(this) === JSON.stringify(vo);// change comparing
  }

  /**
   * Unpack a value object to get its raw properties
   */
  public unpack(): T {
    if (this.isDomainPrimitive(this.props)) {
      return this.props;
    }

    const propsCopy = convertPropsToObject(this.props);

    return Object.freeze(propsCopy);
  }

	// Guard method
  private checkIfEmpty(props: ValueObjectProps<T>): void {
    Guard.isEmpty(props);
  }

	static isValueObject = isValueObject;

}

