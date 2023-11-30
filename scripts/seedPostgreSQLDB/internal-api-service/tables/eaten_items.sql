-- fooddishes can be changed by user, so eaten fooddishes must be snapshots

CREATE TABLE IF NOT EXISTS eaten_items (
	id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	uid BIGINT,

	creation_date TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),

	title VARCHAR(128),

	weight DECIMAL,
	
	caloric_content DECIMAL,
	fat DECIMAL,
	protein DECIMAL,
	carbohydrate DECIMAL,

	is_deleted BOOLEAN DEFAULT FALSE
);
