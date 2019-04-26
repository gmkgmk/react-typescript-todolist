module.exports = {
  //解析器
  parser: '@typescript-eslint/parser', //将 TypeScript 转换为 ESTree，使 eslint 可以识别
  //继承的规则 [扩展]
  extends: [
    'standard', //校验规则
    'standard-react',
    'plugin:prettier/recommended', //将禁用任何可能干扰现有 prettier 规则的 linting 规则
  ],
  plugins: [
    '@typescript-eslint', //将作为ESlint 的一部分运行 Prettier分析。
    'react',
  ],
  rules: {},
};
