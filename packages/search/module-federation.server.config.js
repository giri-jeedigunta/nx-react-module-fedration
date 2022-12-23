// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'search',
  exposes: {
    './Module': 'packages/search/src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
