import { MIN_TITLE_LENGTH, MAX_TITLE_LENGTH } from './title.constants';
import { ValueObject } from '@libs/ddd';
import { validateSync, Length, } from '@libs/validation';
import {} from '@libs/exceptions';
// import { blacklist } from '@libs/sanitizing';



export type TitleType = string;

export class TitleValidationClass {
	constructor(value: TitleType){
		this.value = value;
	}

	@Length(MIN_TITLE_LENGTH, MAX_TITLE_LENGTH)
	value: string;
}

//	TODO:
//	FIND OUT WHERE IS GOOD PLACE FOR SANITIZER
//	OR
//	FIND OUT HOW TO STORE ANY CHAR IN CHOSEN APP'S DBs
//	and DON'T REMEMBER TO DELETE THIS TODO

//	Right now this value obj only reject invariant by char range

export class Title extends ValueObject<TitleType> {
	/* constructor(value: TitleType){
		value = blacklist(value, '\'"');

		super(value);
	} */

	protected validate(value: TitleType): void {
		//validate
		const instance = new TitleValidationClass(value);
		
		const errors = validateSync(instance);
		
		if(errors.length){

		}
	}
}
