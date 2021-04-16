module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  
  ignorePatterns: ["**/modules/*.js"],
  rules: {
    "indent": "off",
    "spaced-comment": "off",
    "space-before-blocks": "off",
    "eol-last": "off",
    "no-multiple-empty-lines" : "off",
    "space-before-function-paren" :"off",
    "no-unused-vars": "off",
    "no-useless-escape": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-extra-boolean-cast": "off",
    "prefer-const": "off",
    "comma-dangle": "off",
    "no-timing-in-fetch-data": "off",
    "no-trailing-spaces": "off",
    "Extra semicolon": "off",
    "no-undef": "off",
    "semi": "off",
    "padded-blocks": "off",
    "quotes": "off",
    "keyword-spacing": "off",
    "quote-props": "off",
    "no-var": "off",
    "no-tabs": "off",
    "vue/singleline-html-element-content-newline": "off",
  }
}
