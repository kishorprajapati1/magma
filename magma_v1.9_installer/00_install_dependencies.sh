#!/bin/bash
set -e
echo "🔧 Installing system dependencies..."
sudo apt-get update
sudo apt-get install -y \
    apt-transport-https ca-certificates curl software-properties-common \
    gnupg-agent lsb-release git unzip make python3-pip
