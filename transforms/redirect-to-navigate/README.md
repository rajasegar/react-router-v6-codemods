# redirect-to-navigate


## Usage

```
npx react-router-v6-codemods redirect-to-navigate path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods redirect-to-navigate path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js redirect-to-navigate path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/redirect-to-navigate/__testfixtures__/basic.input.js)</small>):
```js
<div>
  <Redirect to="about" />
  <Redirect to="home" push />
</div>;

```

**Output** (<small>[basic.output.js](transforms/redirect-to-navigate/__testfixtures__/basic.output.js)</small>):
```js
<div>
  <Navigate to="about" replace />
  <Navigate to="home" />
</div>;

```
<!--FIXTURES_CONTENT_END-->