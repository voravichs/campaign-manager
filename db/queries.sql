USE campaign_db;
SELECT * FROM user;
SELECT * FROM characters;
SELECT * FROM campaign;

SELECT * FROM characters
JOIN user
ON characters.player_id = user.id;