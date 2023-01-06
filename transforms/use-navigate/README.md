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
* [advanced](#advanced)
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="advanced">**advanced**</a>

**Input** (<small>[advanced.input.js](transforms/use-navigate/__testfixtures__/advanced.input.js)</small>):
```js
function Project(props) {
  const history = props.history;

  return (
    <div>
      <MenuList>
        <MenuItem
          onClick={() => {
            history.push('/elsewhere');

            history.replace('/elsewhere');

            history.go(-1);
          }}
        />
      </MenuList>
    </div>
  );
}

```

**Output** (<small>[advanced.output.js](transforms/use-navigate/__testfixtures__/advanced.output.js)</small>):
```js
import { useNavigate } from 'react-router-dom-v5-compat';
function Project(props) {
  const navigate = useNavigate();

  return (
    <div>
      <MenuList>
        <MenuItem
          onClick={() => {
            navigate('/elsewhere');

            navigate('/elsewhere', {
              replace: true
            });

            navigate(-1);
          }}
        />
      </MenuList>
    </div>
  );
}

```
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/use-navigate/__testfixtures__/basic.input.js)</small>):
```js
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
import { useNavigate } from 'react-router-dom-v5-compat';
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