#!/bin/sh

SQL_CMD='mysql -u root -p'
${SQL_CMD} -e "source ./countdownd_schema.sql"
${SQL_CMD} -e "source ./create_users.sql"

