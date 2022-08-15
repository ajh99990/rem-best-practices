module.exports = {
  plugins: [
    require("postcss-pxtorem")({
      rootValue: 1,
      propList: ['*', '!font-size'],
    })
  ],
};
