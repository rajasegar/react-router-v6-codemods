# react-router-v6-codemods

![Build and Deploy](https://github.com/rajasegar/react-router-v6-codemods/workflows/CI/badge.svg)
[![npm version](http://img.shields.io/npm/v/react-router-v6-codemods.svg?style=flat)](https://npmjs.org/package/react-router-v6-codemods 'View this project on npm')


A collection of codemods for react-router for upgrading to v6.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx react-router-v6-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [compat-route](transforms/compat-route/README.md)
* [compat-router](transforms/compat-router/README.md)
* [link-to-props](transforms/link-to-props/README.md)
* [match-path-arguments](transforms/match-path-arguments/README.md)
* [navlink-exact-end](transforms/navlink-exact-end/README.md)
* [redirect-to-navigate](transforms/redirect-to-navigate/README.md)
* [remove-compat-router](transforms/remove-compat-router/README.md)
* [remove-redirect-inside-switch](transforms/remove-redirect-inside-switch/README.md)
* [rename-compat-imports](transforms/rename-compat-imports/README.md)
* [static-router-imports](transforms/static-router-imports/README.md)
* [use-location](transforms/use-location/README.md)
* [use-navigate](transforms/use-navigate/README.md)
* [use-params](transforms/use-params/README.md)
* [use-route-match](transforms/use-route-match/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`
