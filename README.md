# @clebert/bulma-preact

[![][ci-badge]][ci-link] [![][version-badge]][version-link]
[![][license-badge]][license-link] [![][types-badge]][types-link]

[ci-badge]: https://github.com/clebert/bulma-preact/workflows/CI/badge.svg
[ci-link]: https://github.com/clebert/bulma-preact
[version-badge]: https://badgen.net/npm/v/@clebert/bulma-preact
[version-link]: https://www.npmjs.com/package/@clebert/bulma-preact
[license-badge]: https://badgen.net/npm/license/@clebert/bulma-preact
[license-link]: https://github.com/clebert/bulma-preact/blob/master/LICENSE
[types-badge]: https://badgen.net/npm/types/@clebert/bulma-preact
[types-link]: https://github.com/clebert/bulma-preact

A collection of Bulma components for use with Preact.

## Installation

```
npm install @clebert/bulma-preact --save
```

## Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      integrity="sha256-WLKGWSIJYerRN8tbNGtXWVYnUM5wMJTXD8eG4NtGcDM="
      crossorigin="anonymous"
    />
  </head>

  <body>
    <main id="app"></main>
  </body>
</html>
```

```js
import {BulmaTitle} from '@clebert/bulma-preact';
import {h, render} from 'preact';

render(
  <BulmaTitle color="info" size="1">
    Hello, World!
  </BulmaTitle>,
  document.querySelector('main#app')!
);
```

## Development

### Publishing a new release

```
npm run release patch
```

```
npm run release minor
```

```
npm run release major
```

After a new release has been created by pushing the tag, it must be published
via the GitHub UI. This triggers the final publication to npm.

---

Copyright (c) 2020, Clemens Akens. Released under the terms of the
[MIT License](https://github.com/clebert/bulma-preact/blob/master/LICENSE).
