start an npm project `npm init -y`
# Prettier
First run `npm install -D prettier@2.7.1` `-D` means it's for development only.

```json
"scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx}\""
},
```
Now you can run `yarn format` or `npm run format` and it will run that command.
just use the extension

# ESLint
First of all, run `npm install -D eslint@8.24.0 eslint-config-prettier@8.5.0` to install eslint in your project development dependencies.

 `npx eslint src/App.js` to check error 
 Run it again with the `--fix` flag and see it will fix some of it for us!
 `"lint": "eslint \"src/**/*.{js,jsx}\" --quiet",`
 `npm run lint`

What he uses in personal project for eslint
```shell
npm install -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8
npm install -D eslint-plugin-react-hooks@4.6.0
```
eslintrc.json (prettier must be the last extend)
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  "rules": {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  }
}
```
# Vite
```bash
npm install -D vite@3.1.4 @vitejs/plugin-react@2.1.0
```
```bash
npm install react@18.2.0 react-dom@18.2.0
```

