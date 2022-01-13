module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    extends: 'react-app',

    root: true,

    env: {
        browser: true,
        node   : true,
    },

    rules: {
        'max-len': [
            'error',
            {
                code: 256,
            },
        ],
        indent                       : ['error', 4],
        quotes                       : ['error', 'single'],
        semi                         : 'error',
        'eol-last'                   : ['error', 'always'],
        'no-console'                 : process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
        'no-debugger'                : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'padded-blocks'              : ['error', 'never'],
        'linebreak-style'            : ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'class-methods-use-this'     : 'off',

        'no-trailing-spaces': [
            'error',
            {
                skipBlankLines: true,
                ignoreComments: true,
            },
        ],

        'key-spacing': [
            'error',
            {
                align: 'colon',
            },
        ],

        'arrow-parens'           : 'off',
        'no-underscore-dangle'   : 'off',
        'space-in-parens'        : 'off',
        'no-prototype-builtins'  : 'off',
        'import/no-unresolved'   : 'off',
        'import/extensions'      : 'off',
        'no-multiple-empty-lines': 'off',

        'require-jsdoc': [
            'warn',
            {
                require: {
                    FunctionDeclaration    : true,
                    MethodDefinition       : true,
                    ClassDeclaration       : true,
                    ArrowFunctionExpression: true,
                    FunctionExpression     : true,
                },
            },
        ],

        'import/no-named-as-default'       : 'off',
        'import/no-extraneous-dependencies': 'off',
    },
};
