# static-router-imports


## Usage

```
npx react-router-v6-codemods static-router-imports path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods static-router-imports path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js static-router-imports path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/static-router-imports/__testfixtures__/basic.input.js)</small>):
```js
import { StaticRouter } from 'react-router-dom';

```

**Output** (<small>[basic.output.js](transforms/static-router-imports/__testfixtures__/basic.output.js)</small>):
```js
import { StaticRouter } from 'react-router-dom/server';

```
<!--FIXTURES_CONTENT_END-->