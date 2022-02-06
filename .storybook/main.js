const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
  webpackFinal: async (config) => {
    // node_mules폴더와 styles 폴더 안의 모듈을 인식할 수 있게 함
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
      "styles",
    ];

    return config;
  },
};
