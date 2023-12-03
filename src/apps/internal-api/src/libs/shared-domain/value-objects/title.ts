import { ValueObject, Guard } from '@libs/ddd';
import u from '@lib/utils';


export class Title extends ValueObject<string> {
	protected validate(value: string): void {
		
	}
}
