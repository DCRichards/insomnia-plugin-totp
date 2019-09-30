const querystring = require('querystring');
const url = require('url');

function parseUri(uri) {
  const { protocol, host, query } = url.parse(uri);

  if (!protocol || protocol.toLowerCase() !== 'otpauth:') {
    throw new Error('Protocol must be otpauth');
  }

  if (!host || host.toLowerCase() !== 'totp') {
    throw new Error('type must be totp');
  }

  const { secret } = querystring.parse(query);
  if (!secret) {
    throw new Error('No secret found');
  }

  return secret;
}

module.exports = { parseUri };
