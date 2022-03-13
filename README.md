# eslint-config-mdh-typescript-backend

Eslint config for TypeScript backend code (e.g. Node.js application, Lambda function, etc).

## Usage

After installation, make sure to remove all the eslint and prettier related dependencies.

Add `eslint-config-mdh-typescript-backend` as part of `extends` in `.eslintrc.js` after installing the module.

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint-config-mdh-typescript-backend'],
  parserOptions: {
    project: './tsconfig-lint.json',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [{ files: ['**/*.ts'] }],
  rules: {},
};
```

You man want to have a separate `tsconfig` for the linting to include test files for linting. Create `tsconfig-lint.json` with custom file inclusion and exclusion rules. Below is an example.

```json
{
  "extends": "./tsconfig",
  "include": ["./src/**/*", "./src/**/tests/*.spec.*", "./integration/**/*"],
  "exclude": [".eslintrc.js"]
}
```

To use prettier, add `"prettier": "eslint-config-mdh-typescript-backend/prettier"` to `package.json`.

If you are not sure how to use it, take a look at [this repo](https://github.com/aws-lambda-template-generator/ts-graphql-hello-world-sam-cli) as an example.

For TypeScript React eslint config, check out [eslint-config-mdh-typescript-react](https://www.npmjs.com/package/eslint-config-mdh-typescript-react).
