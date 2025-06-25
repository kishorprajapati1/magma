#!/bin/bash
set -e
echo "🧰 Starting full Magma v1.9 Orchestrator and NMS setup..."

chmod +x 00_install_dependencies.sh \
         01_install_docker.sh \
         02_install_docker_compose.sh \
         03_clone_magma_repo.sh \
         04_run_orchestrator.sh \
         05_run_metrics.sh \
         06_copy_certs.sh \
         07_run_nms.sh

./00_install_dependencies.sh
./01_install_docker.sh
./02_install_docker_compose.sh
./03_clone_magma_repo.sh
./04_run_orchestrator.sh
./05_run_metrics.sh
./06_copy_certs.sh
./07_run_nms.sh

echo ""
echo "✅ All setup steps completed successfully!"
echo "⚠️ IMPORTANT: Log out and back in or run: newgrp docker"
echo "🌐 Access NMS at: http://<YOUR_VM_IP>:8081/"
