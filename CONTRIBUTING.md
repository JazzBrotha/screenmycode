# Contributions Guidelines
Please adhere to the following guidelines when contributing to *screenmycode*.

### Contents 

* [Prerequisites](#prerequisites)
* [Dependencies](#project-dependencies) 
* [Setting up the application environment and run tests](#setup)
* [Git commit messaging conventions](#git-commits)
* [Filing an issue](#suggesting-changes)
* [Adding a pull request](#pull-requests)
* [Coding conventions and styleguides](#code)

## Prerequisites
Required in order to run the application:
 1. Install [Node.js](https://nodejs.org/en/): `brew install node`
 2. Install [npm](https://www.npmjs.com/): `brew install node`
 
The minimum recommended version for `node.js` is 10.0.0, and for `npm` 5.6.0.

## Project dependencies
Before setting up the project, please note the following project dependencies. 

* The server side uses [Express.js](https://expressjs.com/)
* The client side uses [Vue.js](https://vuejs.org/).

## Setup
To setup the project, please follow the instructions in the respective README 
file for the server and the client.
* [`/server/README.md`](https://github.com/JazzBrotha/screenmycode/blob/master/server/README.md) 
* [`/client/README.md`](https://github.com/JazzBrotha/screenmycode/blob/master/client/README.md)

### Development
Both the server side and the client side developer environment uses [Typescript](https://www.typescriptlang.org/). The server side is using a `typescript` based framweork that runs ontop of `express.js` called [TS.ed](http://tsed.io/). The client side uses [SASS](https://sass-lang.com/) for client side styling. 

### Testing 
* Server side testing is done using [Mocha](https://mochajs.org/).
* Client side testing is done using [Jest](https://jestjs.io/).

## Conventions

### Git Commits
Please adhere to the [Conventional Commits Guide](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) for Git commit messages. 

### Git Branches 
For branch naming convention please follow [this guide](https://gist.github.com/revett/88ee5abf5a9a097b4c88).
### `<type>/<name>`

#### `<type>`
```
bug    - Code changes linked to a known issue.
feat   - New feature.
hotfix - Quick fixes to the codebase.
junk   - Experiments (will never be merged).
```

#### `<name>`
Always use dashes to seperate words, and keep it short.

#### Examples
```
feat/renderer-cookies
hotfix/dockerfile-base-image
bug/login-ie
```

### Code
Please adhere to the setup configuration in the respective [server](https://github.com/JazzBrotha/screenmycode/blob/master/server/tsconfig.json) and [client](https://github.com/JazzBrotha/screenmycode/blob/master/client/tsconfig.json) `tsconfig.json`, as well as the respective linting rules in the [server](https://github.com/JazzBrotha/screenmycode/blob/master/server/tslint.json) and [client](https://github.com/JazzBrotha/screenmycode/blob/master/client/tslint.json) `tslint.json`. Also follow the respective [server](https://github.com/JazzBrotha/screenmycode/blob/master/server/.prettierrc) and [client](https://github.com/JazzBrotha/screenmycode/blob/master/client/.prettierrc) `.prettierrc` settings for syntax related concerns.

## Suggesting changes

### Issues
Issues must follow the [Issue Template](ISSUE_TEMPLATE.md). 

## Pull requests
Pull requests must follow the [Pull Request Template](PULL_REQUEST_TEMPLATE.md).

