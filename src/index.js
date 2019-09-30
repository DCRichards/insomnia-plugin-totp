const speakeasy = require('speakeasy');
const pkg = require('../package.json');
const uri = require('./uri');

module.exports.templateTags = [
  {
    displayName: 'TOTP',
    name: 'totp',
    description: pkg.description,
    args: [
      {
        displayName: 'Secret',
        description: 'Base32 encoded secret',
        placeholder: 'JBSWY3DPEHPK3PXP',
        type: 'string',
      },
      {
        displayName: 'URI',
        description: 'URI containing secret',
        placeholder: 'otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP',
        type: 'string',
      },
    ],
    run(context, secretParam, uriParam) {
      if (!secretParam && !uriParam) {
        throw new Error('You must specify a secret or URI');
      }

      let secret;
      if (secretParam) {
        secret = secretParam;
      } else {
        try {
          secret = uri.parseUri(uriParam);
        } catch (err) {
          throw new Error(`Invalid URI: ${err.message}`);
        }
      }

      const encoding = 'base32';
      return speakeasy.totp({ secret, encoding });
    },
  },
];
