CREATE TABLE IF NOT EXISTS users(
	id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	
	creation_date TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),

	count_of_created_fi BIGINT DEFAULT 0,
	available_count_of_created_fi BIGINT DEFAULT 0,

	count_of_created_di BIGINT DEFAULT 0,
	available_count_of_created_di BIGINT DEFAULT 0,


	shared_fdi_by_uids: BIGINT[],
	synced_uids: BIGINT[],

	setted_day_pfcc_limit_id BIGINT,
	setted_day_limit_chain_id BIGINT,


-- settings
	utc VARCHAR(6),
	language VARCHAR(8)


);
