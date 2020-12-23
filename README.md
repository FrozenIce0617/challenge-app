<h1 align="center">Take-Home Test (App)</h1>

## 🖥 Compatibility

- Support both iOS and Android devices

## ⚙️ Core technologies

- Framework - [React Native](https://reactnative.dev/)
- Navigation - [React Navigation](https://reactnavigation.org/)
- State management - [Redux-Saga](https://redux-saga.js.org/)
- Static type checking - [Typescript](https://www.typescriptlang.org/)
- Styling - [styled-components](https://styled-components.com/)
- Icons - [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/)
- API Request - [Axios](https://github.com/axios/axios)

## ☘️ Environment Setup

### Prerequisite

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/) (version 10 or greater)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/) (version 1.5 or greater)

### Step 1

Create a new file `.env` in the root of app.

```
BASE_URL=https://myapi.com
```

### Step 2

Install all dependencies with `yarn add` (or `npm install`).

### Step 3 (only for iOS)

Install cocoapods with `yarn podinstall`

### Step 4

Build the app with `yarn ios` or `yarn android` based on device.

### Additional Scripts

- `yarn lint` - Cehck `ESLint` warning and errors
- `yarn podinstall` - Install all CocoaPods inside `ios` project
