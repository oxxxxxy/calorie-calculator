import { Title } from '@IAsrc/libs/value-objects';

export interface DayPFCCLimit {
	id: number;
	
	uid: number;

	creation_date: Date;

	title: Title,
	

	is_deleted BOOLEAN DEFAULT FALSE

}
