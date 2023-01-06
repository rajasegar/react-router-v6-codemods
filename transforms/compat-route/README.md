# compat-route


## Usage

```
npx react-router-v6-codemods compat-route path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods compat-route path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js compat-route path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/compat-route/__testfixtures__/basic.input.js)</small>):
```js
import { Route } from 'react-router-dom';

export function SomComp() {
  return (
    <Switch>
      <Route path="/project/:id" component={Project} />
    </Switch>
  );
}

```

**Output** (<small>[basic.output.js](transforms/compat-route/__testfixtures__/basic.output.js)</small>):
```js
import { CompatRoute } from 'react-router-dom-v5-compat';
import { Route } from 'react-router-dom';

export function SomComp() {
  return (
    <Switch>
      <CompatRoute path="/project/:id" component={Project} />
    </Switch>
  );
}

```
<!--FIXTURES_CONTENT_END-->