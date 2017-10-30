INSERT INTO contractors
(contractor_name, contractor_type, contractor_score, disaster_id)
VALUES
($1, $2, 0, $3)

RETURNING *
