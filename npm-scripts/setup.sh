touch .env
touch src/db/main.db
echo 'SESSION_SECRET={your session secret}' >> .env
sqlite3 src/db/main.db < db/code.sql
