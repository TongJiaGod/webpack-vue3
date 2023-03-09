module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        '@vue/prettier'
    ],
    overrides: [],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true, // 使用单引号
                semi: false, // 末尾添加分号
                tabWidth: 4,
                trailingComma: 'none',
                useTabs: false,
                endOfLine: 'auto'
            }
        ]
    },
    globals: {
        defineOptions: 'readonly'
    }
}
