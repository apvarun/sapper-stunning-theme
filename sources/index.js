import gatsbyPluginHelper from "./gatsby-plugin-helper";

export const initSource = config => {
  if (!config.plugin) {
    console.error('Plugin not defined');
    return;
  }
  if(config.type && config.type === "gatsby") {
    return gatsbyPluginHelper(config.plugin, config.options);
  }
  return config.plugin(config.options);
};
