# use-location


## Usage

```
npx react-router-v6-codemods use-location path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods use-location path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js use-location path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/use-location/__testfixtures__/basic.input.js)</small>):
```js
function Project(props) {
  const location = props.location;
}

```

**Output** (<small>[basic.output.js](transforms/use-location/__testfixtures__/basic.output.js)</small>):
```js
import { useLocation } from 'react-router-dom-v5-compat';
function Project(props) {
  const location = useLocation();
}

```
<!--FIXTURES_CONTENT_END-->