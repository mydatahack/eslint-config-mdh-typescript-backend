# eslint-config-mdh-typescript-backend

Eslint config for TypeScirpt backend code.

## Usage

Add `esling-config-mdh-typescript-backend` as part of `extends` in `.eslintrc.js` after installing the module.

```js
module.exports = {
  ...
  extends: ['eslint-config-mdh-typescript-backend'],
  ...
};
```

To use prettier, add `"prettier": "eslint-config-mdh-typescript-backend/prettier"` to `package.json`.
