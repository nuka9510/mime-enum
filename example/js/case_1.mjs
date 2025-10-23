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