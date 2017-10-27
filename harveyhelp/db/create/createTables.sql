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

