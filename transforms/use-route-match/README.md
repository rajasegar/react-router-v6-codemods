# use-route-match


## Usage

```
npx react-router-v6-codemods use-route-match path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods use-route-match path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js use-route-match path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/use-route-match/__testfixtures__/basic.input.js)</small>):
```js
useRouteMatch({ strict });
useRouteMatch({ sensitive });

```

**Output** (<small>[basic.output.js](transforms/use-route-match/__testfixtures__/basic.output.js)</small>):
```js
useMatch({ end });
useMatch({ caseSensitive });

```
<!--FIXTURES_CONTENT_END-->