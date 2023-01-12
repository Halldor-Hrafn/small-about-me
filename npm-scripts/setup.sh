touch .env
touch db/main.db
echo 'SESSION_SECRET={YOUR SESSION SECRET}' >> .env
sqlite3 db/main.db < db/code.sql
