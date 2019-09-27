const pkg = require('../package.json');
const speakeasy = require('speakeasy');

module.exports.templateTags = [
  {
    displayName: 'TOTP',
    name: 'totp',
    description: pkg.description,
    args: [
      {
        displayName: 'Secret',
        type: 'string',
      },
    ],
    run(context, secret) {
      if (!secret) {
        throw new Error('Missing secret');
      }

      const encoding = 'base32';
      return speakeasy.totp({ secret, encoding });
    },
  },
];
