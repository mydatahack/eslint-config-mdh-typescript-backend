# eslint-config-mdh-typescript-backend

Eslint config for TypeScript backend code (e.g. Node.js application, Lambda function, etc).

## Usage

After installation, make sure to remove all the eslint and prettier related dependencies.

Add `eslint-config-mdh-typescript-backend` as part of `extends` in `.eslintrc.js` after installing the module.

```js
module.exports = {
  ...
  extends: ['eslint-config-mdh-typescript-backend'],
  ...
};
```

To use prettier, add `"prettier": "eslint-config-mdh-typescript-backend/prettier"` to `package.json`.

If you are not sure how to use it, take a look at [this repo](https://github.com/aws-lambda-template-generator/ts-graphql-hello-world-sam-cli) as an example.
