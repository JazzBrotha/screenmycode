# Contributions Guidelines
This document explains how to contribute to screenmycode.

It includes the following
* How to file an issue
* How to add a pull request
* How to set up the application environment and run tests
* Git commit messaging conventions
* Coding conventions and styleguides

## Prerequisites
To run the application you need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed. The minimum recommended version for `node.js` is 10.0.0, and for `npm` 5.6.0.

## Project dependencies
Listed below are the major project dependencies that developers should be aware of before setting up the project.

### Core
The server side of the application runs on [Express.js](https://expressjs.com/), and the client side runs on [Vue.js](https://vuejs.org/).

### Development
Both the server side and the client side developer environment uses [Typescript](https://www.typescriptlang.org/). The server side is using a `typescript` based framweork that runs ontop of `express.js` called [TS.ed](http://tsed.io/). The client side uses [SASS](https://sass-lang.com/) for client side styling. Server side testing is done using [Mocha](https://mochajs.org/) and client side testing is done using [Jest](https://jestjs.io/).

## Conventions

### Git
Please follow the [Conventional Commits Guide](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) for Git commit messages. For branch naming convention please follow [this guide](https://gist.github.com/revett/88ee5abf5a9a097b4c88).

### Code
Please follow the setup configuration in the separate server and client `tsconfig.json` files as well as the linting rules in `tslint.json`. Also follow the `.prettierrc` settings for syntax related concerns.

## Suggesting changes

### Issues
Issues must follow the [Issue Template](ISSUE_TEMPLATE.md).

## Pull requests
Pull requests must follow the [Pull Request Template](PULL_REQUEST_TEMPLATE.md).

