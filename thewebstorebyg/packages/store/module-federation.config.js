// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'store',
  remotes: ['pdp', 'search'],
};

module.exports = moduleFederationConfig;
