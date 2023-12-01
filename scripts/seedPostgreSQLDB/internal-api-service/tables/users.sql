CREATE TABLE IF NOT EXISTS users (
	id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	
	creation_date TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),

	shared_fdi_by_uids BIGINT[],
	synced_uids BIGINT[],

	set_day_pfcc_limit_id BIGINT,
	set_day_pfcc_limit_chain_id BIGINT,


-- external client service type_id via which user communicate
--		lol but i don't know how to do that whole thing with external services right now
	via_client_service_type_id BIGINT,


-- settings
	s_utc VARCHAR(6),


	is_active BOOLEAN NOT NULL

);
