#!/bin/bash
#
# Copyright 2021 The Magma Authors.

# This source code is licensed under the BSD-style license found in the
# LICENSE file in the root directory of this source tree.

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
PKGNAME=libsystemd-dev
WORK_DIR=/tmp/build-${PKGNAME}
set -e
SCRIPT_DIR="$(dirname "$(realpath "$0")")"
source "$SCRIPT_DIR/../lib/util.sh"


function buildrequires() {
  echo  libsystemd0
}

if_subcommand_exec

if [ -d "$WORK_DIR" ]; then
  rm -rf "$WORK_DIR"
fi
mkdir "$WORK_DIR"
cd "$WORK_DIR"

wget http://archive.ubuntu.com/ubuntu/pool/main/s/systemd/libsystemd-dev_245.4-4ubuntu3.24_amd64.deb

cp libsystemd-dev_245.4-4ubuntu3.24_amd64.deb $SCRIPT_DIR/../

