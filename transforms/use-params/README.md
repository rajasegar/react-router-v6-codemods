# use-params


## Usage

```
npx react-router-v6-codemods use-params path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods use-params path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js use-params path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/use-params/__testfixtures__/basic.input.js)</small>):
```js
function Project(props) {
  const { params } = props.match;
}

```

**Output** (<small>[basic.output.js](transforms/use-params/__testfixtures__/basic.output.js)</small>):
```js
import { useParams } from 'react-router-dom-v5-compat';
function Project(props) {
  const params = useParams();
}

```
<!--FIXTURES_CONTENT_END-->