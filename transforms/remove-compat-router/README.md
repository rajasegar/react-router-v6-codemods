# remove-compat-router


## Usage

```
npx react-router-v6-codemods remove-compat-router path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods remove-compat-router path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js remove-compat-router path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/remove-compat-router/__testfixtures__/basic.input.js)</small>):
```js
import { BrowserRouter } from 'react-router-dom';
import { CompatRouter } from 'react-router-dom-v5-compat';

export function App() {
  return (
    <BrowserRouter>
      <CompatRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ... */}
        </Routes>
      </CompatRouter>
    </BrowserRouter>
  );
}

```

**Output** (<small>[basic.output.js](transforms/remove-compat-router/__testfixtures__/basic.output.js)</small>):
```js
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ... */}
      </Routes>
    </BrowserRouter>
  );
}

```
<!--FIXTURES_CONTENT_END-->