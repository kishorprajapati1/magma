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
// AuthenticationParameterRANDM IE Class
class AuthenticationParameterRANDMsg {
 public:
#define RAND_MIN_LEN 16
#define RAND_MAX_LEN 16
  uint8_t iei;
  uint8_t rand_val[RAND_MAX_LEN];

  AuthenticationParameterRANDMsg();
  ~AuthenticationParameterRANDMsg();
  int EncodeAuthenticationParameterRANDMsg(
      AuthenticationParameterRANDMsg* auth_parameter_rand, uint8_t iei,
      uint8_t* buffer, uint32_t len);
  int DecodeAuthenticationParameterRANDMsg(
      AuthenticationParameterRANDMsg* auth_parameter_rand, uint8_t iei,
      uint8_t* buffer, uint32_t len);
};
}  // namespace magma5g
