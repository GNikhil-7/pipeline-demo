#!/bin/bash
cd /home/ubuntu/app
pkill node || true
node app.js > output.log 2>&1 &
