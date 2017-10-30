CREATE TABLE disaster (
disaster_id SERIAL PRIMARY KEY,
name VARCHAR(180)
);

CREATE TABLE contractors (
contractor_id SERIAL PRIMARY KEY,
contractor_name VARCHAR(250),
contractor_type VARCHAR(250),
contractor_score INTEGER,
disaster_id INTEGER REFERENCES disaster
);

CREATE TABLE votes (
vote_id SERIAL PRIMARY KEY,
vote_value INTEGER,
contractor_id INTEGER REFERENCES contractors
);

CREATE TABLE comments (
comment_id SERIAL PRIMARY KEY,
comment_text VARCHAR(1000),
contractor_id INTEGER REFERENCES contractors
);

-- Rationale for datatypes:
-- The datatypes you set in your schema are important because they define what can come in
-- to your database and the format of the data when it is accessed. For example, if you
-- set something to be an integer, you can't keep text in that field. It's something you can 
-- use to your advantage. For example if you want to make sure that a text field is only 
-- so many characters long (so you can save space in your database, or for other reasons),
-- you can do that by setting VARCHAR. In the code above I set VARCHAR to 250 for the 
-- contractor_name and contractor_type fields, so that contractors don't misuse the field
-- and put something in there that's really long to attract attention to themselves, etc. 
