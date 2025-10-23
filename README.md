[![LICENSE][license]][license-url]
[![GITHUB-VERSION][github-version]][github-version-url]
[![NPM-VERSION][npm-version]][npm-version-url]
![GITHUB-LAST-COMMIT][github-last-commit]
![NPM-LAST-UPDATE][npm-last-update]
![GITHUB-REPO-SIZE][github-repo-size]
![NPM-UNPACKED-SIZE][npm-unpacked-size]
![JSDELIVR-DOWNLOAD][jsdelivr-download]
![NPM-DOWNLOAD][npm-download]
![TOP-LANGUAGE][top-language]

[license]: https://img.shields.io/npm/l/%40nuka9510%2Fmime-enum
[license-url]: https://github.com/nuka9510/mime-enum/blob/main/LICENSE

[github-version]: https://img.shields.io/github/package-json/v/nuka9510/mime-enum?logo=github
[github-version-url]: https://github.com/nuka9510/mime-enum

[npm-version]: https://img.shields.io/npm/v/%40nuka9510%2Fmime-enum?logo=npm
[npm-version-url]: https://www.npmjs.com/package/@nuka9510/mime-enum

[github-last-commit]: https://img.shields.io/github/last-commit/nuka9510/mime-enum?logo=github

[npm-last-update]: https://img.shields.io/npm/last-update/%40nuka9510%2Fmime-enum?logo=npm

[github-repo-size]: https://img.shields.io/github/repo-size/nuka9510/mime-enum?logo=github

[npm-unpacked-size]: https://img.shields.io/npm/unpacked-size/%40nuka9510%2Fmime-enum?logo=npm

[jsdelivr-download]: https://img.shields.io/jsdelivr/npm/hm/%40nuka9510/mime-enum?logo=jsdelivr

[npm-download]: https://img.shields.io/npm/dm/%40nuka9510%2Fmime-enum?logo=npm

[top-language]: https://img.shields.io/github/languages/top/nuka9510/mime-enum

## Install
```
npm i @nuka9510/mime-enum
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/mime-enum/dist/js/index.min.js"> </script>
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/mime-enum@latest/dist/js/index.min.js"> </script>
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/mime-enum@<specific-version>/dist/js/index.min.js"> </script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/mime-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/mime-enum/dist/esm/index.min.mjs" }
  }
</script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/mime-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/mime-enum@latest/dist/esm/index.min.mjs" }
  }
</script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/mime-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/mime-enum@<specific-version>/dist/esm/index.min.mjs" }
  }
</script>
```
## Usage
### js
```
httpStatusEnum.HttpStatus;
```
### mjs
```
import { HttpStatus } from "@nuka9510/mime-enum";

HttpStatus;
```
### cjs
```
const httpStatusEnum = require('@nuka9510/mime-enum');

httpStatusEnum.HttpStatus;
```
### example
```
example
├── data
│  └── case_1.json
├── js
│  └── case_1.mjs
└── view
   └── case_1.html
```
- `js/case_1.mjs`
```
import { MIME, Type } from "@nuka9510/mime-enum";

class Case1 {
  constructor() {
    this.onFileChange = this.onFileChange.bind(this);

    document.querySelectorAll('[data-action="file-change"]')
            .forEach((...arg) => { arg[0].addEventListener('change', this.onFileChange); });
  }

  onFileChange(
    /** @type {Event} */ ev
  ) {
    /** @type {HTMLInputElement} */
    const target = ev.currentTarget,
    /** @type {HTMLParagraphElement} */
    fileListEl = document.querySelector('[data-name="file-list"]'),
    dt = new DataTransfer();

    [...target.files].forEach((...arg) => {
      /** @type {MIME} */
      const mime = MIME.valueOf(arg[0].type);

      if (mime.type != Type.IMAGE) { return; }

      dt.items.add(arg[0]);
    });

    if (target.files.length != dt.files.length) { alert('이미지 파일만 첨부 가능합니다.'); }

    target.files = dt.files;

    fileListEl.innerHTML = [...dt.files].map((...arg) => arg[0].name)
                                        .join('<br/>');
  }
}

new Case1();
```
- `view/case_1.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <input type="file" data-action="file-change" multiple>
  <p data-name="file-list"></p>
</body>
<script type="importmap">
  {
    "imports": { "@nuka9510/mime-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/mime-enum/dist/esm/index.min.mjs" }
  }
</script>
<script src="../js/case_1.mjs" type="module"></script>
</html>