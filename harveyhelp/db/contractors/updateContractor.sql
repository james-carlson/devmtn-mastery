UPDATE contractors
SET contractor_name = $1, contractor_type = $2
WHERE contractor_id = $3;

SELECT *
FROM contractors
WHERE contractor_id = $3;
