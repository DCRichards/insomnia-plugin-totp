# insomnia-plugin-totp

![npm](https://img.shields.io/npm/v/insomnia-plugin-totp?style=flat-square)

An [Insomnia](https://insomnia.rest) plugin to generate Time-based One-Time Passwords (TOTP).

## Installation

1. Go to Preferences > Plugins
2. Add `insomnia-plugin-totp`

## Development

The simplest way to work efficiently with this plugin is to use the tests as a framework, negating the need to copy the source to the insomnia plugin folder and run it for each individual change.

Tests are run via [mocha](https://mochajs.org/) and code coverage is provided by [nyc (istanbul)](https://istanbul.js.org/) for easier identification of missing test cases.

#### With Docker

```bash
docker-compose build
docker-compose up
```

#### No Docker

```bash
yarn
yarn test
```

