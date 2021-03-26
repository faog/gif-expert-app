module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-hooks',
    'import'
  ],
  'rules': {
    'camelcase': 'warn',
    'comma-spacing': [2, {'before': false, 'after': true}],
    'eol-last': ['error', 'always'],
    'generator-star-spacing': 'warn',
    'import/first': 'warn',
    'import/no-unresolved': 'warn',
    'import/order': 'warn',
    'indent': ['error', 2],
    'max-len': ['error', { 'code': 120 }],
    'no-console': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [2, 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-tag-spacing': ['error', {
			'closingSlash': 'never',
			'beforeSelfClosing': 'always',
			'afterOpening': 'never',
			'beforeClosing': 'never'
		}],
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', { 'int32Hint': false }]
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
};
