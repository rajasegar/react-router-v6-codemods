# use-navigate


## Usage

```
npx react-router-v6-codemods use-navigate path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods use-navigate path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js use-navigate path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/use-navigate/__testfixtures__/basic.input.js)</small>):
```js
import { useHistory } from 'react-router-dom';

function App() {
  let history = useHistory();
  function handleClick() {
    history.push('/home');
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}

```

**Output** (<small>[basic.output.js](transforms/use-navigate/__testfixtures__/basic.output.js)</small>):
```js
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home');
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}

```
<!--FIXTURES_CONTENT_END-->