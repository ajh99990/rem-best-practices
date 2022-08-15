module.exports = {
  plugins: [
    require("postcss-pxtorem")({
      rootValue: 1,
      propList: ['*', '!font-size'],//字体不需要参与缩放
    })
  ],
};
