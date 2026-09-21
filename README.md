# Full Stack open CI/CD

This repository is used for the CI/CD module (part 11) of the Full Stack Open course (url : https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-continuous-integration)

## Version History

1. v1.0 at Sept 22, 2026

    - clone exercise 2 repo from https://github.com/fullstack-hy2020/fs-pokedex
    - add command execution result

## Folder Structure

Below is the initial folder structure (v1.0)

```
D:.
├─fs-cicd       <- prepare for exercise 20+
│  ├─backend
│  └─frontend
└─fs-pokedex    <- exercise repo cloned here
    ├─public
    ├─src
    └─test
```

## Commands

### 1. Start by running `npm install` inside the project folder

```
D:\fso-part11\fs-pokedex>npm install

npm warn deprecated whatwg-encoding@3.1.1: Use @exodus/bytes instead for a more spec-conformant and faster implementation
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated glob@10.5.0: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
npm warn deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me

added 1015 packages, and audited 1016 packages in 27s

246 packages are looking for funding
  run `npm fund` for details

30 vulnerabilities (3 low, 9 moderate, 16 high, 2 critical)

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

D:\fso-part11\fs-pokedex>
```

remark : 'npm audit fix' have not executed as advised by Google Gemini

```
Those npm warn deprecated messages and vulnerability warnings are standard when installing existing course or starter projects. You don't need to fix them or run npm audit fix—doing so can sometimes upgrade packages to newer major versions that break exercise configurations.
```

### 2. `npm start` to run the webpack dev server

```
D:\fso-part11\fs-pokedex>npm start

> fullstackopen-cicd@1.0.0 start
> webpack-dev-server --open --mode development --port 8080

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/, http://[::1]:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.0.103:8080/
<i> [webpack-dev-server] Content not from webpack is served from 'D:\fso-part11\fs-pokedex\public' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
<i> [webpack-dev-middleware] wait until bundle finished: /
asset bundle.js 1.9 MiB [emitted] (name: main)
asset ./index.html 269 bytes [emitted]
runtime modules 28.3 KiB 15 modules
orphan modules 134 KiB [orphan] 7 modules
modules by path ./node_modules/ 1.66 MiB 80 modules
modules by path ./src/ 15.5 KiB
  modules by path ./src/*.jsx 7.14 KiB
    ./src/index.jsx 328 bytes [built] [code generated]
    ./src/App.jsx 1.93 KiB [built] [code generated]
    ./src/LoadingSpinner.jsx 319 bytes [built] [code generated]
    + 4 modules
  modules by path ./src/*.css 5.92 KiB
    ./src/styles.css 2.23 KiB [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/styles.css 3.69 KiB [built] [code generated]
  ./src/useApi.js 2.42 KiB [built] [code generated]
webpack 5.105.4 compiled successfully in 2456 ms

```

remark : http://localhost:8080/ is opened automatically


### 3. `npm test` to run tests

```
D:\fso-part11\fs-pokedex>npm test

> fullstackopen-cicd@1.0.0 test
> jest

 PASS  test/PokemonList.jest.spec.jsx
 PASS  test/App.jest.spec.jsx
 FAIL  test/PokemonPage.jest.spec.jsx
  ● Console

    console.log
      hiddenAbility= {
        ability: {
          name: 'anticipation',
          url: 'https://pokeapi.co/api/v2/ability/107/'
        },
        is_hidden: true,
        slot: 3
      }

      at log (src/PokemonPage.jsx:29:11)

    console.log
      hiddenAbility= {
        ability: {
          name: 'anticipation',
          url: 'https://pokeapi.co/api/v2/ability/107/'
        },
        is_hidden: true,
        slot: 3
      }

      at log (src/PokemonPage.jsx:29:11)

    console.log
      hiddenAbility= {
        ability: {
          name: 'anticipation',
          url: 'https://pokeapi.co/api/v2/ability/107/'
        },
        is_hidden: true,
        slot: 3
      }

      at log (src/PokemonPage.jsx:29:11)

    console.log
      hiddenAbility= {
        ability: {
          name: 'anticipation',
          url: 'https://pokeapi.co/api/v2/ability/107/'
        },
        is_hidden: true,
        slot: 3
      }

      at log (src/PokemonPage.jsx:29:11)

  ● <PokemonPage /> › should render previous and next urls if they exist

    expect(element).toHaveAttribute("href", "/pokemon/vaporeon") // element.getAttribute("href") === "/pokemon/vaporeon"

    Expected the element to have attribute:
      href="/pokemon/vaporeon"
    Received:
      href="/pokemon/ditto"

      114 |
      115 |     expect(screen.getByText('Previous')).toHaveAttribute('href', '/pokemon/ditto')
    > 116 |     expect(screen.getByText('Next')).toHaveAttribute('href', '/pokemon/vaporeon')
          |                                      ^
      117 |   })
      118 |
      119 |   it('should not render previous and next urls if none exist', async () => {

      at toHaveAttribute (test/PokemonPage.jest.spec.jsx:116:38)
      at node_modules/@babel/runtime/helpers/regeneratorRuntime.js:52:18
      at Generator.<anonymous> (node_modules/@babel/runtime/helpers/regenerator.js:52:51)
      at Generator.next (node_modules/@babel/runtime/helpers/regeneratorDefine.js:11:21)
      at asyncGeneratorStep (node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:17)
      at _next (node_modules/@babel/runtime/helpers/asyncToGenerator.js:17:9)

Test Suites: 1 failed, 2 passed, 3 total
Tests:       1 failed, 6 passed, 7 total
Snapshots:   0 total
Time:        4.689 s
Ran all test suites.

D:\fso-part11\fs-pokedex>           
```

