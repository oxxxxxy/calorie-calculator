CREATE TABLE IF NOT EXISTS telegram_users (
	id BIGINT PRIMARY KEY NOT NULL,

-- user id from the general internal api service
	general_uid BIGINT NOT NULL,

	creation_date TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),


-- this properties are necessary as tgbot internal indexing for user interaction
-- count of created 
	coc_fooddish_items BIGINT DEFAULT 0,
-- available count of created
	acoc_fooddish_items BIGINT DEFAULT 0,
	
	coc_notifications BIGINT DEFAULT 0,
	acoc_notifications BIGINT DEFAULT 0,




);

