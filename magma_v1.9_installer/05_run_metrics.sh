#!/bin/bash
set -e
echo "📊 Starting Orchestrator metrics services..."

cd ~/magma/orc8r/cloud/docker
./run.py --metrics

echo "✅ Metrics services started!"
