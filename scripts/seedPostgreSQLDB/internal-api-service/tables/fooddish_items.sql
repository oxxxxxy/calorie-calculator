CREATE TABLE IF NOT EXISTS fooddish_items (
	id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	
	creation_date TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
	
	uid BIGINT,
	image_id BIGINT,
	created_by_project BOOLEAN DEFAULT FALSE,

	title VARCHAR(128),
	
	caloric_content DECIMAL,
	fat DECIMAL,
	protein DECIMAL,
	carbohydrate DECIMAL,
	
	is_deleted BOOLEAN DEFAULT FALSE,

-- dish props
	is_dish BOOLEAN NOT NULL,
	total_weight DECIMAL,
	fd_ids BIGINT[]

);
