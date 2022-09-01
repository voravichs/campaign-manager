USE campaign_db;
SELECT * FROM user;
SELECT * FROM characters;
SELECT * FROM campaign;

SELECT * FROM characters
JOIN campaign
ON characters.campaign_id = campaign.id;
SELECT * FROM campaign
JOIN user
ON campaign.dm_id = user.id;