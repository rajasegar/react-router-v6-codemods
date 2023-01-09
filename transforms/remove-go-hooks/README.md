# remove-go-hooks


## Usage

```
npx react-router-v6-codemods remove-go-hooks path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods remove-go-hooks path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js remove-go-hooks path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/remove-go-hooks/__testfixtures__/basic.input.js)</small>):
```js
import { useHistory } from 'react-router-dom';

function App() {
  const { go, goBack, goForward } = useHistory();

  return (
    <>
      <button onClick={() => go(-2)}>Go 2 pages back</button>
      <button onClick={goBack}>Go back</button>
      <button onClick={goForward}>Go forward</button>
      <button onClick={() => go(2)}>Go 2 pages forward</button>
    </>
  );
}

```

**Output** (<small>[basic.output.js](transforms/remove-go-hooks/__testfixtures__/basic.output.js)</small>):
```js
import { useNavigate } from 'react-router-dom';

function App() {
  const {
    navigate: navigate
  } = useNavigate();

  return <>
    <button onClick={() => navigate(-2)}>Go 2 pages back</button>
    <button onClick={() => navigate(-1)}>Go back</button>
    <button onClick={() => navigate(1)}>Go forward</button>
    <button onClick={() => navigate(2)}>Go 2 pages forward</button>
  </>;
}

```
<!--FIXTURES_CONTENT_END-->