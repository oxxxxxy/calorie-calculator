CREATE TABLE IF NOT EXISTS notifications (
	id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	
	creation_date TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),

	uid BIGINT,

	is_active BOOLEAN DEFAULT FALSE,

	is_deleted BOOLEAN DEFAULT FALSE,

-- 0  notify after the last meal to eat
-- 1  notify on schelude to eat
	type SMALLINT,


-- 0  value in seconds, max is 24 hours
	countdown INTEGER,

-- 1  value in seconds, range is 24 hours
	hours_minutes INTEGER


);