### 4. `npm run eslint` to run eslint ###

#### initial run ####

```
D:\fso-part11\fs-pokedex>npm run eslint

> fullstackopen-cicd@1.0.0 eslint
> eslint './**/*.{js,jsx}'


Oops! Something went wrong! :(

ESLint: 9.39.4

No files matching the pattern "'./**/*.{js,jsx}'" were found.
Please check for typing mistakes in the pattern.
```

#### Gemini suggestion : ####

The error occurs because Windows Command Prompt (cmd.exe) treats single quotes (`'`) as literal characters rather than string delimiters. When `npm` passes `'./**/*.{js,jsx}'` to ESLint, Windows looks for a literal single quote in the path and fails to match any files.

To fix this, update the `eslint` script in your `package.json` file to use escaped double quotes or omit the quotes for Windows compatibility.

##### Fix Steps

1. Open `package.json` in `D:\fso-part11\fs-pokedex\`.
2. Locate the `"scripts"` section and find the `"eslint"` entry:
```json
"eslint": "eslint './**/*.{js,jsx}'"
```

3. Change single quotes to escaped double quotes `\"`:
```json
"eslint": "eslint \"./**/*.{js,jsx}\""
```

4. Save the file and re-run:
```cmd
npm run eslint
```

Alternatively, you can run the command directly in your terminal using double quotes:

```cmd
npx eslint "./**/*.{js,jsx}"
```

#### run again and success ####

```
D:\fso-part11\fs-pokedex>npm run eslint

> fullstackopen-cicd@1.0.0 eslint
> eslint "./**/*.{js,jsx}"


D:\fso-part11\fs-pokedex\app.js
  1:25  error  Strings must use singlequote  quotes
  1:35  error  Extra semicolon               semi
  2:22  error  Extra semicolon               semi
  5:38  error  Extra semicolon               semi
  7:24  error  Strings must use singlequote  quotes
  7:32  error  Extra semicolon               semi

D:\fso-part11\fs-pokedex\jest.setup.js
  1:38  error  'require' is not defined  no-undef
  3:1   error  'global' is not defined   no-undef
  4:1   error  'global' is not defined   no-undef

D:\fso-part11\fs-pokedex\src\App.jsx
  2:27  error  'Router' is defined but never used  no-unused-vars

D:\fso-part11\fs-pokedex\src\PokemonPage.jsx
  29:3  error  Unexpected console statement  no-console

✖ 11 problems (11 errors, 0 warnings)
  6 errors and 0 warnings potentially fixable with the `--fix` option.
```


### 5. `npm run build` to make a production build ###

```
D:\fso-part11\fs-pokedex>npm run build

> fullstackopen-cicd@1.0.0 build
> webpack --mode production

asset bundle.js 269 KiB [emitted] [minimized] [big] (name: main) 1 related asset
asset ./index.html 258 bytes [emitted]
orphan modules 607 KiB [orphan] 65 modules
runtime modules 2.31 KiB 7 modules
cacheable modules 1.02 MiB
  modules by path ./node_modules/ 568 KiB
    modules by path ./node_modules/style-loader/dist/runtime/*.js 5.84 KiB 6 modules
    modules by path ./node_modules/react-dom/ 533 KiB 4 modules
    modules by path ./node_modules/react/ 17 KiB 2 modules
    modules by path ./node_modules/scheduler/ 10.1 KiB 2 modules
    modules by path ./node_modules/css-loader/dist/runtime/*.js 2.31 KiB 2 modules
  modules by path ./src/ 477 KiB
    ./src/index.jsx + 58 modules 473 KiB [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/styles.css 3.69 KiB [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (269 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (269 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.105.4 compiled with 3 warnings in 2912 ms
```

### 6. `npm run start-prod` to run your production build ###

```
D:\fso-part11\fs-pokedex>npm run start-prod

> fullstackopen-cicd@1.0.0 start-prod
> node app.js

server started on port 5001
```

noted some errors, such as accessing http://localhost:5001/pokemon/bulbasaur and get incorrect result 'Cannot GET /pokemon/bulbasaur'
