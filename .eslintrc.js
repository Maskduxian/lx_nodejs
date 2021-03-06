module.exports = {
    'env': {
        'node':true,
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser':'babel-lint',
    'parserOptions': {
        'ecmaVersion': 11,
        'soureType':'script'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-console':['error',{
            'allow':['warn','error','info']
        }]
    }
};
