# insomnia-plugin-totp

An [Insomnia](https://insomnia.rest) plugin to generate Time-based One-Time Passwords (TOTP).

## Installation

1. Run `yarn` to install dependences.
2. Copy this repository into the [Insomnia plugin directory](https://support.insomnia.rest/article/26-plugins#create-a-plugin).
3. Head to `Preferences` > `Plugins` and hit `Reload Plugins List`.

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

