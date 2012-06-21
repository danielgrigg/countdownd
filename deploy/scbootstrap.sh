#!/bin/sh

#Run this from your home directory on your server to install lein.

if [ ! -d bin ]; then
  mkdir -p bin
fi

# lein path will undoubtedly change...
curl -o bin/lein https://raw.github.com/technomancy/leiningen/preview/bin/lein
chmod +x bin/lein

mkdir countdownd
cd countdownd

