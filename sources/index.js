import gatsbyPluginHelper from './gatsby-plugin-helper';

export const initSource = async config => {
  if (!config.plugin) {
    console.error('Plugin not defined');
    return;
  }
  const response = config.plugin(config.options);
  return Promise.resolve(response);
};

export const gatsbySourcePolyfill = plugin => {
  return async options => {
    return await gatsbyPluginHelper(plugin, options);
  };
};
