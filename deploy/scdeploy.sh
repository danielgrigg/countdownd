#!/bin/sh

RUN_AS=$1
HOST=$2

if [ $# != 2 ]
then
  echo 'Usage: countdownd-deploy.sh <user> <host>'
  exit 2
fi

rsync -vr --delete --exclude-from deploy/exclude ./ $RUN_AS@$HOST:~/countdownd/

