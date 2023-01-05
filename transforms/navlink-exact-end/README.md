# navlink-exact-end


## Usage

```
npx react-router-v6-codemods navlink-exact-end path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods navlink-exact-end path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js navlink-exact-end path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/navlink-exact-end/__testfixtures__/basic.input.js)</small>):
```js
<NavLink exact />;

```

**Output** (<small>[basic.output.js](transforms/navlink-exact-end/__testfixtures__/basic.output.js)</small>):
```js
<NavLink end />;

```
<!--FIXTURES_CONTENT_END-->