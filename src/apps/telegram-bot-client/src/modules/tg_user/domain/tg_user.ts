import { Settings_utc } from './value-objects/s_utc.ts';
import { Settings_language } from './value-objects/s_language.ts';

// common impersonal user for internal app.
// he is owner and additional identifier of created things by himself
export interface Tg_User {
	id: number;



	creation_date: Date;

	s_utc?: Settings_utc;
	s_language?: Settings_language;

}
