module.exports = {
    root: true,
    parserOptions: {
      sourceType: 'module'
    },
    parser: 'vue-eslint-parser',
    env: {
        "browser": true,
        "node": true,
        //"commonjs": true,
        "es6": true
        //"amd": true
    },
    extends: ["plugin:vue/vue3-essential", "plugin:vue/vue3-strongly-recommended"],
    rules: {
        'nocosole': 'off',
        'comma-dangle': [2, 'never']

    }

}