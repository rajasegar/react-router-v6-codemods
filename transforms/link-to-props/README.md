# link-to-props


## Usage

```
npx react-router-v6-codemods link-to-props path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods link-to-props path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js link-to-props path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/link-to-props/__testfixtures__/basic.input.js)</small>):
```js
<Link to={{ pathname: '/home', state: state }} />;

```

**Output** (<small>[basic.output.js](transforms/link-to-props/__testfixtures__/basic.output.js)</small>):
```js
<Link to="/home" state={state} />;

```
<!--FIXTURES_CONTENT_END-->