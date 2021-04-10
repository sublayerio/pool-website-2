echo "🚀 starting migration..."

set -a # automatically export all variables
source "/environment/$1.$2.env"
set +a

echo "mysqldump -u $MYSQL_USER -p*** -h $MYSQL_HOST -P $MYSQL_PORT $MYSQL_DATABASE > /srv/dump.sql;"
mysqldump -u $MYSQL_USER -p$MYSQL_PASSWORD -h $MYSQL_HOST -P $MYSQL_PORT $MYSQL_DATABASE > /srv/dump.sql;

set -a # automatically export all variables
source "/environment/$1.$3.env"
set +a

echo "mysql -u $MYSQL_USER -p*** -h $MYSQL_HOST -P $MYSQL_PORT $MYSQL_DATABASE < /srv/dump.sql;"
mysql -u $MYSQL_USER -p$MYSQL_PASSWORD -h $MYSQL_HOST -P $MYSQL_PORT $MYSQL_DATABASE < /srv/dump.sql;

rm /srv/dump.sql

echo "✅ migration completed..."