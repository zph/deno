// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.1
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';

const common = require('../common');
const net = require('net');
const assert = require('assert');

const socket = new net.Socket();
socket.setTimeout(common.platformTimeout(50));

socket.on('timeout', common.mustCall(() => {
  assert.strictEqual(socket._handle, null);
}));

socket.on('connect', common.mustNotCall());

// Since the timeout is unrefed, the code will exit without this
setTimeout(() => {}, common.platformTimeout(200));
