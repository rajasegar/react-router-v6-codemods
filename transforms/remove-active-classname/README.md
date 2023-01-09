# remove-active-classname


## Usage

```
npx react-router-v6-codemods remove-active-classname path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods remove-active-classname path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js remove-active-classname path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/remove-active-classname/__testfixtures__/basic.input.js)</small>):
```js
const MyApp = ({ title }) => {
  return (
    <NavLink to="/messages" className="nav-link" activeClassName="activated">
      Messages
    </NavLink>
  );
};

```

**Output** (<small>[basic.output.js](transforms/remove-active-classname/__testfixtures__/basic.output.js)</small>):
```js
const MyApp = ({ title }) => {
  return (
    <NavLink
      to="/messages"
      className={(
        {
          'isActive': isActive
        }
      ) => 'nav-link' + (isActive ? ' activated' : '')}>
      Messages
    </NavLink>
  );
};

```
<!--FIXTURES_CONTENT_END-->