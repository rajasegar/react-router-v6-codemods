# match-path-arguments


## Usage

```
npx react-router-v6-codemods match-path-arguments path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods match-path-arguments path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js match-path-arguments path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/match-path-arguments/__testfixtures__/basic.input.js)</small>):
```js
const match = matchPath('/users/123', {
  path: '/users/:id',
  exact: true, // Optional, defaults to false
  strict: false, // Optional, defaults to false
});

```

**Output** (<small>[basic.output.js](transforms/match-path-arguments/__testfixtures__/basic.output.js)</small>):
```js
const match = matchPath({
  path: '/users/:id',
  caseSensitive: false, // Optional, defaults to false
  end: true, // Optional, defaults to false
}, '/users/123');

```
<!--FIXTURES_CONTENT_END-->