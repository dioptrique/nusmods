module.exports = {
  parser: 'babel-eslint',
  root: true,
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
  ],
  env: {
    browser: true,
  },
  plugins: [
    'flowtype',
    'import',
    'jsx-a11y',
    'react',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/webpack.config.common.js',
      },
    },
  },
  overrides: [
    {
      files: '**/*.test.{js,jsx}',
      env: {
        jest: true,
      },
      rules: {
        // Much more lenient linting for tests
        'max-len': ['error', 120, {
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        }],
      },
    },
  ],
  rules: {
    // Body style is more troublesome than it's worth
    'arrow-body-style': 'off',
    // Consistent arrow parens.
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    // After adding flowtypes the lines are getting longer.
    'max-len': ['error', 120],
    'import/extensions': ['error', 'always',
      {
        js: 'never',
        jsx: 'never'
      }
    ],
    'react/no-array-index-key': 'off',
    // SEE: https://github.com/yannickcr/eslint-plugin-react/issues
    'react/no-unused-prop-types': 'off',
    // Enables typing to be placed above lifecycle
    "react/sort-comp": ['error', {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        'everything-else',
        'render',
      ],
    }],
    'react/require-default-props': 'off',
    // TODO: Replace divs with buttons, but remove all button styling.
    'jsx-a11y/no-static-element-interactions': 'off',
    // Let git handle the linebreaks instead.
    'linebreak-style': 'off',
  },
};
