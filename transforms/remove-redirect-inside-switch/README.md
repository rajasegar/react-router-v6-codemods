# remove-redirect-inside-switch


## Usage

```
npx react-router-v6-codemods remove-redirect-inside-switch path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v6-codemods
react-router-v6-codemods remove-redirect-inside-switch path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js remove-redirect-inside-switch path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/remove-redirect-inside-switch/__testfixtures__/basic.input.js)</small>):
```js
const MyApp = ({ title }) => {
  return (
    <div>
      <Switch>
        <Redirect from="about" to="about-us" />
      </Switch>
      <Switch>
        <Route from="about" to="about-us" />
      </Switch>
    </div>
  );
};

```

**Output** (<small>[basic.output.js](transforms/remove-redirect-inside-switch/__testfixtures__/basic.output.js)</small>):
```js
const MyApp = ({ title }) => {
  return (
    <div>
      <Switch>
        <Route path="about" render={() => <Route to="about-us" />} />
      </Switch>
      <Switch>
        <Route from="about" to="about-us" />
      </Switch>
    </div>
  );
};

```
<!--FIXTURES_CONTENT_END-->