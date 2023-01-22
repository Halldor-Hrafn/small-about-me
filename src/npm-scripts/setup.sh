touch .env
touch db/main.db
echo 'SESSION_SECRET={your session secret}' >> .env
sqlite3 db/main.db < db/code.sql
