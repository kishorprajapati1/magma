/*
Copyright 2020 The Magma Authors.
This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

#pragma once
#include <sstream>
#include <cstdint>

namespace magma5g {
// ExtendedProtocolDiscriminator IE Class
class ExtendedProtocolDiscriminatorMsg {
 public:
  uint8_t extended_proto_discriminator;

  ExtendedProtocolDiscriminatorMsg();
  ~ExtendedProtocolDiscriminatorMsg();
  int EncodeExtendedProtocolDiscriminatorMsg(
      ExtendedProtocolDiscriminatorMsg* extended_protocol_discriminator,
      uint8_t iei, uint8_t* buffer, uint32_t len);
  int DecodeExtendedProtocolDiscriminatorMsg(
      ExtendedProtocolDiscriminatorMsg* extended_protocol_discriminator,
      uint8_t iei, uint8_t* buffer, uint32_t len);
  void copy(const ExtendedProtocolDiscriminatorMsg& e) {
    extended_proto_discriminator = e.extended_proto_discriminator;
  }
  bool isEqual(const ExtendedProtocolDiscriminatorMsg& e) {
    if (extended_proto_discriminator == e.extended_proto_discriminator) {
      return true;
    }
    return false;
  }
};
}  // namespace magma5g
