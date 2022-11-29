module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['react-app', 'airbnb', 'plugin:import/typescript', 'prettier'],
    plugins: ['prettier', 'typescript', 'import'],
    rules: {
        'prettier/prettier': ['error', { singleQuote: true, tabWidth: 4 }],
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'import/extensions': [0, 'never'],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
};
