/**
 * Copyright 2020 The Magma Authors.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from 'fs';
import {getLogger} from '../../shared/logging';
import type {Dialect, Options} from 'sequelize';

// ? Use PostgreSQL Docker service
const DB_HOST = process.env.DB_HOST || 'postgres';
const DB_PORT = parseInt(process.env.DB_PORT || '5432');
const DB_USER = process.env.DB_USER || 'postgres';
const DB_PASS = process.env.DB_PASS || 'postgres';
const DB_NAME = process.env.DB_NAME || 'nms';
const DB_DIALECT: Dialect = 'postgres';

const logger = getLogger(module);

let ssl_required = false;
let CAcert: string | Buffer | undefined = process.env.CA_FILE;
let Ckey: string | Buffer | undefined = process.env.KEY_FILE;
let Ccert: string | Buffer | undefined = process.env.CERT_FILE;
let dialectOptions = {};

if (process.env.CA_FILE) {
  try {
    CAcert = fs.readFileSync(process.env.CA_FILE);
    ssl_required = true;
  } catch (e) {
    console.warn('cannot read ca cert file', e);
  }
}

if (process.env.KEY_FILE) {
  try {
    Ckey = fs.readFileSync(process.env.KEY_FILE);
    ssl_required = true;
  } catch (e) {
    console.warn('cannot read key file', e);
  }
}

if (process.env.CERT_FILE) {
  try {
    Ccert = fs.readFileSync(process.env.CERT_FILE);
    ssl_required = true;
  } catch (e) {
    console.warn('cannot read cert file', e);
  }
}

if (ssl_required) {
  dialectOptions = {
    ssl: {
      ca: CAcert,
      key: Ckey,
      cert: Ccert,
    },
  };
}

const config: {[config: string]: Options} = {
  test: {
    username: '',
    password: '',
    database: 'db',
    dialect: 'sqlite',
    logging: false,
    storage: ':memory:',
  },
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    ssl: ssl_required,
    dialectOptions,
    logging: (msg: string) => logger.debug(msg),
  },
  production: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    ssl: ssl_required,
    dialectOptions,
    logging: (msg: string) => logger.debug(msg),
  },
};

export default config;
