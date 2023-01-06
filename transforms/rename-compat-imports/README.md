# rename-compat-imports


## Usage

```
npx react-router-v6-codemods rename-compat-imports path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods rename-compat-imports path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js rename-compat-imports path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/rename-compat-imports/__testfixtures__/basic.input.js)</small>):
```js
import { useNavigate } from 'react-router-dom-v5-compat';
import { useLocation } from 'react-router-dom-v5-compat';
import { useParams } from 'react-router-dom-v5-compat';

```

**Output** (<small>[basic.output.js](transforms/rename-compat-imports/__testfixtures__/basic.output.js)</small>):
```js
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

```
<!--FIXTURES_CONTENT_END-->