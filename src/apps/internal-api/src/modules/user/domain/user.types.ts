import { Settings_utc } from './value-objects/s_utc.ts';

// common impersonal user for internal app.
// he is owner and additional identifier of created things by himself
export interface User {
	id: number;
	
	creation_date: Date;

	shared_fdi_by_uids?: number[],
	synced_uids?: number[],

	set_day_pfcc_limit_id: number;
	set_day_pfcc_limit_chain_id?: number;

	via_client_service_type_id: number;

	s_utc?: Settings_utc;

	is_active: boolean;
}


