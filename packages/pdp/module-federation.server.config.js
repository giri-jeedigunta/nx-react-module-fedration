// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'pdp',
  exposes: {
    './Module': 'packages/pdp/src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
