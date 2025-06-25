#!/bin/bash
set -e
echo "🚀 Running Magma Orchestrator using build.py..."

cd ~/magma/orc8r/cloud/docker
sudo pip3 install -r ../../tools/requirements.txt
./build.py --all

echo "✅ Magma Orchestrator is up!"
