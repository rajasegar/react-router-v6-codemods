# compat-router


## Usage

```
npx react-router-v6-codemods compat-router path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods compat-router path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js compat-router path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/compat-router/__testfixtures__/basic.input.js)</small>):
```js
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* ... */}
      </Switch>
    </BrowserRouter>
  );
}

```

**Output** (<small>[basic.output.js](transforms/compat-router/__testfixtures__/basic.output.js)</small>):
```js
import { CompatRouter } from 'react-router-dom-v5-compat';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <CompatRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* ... */}
        </Switch>
      </CompatRouter>
</BrowserRouter>
  );
}

```
<!--FIXTURES_CONTENT_END-->