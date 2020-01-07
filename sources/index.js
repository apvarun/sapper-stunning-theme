export const initSource = config => {
  if (!config.plugin) {
    console.error("Plugin not defined");
    return;
  }
  return config.plugin(config.options);
};
