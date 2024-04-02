// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.1
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';
const common = require('../common');
const { Writable, Readable } = require('stream');

{
  const writable = new Writable();
  writable.on('error', common.mustCall());
  writable.end();
  writable.write('h');
  writable.write('h');
}

{
  const readable = new Readable();
  readable.on('error', common.mustCall());
  readable.push(null);
  readable.push('h');
  readable.push('h');
}
