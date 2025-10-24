var mimeEnum;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/mime.js":
/*!**********************!*\
  !*** ./dist/mime.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MIME)
/* harmony export */ });
/* harmony import */ var _nuka9510_simple_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nuka9510/simple-enum */ "./node_modules/@nuka9510/simple-enum/dist/esm/index.min.mjs");
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type.js */ "./dist/type.js");


/** {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Guides/MIME_types/Common_types MIME} 타입 Enum */
class MIME extends _nuka9510_simple_enum__WEBPACK_IMPORTED_MODULE_0__.Enum {
    static #APPLICATION_ATOM_XML = new MIME('application/atom+xml', 'APPLICATION_ATOM_XML', new Set(['xml']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_EPUB_ZIP = new MIME('application/epub+zip', 'APPLICATION_EPUB_ZIP', new Set(['epub']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_GZIP = new MIME('application/gzip', 'APPLICATION_GZIP', new Set(['gz']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_JAVA_ARCHIVE = new MIME('application/java-archive', 'APPLICATION_JAVA_ARCHIVE', new Set(['jar']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_JSON = new MIME('application/json', 'APPLICATION_JSON', new Set(['json']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_LD_JSON = new MIME('application/ld+json', 'APPLICATION_LD_JSON', new Set(['jsonld']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_MSWORD = new MIME('application/msword', 'APPLICATION_MSWORD', new Set(['doc']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_OCTET_STREAM = new MIME('application/octet-stream', 'APPLICATION_OCTET_STREAM', new Set(['bin']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_OGG = new MIME('application/ogg', 'APPLICATION_OGG', new Set(['ogx']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_PDF = new MIME('application/pdf', 'APPLICATION_PDF', new Set(['pdf']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_RTF = new MIME('application/rtf', 'APPLICATION_RTF', new Set(['rtf']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_AMAZON_EBOOK = new MIME('application/vnd.amazon.ebook', 'APPLICATION_VND_AMAZON_EBOOK', new Set(['azw']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_APPLE_INSTALLER_XML = new MIME('application/vnd.apple.installer+xml', 'APPLICATION_VND_APPLE_INSTALLER_XML', new Set(['mpkg']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_MOZILLA_XUL_XML = new MIME('application/vnd.mozilla.xul+xml', 'APPLICATION_VND_MOZILLA_XUL_XML', new Set(['xul']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_MS_EXCEL = new MIME('application/vnd.ms-excel', 'APPLICATION_VND_MS_EXCEL', new Set(['xls']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_MS_FONTOBJECT = new MIME('application/vnd.ms-fontobject', 'APPLICATION_VND_MS_FONTOBJECT', new Set(['eot']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_MS_POWERPOINT = new MIME('application/vnd.ms-powerpoint', 'APPLICATION_VND_MS_POWERPOINT', new Set(['ppt']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION = new MIME('application/vnd.oasis.opendocument.presentation', 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION', new Set(['odp']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET = new MIME('application/vnd.oasis.opendocument.spreadsheet', 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET', new Set(['ods']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT = new MIME('application/vnd.oasis.opendocument.text', 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT', new Set(['odt']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION = new MIME('application/vnd.openxmlformats-officedocument.presentationml.presentation', 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION', new Set(['pptx']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET = new MIME('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET', new Set(['xlsx']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT = new MIME('application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT', new Set(['docx']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_RAR = new MIME('application/vnd.rar', 'APPLICATION_VND_RAR', new Set(['rar']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_VND_VISIO = new MIME('application/vnd.visio', 'APPLICATION_VND_VISIO', new Set(['vsd']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_X_7Z_COMPRESSED = new MIME('application/x-7z-compressed', 'APPLICATION_X_7Z_COMPRESSED', new Set(['7z']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_X_ABIWORD = new MIME('application/x-abiword', 'APPLICATION_X_ABIWORD', new Set(['abw']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_X_BZIP = new MIME('application/x-bzip', 'APPLICATION_X_BZIP', new Set(['bz']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_X_BZIP2 = new MIME('application/x-bzip2', 'APPLICATION_X_BZIP2', new Set(['bz2']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_X_CDF = new MIME('application/x-cdf', 'APPLICATION_X_CDF', new Set(['cda']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_X_CSH = new MIME('application/x-csh', 'APPLICATION_X_CSH', new Set(['csh']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_X_FREEARC = new MIME('application/x-freearc', 'APPLICATION_X_FREEARC', new Set(['arc']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_X_HTTPD_PHP = new MIME('application/x-httpd-php', 'APPLICATION_X_HTTPD_PHP', new Set(['php']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_X_SH = new MIME('application/x-sh', 'APPLICATION_X_SH', new Set(['sh']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_X_TAR = new MIME('application/x-tar', 'APPLICATION_X_TAR', new Set(['tar']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_XHTML_XML = new MIME('application/xhtml+xml', 'APPLICATION_XHTML_XML', new Set(['xhtml']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_XML = new MIME('application/xml', 'APPLICATION_XML', new Set(['xml']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #APPLICATION_ZIP = new MIME('application/zip', 'APPLICATION_ZIP', new Set(['zip']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].APPLICATION);
    static #AUDIO_3GPP = new MIME('audio/3gpp', 'AUDIO_3GPP', new Set(['3gp']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #AUDIO_3GPP2 = new MIME('audio/3gpp2', 'AUDIO_3GPP2', new Set(['3g2']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #AUDIO_AAC = new MIME('audio/aac', 'AUDIO_AAC', new Set(['aac']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #AUDIO_MIDI = new MIME('audio/midi', 'AUDIO_MIDI', new Set(['mid', 'midi']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #AUDIO_MPEG = new MIME('audio/mpeg', 'AUDIO_MPEG', new Set(['mp3']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #AUDIO_OGG = new MIME('audio/ogg', 'AUDIO_OGG', new Set(['oga']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #AUDIO_OPUS = new MIME('audio/opus', 'AUDIO_OPUS', new Set(['opus']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #AUDIO_WAV = new MIME('audio/wav', 'AUDIO_WAV', new Set(['wav']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #AUDIO_WAVE = new MIME('audio/wave', 'AUDIO_WAVE', new Set(['wav']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #AUDIO_WEBM = new MIME('audio/webm', 'AUDIO_WEBM', new Set(['weba']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #AUDIO_X_MIDI = new MIME('audio/x-midi', 'AUDIO_X_MIDI', new Set(['mid', 'midi']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #AUDIO_X_PN_WAV = new MIME('audio/x-pn-wav', 'AUDIO_X_PN_WAV', new Set(['wav']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #AUDIO_X_WAV = new MIME('audio/x-wav', 'AUDIO_X_WAV', new Set(['wav']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].AUDIO);
    static #FONT_OTF = new MIME('font/otf', 'FONT_OTF', new Set(['otf']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].FONT);
    static #FONT_TTF = new MIME('font/ttf', 'FONT_TTF', new Set(['ttf']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].FONT);
    static #FONT_WOFF = new MIME('font/woff', 'FONT_WOFF', new Set(['woff']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].FONT);
    static #FONT_WOFF2 = new MIME('font/woff2', 'FONT_WOFF2', new Set(['woff2']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].FONT);
    static #IMAGE_APNG = new MIME('image/apng', 'IMAGE_APNG', new Set(['png', 'apng']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE);
    static #IMAGE_AVIF = new MIME('image/avif', 'IMAGE_AVIF', new Set(['avif']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE);
    static #IMAGE_BMP = new MIME('image/bmp', 'IMAGE_BMP', new Set(['bmp']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE);
    static #IMAGE_GIF = new MIME('image/gif', 'IMAGE_GIF', new Set(['gif']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE);
    static #IMAGE_JPEG = new MIME('image/jpeg', 'IMAGE_JPEG', new Set(['jpg', 'jpeg']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE);
    static #IMAGE_PNG = new MIME('image/png', 'IMAGE_PNG', new Set(['png']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE);
    static #IMAGE_SVG_XML = new MIME('image/svg+xml', 'IMAGE_SVG_XML', new Set(['svg']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE);
    static #IMAGE_TIFF = new MIME('image/tiff', 'IMAGE_TIFF', new Set(['tif', 'tiff']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE);
    static #IMAGE_VND_MICROSOFT_ICON = new MIME('image/vnd.microsoft.icon', 'IMAGE_VND_MICROSOFT_ICON', new Set(['ico']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE);
    static #IMAGE_WEBP = new MIME('image/webp', 'IMAGE_WEBP', new Set(['webp']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].IMAGE);
    static #MULTIPART_BYTERANGES = new MIME('multipart/byteranges', 'MULTIPART_BYTERANGES', new Set([]), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].MULTIPART);
    static #MULTIPART_FORM_DATA = new MIME('multipart/form-data', 'MULTIPART_FORM_DATA', new Set([]), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].MULTIPART);
    static #TEXT_CALENDAR = new MIME('text/calendar', 'TEXT_CALENDAR', new Set(['ics']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT);
    static #TEXT_CSS = new MIME('text/css', 'TEXT_CSS', new Set(['css']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT);
    static #TEXT_CSV = new MIME('text/csv', 'TEXT_CSV', new Set(['csv']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT);
    static #TEXT_HTML = new MIME('text/html', 'TEXT_HTML', new Set(['htm', 'html']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT);
    static #TEXT_JAVASCRIPT = new MIME('text/javascript', 'TEXT_JAVASCRIPT', new Set(['js', 'mjs']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT);
    static #TEXT_PLAIN = new MIME('text/plain', 'TEXT_PLAIN', new Set(['txt']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT);
    static #TEXT_XML = new MIME('text/xml', 'TEXT_XML', new Set(['xml']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT);
    static #VIDEO_3GPP = new MIME('video/3gpp', 'VIDEO_3GPP', new Set(['3gp']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].VIDEO);
    static #VIDEO_3GPP2 = new MIME('video/3gpp2', 'VIDEO_3GPP2', new Set(['3g2']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].VIDEO);
    static #VIDEO_MP2T = new MIME('video/mp2t', 'VIDEO_MP2T', new Set(['ts']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].VIDEO);
    static #VIDEO_MP4 = new MIME('video/mp4', 'VIDEO_MP4', new Set(['mp4']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].VIDEO);
    static #VIDEO_MPEG = new MIME('video/mpeg', 'VIDEO_MPEG', new Set(['mpeg']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].VIDEO);
    static #VIDEO_OGG = new MIME('video/ogg', 'VIDEO_OGG', new Set(['ogv']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].VIDEO);
    static #VIDEO_WEBM = new MIME('video/webm', 'VIDEO_WEBM', new Set(['webm']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].VIDEO);
    static #VIDEO_X_MSVIDEO = new MIME('video/x-msvideo', 'VIDEO_X_MSVIDEO', new Set(['avi']), _type_js__WEBPACK_IMPORTED_MODULE_1__["default"].VIDEO);
    /** XML */
    static get APPLICATION_ATOM_XML() { return MIME.#APPLICATION_ATOM_XML; }
    /** 전자출판물(Electronic publication) (EPUB) */
    static get APPLICATION_EPUB_ZIP() { return MIME.#APPLICATION_EPUB_ZIP; }
    /** GZip 압축 아카이브 */
    static get APPLICATION_GZIP() { return MIME.#APPLICATION_GZIP; }
    /** Java Archive (JAR) */
    static get APPLICATION_JAVA_ARCHIVE() { return MIME.#APPLICATION_JAVA_ARCHIVE; }
    /** JSON 형식 */
    static get APPLICATION_JSON() { return MIME.#APPLICATION_JSON; }
    /** JSON-LD 형식 */
    static get APPLICATION_LD_JSON() { return MIME.#APPLICATION_LD_JSON; }
    /** Microsoft 워드 */
    static get APPLICATION_MSWORD() { return MIME.#APPLICATION_MSWORD; }
    /** 모든 종류의 이진 데이터 */
    static get APPLICATION_OCTET_STREAM() { return MIME.#APPLICATION_OCTET_STREAM; }
    /** OGG */
    static get APPLICATION_OGG() { return MIME.#APPLICATION_OGG; }
    /** Adobe {@link https://www.adobe.com/acrobat/about-adobe-pdf.html 휴대용 문서 형식} (PDF) */
    static get APPLICATION_PDF() { return MIME.#APPLICATION_PDF; }
    /** Rich Text Format (RTF) */
    static get APPLICATION_RTF() { return MIME.#APPLICATION_RTF; }
    /** 아마존 킨들 전자책 포맷 */
    static get APPLICATION_VND_AMAZON_EBOOK() { return MIME.#APPLICATION_VND_AMAZON_EBOOK; }
    /** Apple 설치 패키지 */
    static get APPLICATION_VND_APPLE_INSTALLER_XML() { return MIME.#APPLICATION_VND_APPLE_INSTALLER_XML; }
    /** XUL */
    static get APPLICATION_VND_MOZILLA_XUL_XML() { return MIME.#APPLICATION_VND_MOZILLA_XUL_XML; }
    /** Microsoft Excel */
    static get APPLICATION_VND_MS_EXCEL() { return MIME.#APPLICATION_VND_MS_EXCEL; }
    /** MS Embedded OpenType fonts */
    static get APPLICATION_VND_MS_FONTOBJECT() { return MIME.#APPLICATION_VND_MS_FONTOBJECT; }
    /** Microsoft PowerPoint */
    static get APPLICATION_VND_MS_POWERPOINT() { return MIME.#APPLICATION_VND_MS_POWERPOINT; }
    /** OpenDocument 프레젠테이션 문서 */
    static get APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION() { return MIME.#APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION; }
    /** OpenDocument 스프레드시트 문서 */
    static get APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET() { return MIME.#APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET; }
    /** OpenDocument 텍스트 문서 */
    static get APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT() { return MIME.#APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT; }
    /** Microsoft PowerPoint (OpenXML) */
    static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION() { return MIME.#APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION; }
    /** Microsoft Excel (OpenXML) */
    static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET() { return MIME.#APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET; }
    /** Microsoft 워드 (OpenXML) */
    static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT() { return MIME.#APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT; }
    /** RAR 아카이브 */
    static get APPLICATION_VND_RAR() { return MIME.#APPLICATION_VND_RAR; }
    /** Microsoft Visio */
    static get APPLICATION_VND_VISIO() { return MIME.#APPLICATION_VND_VISIO; }
    /** {@link https://en.wikipedia.org/wiki/7-Zip 7-zip} archive */
    static get APPLICATION_X_7Z_COMPRESSED() { return MIME.#APPLICATION_X_7Z_COMPRESSED; }
    /** {@link https://en.wikipedia.org/wiki/AbiWord AbiWord} 문서 */
    static get APPLICATION_X_ABIWORD() { return MIME.#APPLICATION_X_ABIWORD; }
    /** BZip 아카이브 */
    static get APPLICATION_X_BZIP() { return MIME.#APPLICATION_X_BZIP; }
    /** BZip2 아카이브 */
    static get APPLICATION_X_BZIP2() { return MIME.#APPLICATION_X_BZIP2; }
    /** CD 오디오 */
    static get APPLICATION_X_CDF() { return MIME.#APPLICATION_X_CDF; }
    /** C-셸 스크립트 */
    static get APPLICATION_X_CSH() { return MIME.#APPLICATION_X_CSH; }
    /** 아카이브 문서 (다중 파일 포함) */
    static get APPLICATION_X_FREEARC() { return MIME.#APPLICATION_X_FREEARC; }
    /** Hypertext Preprocessor (Personal Home Page) */
    static get APPLICATION_X_HTTPD_PHP() { return MIME.#APPLICATION_X_HTTPD_PHP; }
    /** Bourne shell script */
    static get APPLICATION_X_SH() { return MIME.#APPLICATION_X_SH; }
    /** Tape Archive (TAR) */
    static get APPLICATION_X_TAR() { return MIME.#APPLICATION_X_TAR; }
    /** XHTML */
    static get APPLICATION_XHTML_XML() { return MIME.#APPLICATION_XHTML_XML; }
    /** XML */
    static get APPLICATION_XML() { return MIME.#APPLICATION_XML; }
    /** ZIP archive */
    static get APPLICATION_ZIP() { return MIME.#APPLICATION_ZIP; }
    /** {@link https://en.wikipedia.org/wiki/3GP_and_3G2 3GPP} audio container */
    static get AUDIO_3GPP() { return MIME.#AUDIO_3GPP; }
    /** {@link https://en.wikipedia.org/wiki/3GP_and_3G2 3GPP2} audio container */
    static get AUDIO_3GPP2() { return MIME.#AUDIO_3GPP2; }
    /** AAC 오디오 */
    static get AUDIO_AAC() { return MIME.#AUDIO_AAC; }
    /** Musical Instrument Digital Interface (MIDI) */
    static get AUDIO_MIDI() { return MIME.#AUDIO_MIDI; }
    /** MP3 오디오 */
    static get AUDIO_MPEG() { return MIME.#AUDIO_MPEG; }
    /** OGG 오디오 */
    static get AUDIO_OGG() { return MIME.#AUDIO_OGG; }
    /** Opus 오디오 */
    static get AUDIO_OPUS() { return MIME.#AUDIO_OPUS; }
    /** Waveform Audio Format */
    static get AUDIO_WAV() { return MIME.#AUDIO_WAV; }
    /** Waveform Audio Format */
    static get AUDIO_WAVE() { return MIME.#AUDIO_WAVE; }
    /** WEBM audio */
    static get AUDIO_WEBM() { return MIME.#AUDIO_WEBM; }
    /** Musical Instrument Digital Interface (MIDI) */
    static get AUDIO_X_MIDI() { return MIME.#AUDIO_X_MIDI; }
    /** Waveform Audio Format */
    static get AUDIO_X_PN_WAV() { return MIME.#AUDIO_X_PN_WAV; }
    /** Waveform Audio Format */
    static get AUDIO_X_WAV() { return MIME.#AUDIO_X_WAV; }
    /** OpenType 폰트 */
    static get FONT_OTF() { return MIME.#FONT_OTF; }
    /** TrueType Font */
    static get FONT_TTF() { return MIME.#FONT_TTF; }
    /** Web Open Font Format (WOFF) */
    static get FONT_WOFF() { return MIME.#FONT_WOFF; }
    /** Web Open Font Format (WOFF) */
    static get FONT_WOFF2() { return MIME.#FONT_WOFF2; }
    /** Animated Portable Network Graphics (APNG) */
    static get IMAGE_APNG() { return MIME.#IMAGE_APNG; }
    /** AVIF 이미지 */
    static get IMAGE_AVIF() { return MIME.#IMAGE_AVIF; }
    /** Windows OS/2 비트맵 그래픽 */
    static get IMAGE_BMP() { return MIME.#IMAGE_BMP; }
    /** Graphics Interchange Format (GIF) */
    static get IMAGE_GIF() { return MIME.#IMAGE_GIF; }
    /** JPEG 이미지 */
    static get IMAGE_JPEG() { return MIME.#IMAGE_JPEG; }
    /** Portable Network Graphics */
    static get IMAGE_PNG() { return MIME.#IMAGE_PNG; }
    /** Scalable Vector Graphics (SVG) */
    static get IMAGE_SVG_XML() { return MIME.#IMAGE_SVG_XML; }
    /** Tagged Image File Format (TIFF) */
    static get IMAGE_TIFF() { return MIME.#IMAGE_TIFF; }
    /** Icon format */
    static get IMAGE_VND_MICROSOFT_ICON() { return MIME.#IMAGE_VND_MICROSOFT_ICON; }
    /** WEBP image */
    static get IMAGE_WEBP() { return MIME.#IMAGE_WEBP; }
    /**
     * `multipart/byteranges` MIME 타입은 브라우저에 부분적 응답을 보내는 데 사용됩니다.  \
     *   \
     * {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Status/206 206 Partial Content} 상태 코드가 전송된 경우, MIME 타입은 문서가 각각의 요청된 범위들 중 하나인 몇 가지 파트들로 구성되어 있음을 알려주기 위해 사용됩니다.  \
     * 다른 다중부분 타입처럼, {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Content-Type Content-Type}은 이 조각들을 분리하기 위해 `boundary` 디렉티브를 사용합니다.  \
     * 각각의 다른 파트들은 문서의 실제 타입을 가진 {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Content-Type Content-Type} 헤더와 그들이 나타내는 범위를 가진 {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Content-Range Content-Range}를 지니고 있습니다.
     */
    static get MULTIPART_BYTERANGES() { return MIME.#MULTIPART_BYTERANGES; }
    /**
     * `multipart/form-data`은 브라우저에서 서버로 완성된 {@link https://developer.mozilla.org/ko/docs/Learn_web_development/Extensions/Forms HTML Form}의 내용을 전송 시 사용할 수 있습니다.  \
     *   \
     * 다중부분 문서 형식으로써, 경계(이중 대시 `'--'` 로 시작되는 문자열)로 구분되어지는 다른 파트들로 구성됩니다.  \
     * 각 파트는 그 자체로 개체이며 자신만의 HTTP 헤더를 가지는데, 파일 업로드 필드를 위한 헤더로는 {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Content-Disposition Content-Disposition}, {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Content-Type Content-Type}이 있습니다.
     */
    static get MULTIPART_FORM_DATA() { return MIME.#MULTIPART_FORM_DATA; }
    /** iCalendar format */
    static get TEXT_CALENDAR() { return MIME.#TEXT_CALENDAR; }
    /** 종속 스타일 시트 (CSS) */
    static get TEXT_CSS() { return MIME.#TEXT_CSS; }
    /** 쉼표로 구분된 값 (CSV) */
    static get TEXT_CSV() { return MIME.#TEXT_CSV; }
    /** HyperText Markup Language (HTML) */
    static get TEXT_HTML() { return MIME.#TEXT_HTML; }
    /**
     * JavaScript  \
     * JavaScript 모듈
     */
    static get TEXT_JAVASCRIPT() { return MIME.#TEXT_JAVASCRIPT; }
    /** Text, (일반적으로 {@link https://developer.mozilla.org/ko/docs/Glossary/ASCII ASCII} 또는 ISO 8859-n) */
    static get TEXT_PLAIN() { return MIME.#TEXT_PLAIN; }
    /** XML */
    static get TEXT_XML() { return MIME.#TEXT_XML; }
    /** {@link https://en.wikipedia.org/wiki/3GP_and_3G2 3GPP} video container */
    static get VIDEO_3GPP() { return MIME.#VIDEO_3GPP; }
    /** {@link https://en.wikipedia.org/wiki/3GP_and_3G2 3GPP2} video container */
    static get VIDEO_3GPP2() { return MIME.#VIDEO_3GPP2; }
    /** MPEG 전송 스트림 */
    static get VIDEO_MP2T() { return MIME.#VIDEO_MP2T; }
    /** MP4 비디오 */
    static get VIDEO_MP4() { return MIME.#VIDEO_MP4; }
    /** MPEG 비디오 */
    static get VIDEO_MPEG() { return MIME.#VIDEO_MPEG; }
    /** OGG 비디오 */
    static get VIDEO_OGG() { return MIME.#VIDEO_OGG; }
    /** WEBM video */
    static get VIDEO_WEBM() { return MIME.#VIDEO_WEBM; }
    /** AVI: 오디오 비디오 인터리브(Audio Video Interleave) */
    static get VIDEO_X_MSVIDEO() { return MIME.#VIDEO_X_MSVIDEO; }
    #name;
    #ext;
    #type;
    get name() { return this.#name; }
    get ext() { return [...this.#ext]; }
    get type() { return this.#type; }
    constructor(value, name, ext, type) {
        super(value);
        this.#name = name;
        this.#ext = ext;
        this.#type = type;
    }
}


/***/ }),

/***/ "./dist/type.js":
/*!**********************!*\
  !*** ./dist/type.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Type)
/* harmony export */ });
/* harmony import */ var _nuka9510_simple_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nuka9510/simple-enum */ "./node_modules/@nuka9510/simple-enum/dist/esm/index.min.mjs");

class Type extends _nuka9510_simple_enum__WEBPACK_IMPORTED_MODULE_0__.Enum {
    static #APPLICATION = new Type('application', 'APPLICATION');
    static #AUDIO = new Type('audio', 'AUDIO');
    static #EXAMPLE = new Type('example', 'EXAMPLE');
    static #FONT = new Type('font', 'FONT');
    static #IMAGE = new Type('image', 'IMAGE');
    static #MESSAGE = new Type('message', 'MESSAGE');
    static #MODEL = new Type('model', 'MODEL');
    static #MULTIPART = new Type('multipart', 'MULTIPART');
    static #TEXT = new Type('text', 'TEXT');
    static #VIDEO = new Type('video', 'VIDEO');
    /**
     * 다른 타입 중 하나에 명시적으로 속하지 않는, 모든 종류의 이진 데이터입니다.  \
     * 어떤 방식으로든 실행되거나 해석될 데이터 또는 특정 어플리케이션이나 어플리케이션 범위를 사용해야 하는 이진 데이터 입니다.  \
     * 일반 이진 데이터(또는 실제 타입을 알 수 없는 이진 데이터)는 `application/octet-stream`입니다.  \
     * 다른 일반적인 예로는 `application/pdf`, `application/pkcs8` 및 `application/zip`을 들 수 있습니다.  \
     * {@link https://www.iana.org/assignments/media-types/media-types.xhtml#application (IANA에서 애플리케이션 타입 레지스트리를 확인하세요)}
     */
    static get APPLICATION() { return Type.#APPLICATION; }
    /**
     * 오디오 또는 음악 데이터입니다.  \
     * 예로는 `audio/mpeg`, `audio/vorbis`를 들 수 있습니다.  \
     * {@link https://www.iana.org/assignments/media-types/media-types.xhtml#audio (IANA에서 오디오 타입 레지스트리를 확인하세요)}
     */
    static get AUDIO() { return Type.#AUDIO; }
    /**
     * MIME 타입을 사용하는 방법을 보여주는 예제에서, 자리 표시자로 사용하도록 예약되어 있습니다.  \
     * 이 타입은 샘플 코드 목록 및 문서 외부에서 사용되어선 안 됩니다.  \
     * `example`은 하위 타입으로도 사용될 수 있습니다.  \
     * 예를 들어, 웹에서 오디오 작업과 관련된 경우, MIME 타입 `audio/example`은 해당 타입이 자리 표시자임을 나타내기 위해 사용될 수 있고, 실제 코드를 사용할 때 적절한 타입으로 대체되어야 합니다.
     */
    static get EXAMPLE() { return Type.#EXAMPLE; }
    /**
     * 글꼴/서체 데이터입니다.  \
     * 일반적인 예로 `font/woff`, `font/ttf` 및 `font/otf`를 들 수 있습니다.  \
     * {@link https://www.iana.org/assignments/media-types/media-types.xhtml#font (IANA에서 글꼴 타입 레지스트리를 확인하세요)}
     */
    static get FONT() { return Type.#FONT; }
    /**
     * 비트맵과 벡터 정지 이미지를 모두 포함하는 이미지 또는 그래픽 데이터 애니메이션 {@link https://developer.mozilla.org/ko/docs/Glossary/GIF GIF} 또는 APNG와 같은 정지 이미지 형식의 애니메이션 버전입니다.  \
     * 일반적인 예로`image/jpeg`, `image/png` 및 `image/svg+xml`를 들 수 있습니다.  \
     * {@link https://www.iana.org/assignments/media-types/media-types.xhtml#image (IANA에서 이미지 타입 레지스트리를 확인하세요)}
     */
    static get IMAGE() { return Type.#IMAGE; }
    /**
     * 다른 메시지를 캡슐화하는 메시지입니다.  \
     * 예를 들어, 데이터의 일부로 전달된 메시지가 포함되어 있는 이메일을 나타내는 데 사용할 수 있거나 또는 마치 여러 메시지인 것럼 매우 큰 메시지를 청크로 나누어 보낼 수 있습니다.  \
     * 예를 들어, 데이터의 일부로 전달된 메시지가 포함된 이메일을 나타내는 데 사용할 수 있습니다.  \
     * 또는 마치 여러 메시지인 것처럼 매우 큰 메시지를 청크로 나누어 보낼 수 있습니다.  \
     * 예를 들면, `message/rfc822` (전달되거나 회신된 메시지 인용) 및 `message/partial`을 포함하여 큰 메시지를 자동으로 작은 메시지로 나누어 수신자가 재조립할 수 있도록 합니다.  \
     * {@link https://www.iana.org/assignments/media-types/media-types.xhtml#message (IANA에서 메시지 타입 레지스트리를 확인하세요)}
     */
    static get MESSAGE() { return Type.#MESSAGE; }
    /**
     * 3D 객체 또는 화면에 대한 모델 데이터입니다.  \
     * 일반적인 예로 `model/3mf` 및 `model/vrml`를 들 수 있습니다.  \
     * {@link https://www.iana.org/assignments/media-types/media-types.xhtml#model (IANA에서 모델 타입 레지스트리를 확인하세요)}
     */
    static get MODEL() { return Type.#MODEL; }
    /**
     * 개별적으로 서로 다른 MIME 타입을 가질 수 있는 여러 컴포넌트로 구성된 데이터입니다.  \
     * 예를 들어 `multipart/form-data` ({@link https://developer.mozilla.org/ko/docs/Web/API/FormData FormData} API를 사용해 생성된 데이터의 경우) 및 `multipart/byteranges` (defined in {@link https://datatracker.ietf.org/doc/html/rfc7233#section-5.4.1 RFC 7233, 섹션 5.4.1}에 정의되어 있고 {@link https://developer.mozilla.org/ko/docs/Glossary/HTTP HTTP}의 {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Status/206 206} "Partial Content"와 함께 사용됩니다.  \
     * 가져온 데이터는 {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Range Range} 헤더를 사용하여 전달되는 것과 같이 콘텐츠의 일부일 뿐입니다).  \
     * {@link https://www.iana.org/assignments/media-types/media-types.xhtml#multipart (IANA에서 Multipart 타입 레지스트리를 참조하세요)}
     */
    static get MULTIPART() { return Type.#MULTIPART; }
    /**
     * 사람이 읽을 수 있는 콘텐츠, 소스 코드 또는 쉼표로 구분된 값 (CSV) 형태 데이터와 같은, 텍스트 형식의 데이터를 가지는 텍스트 전용 데이터입니다.  \
     * 예로는 `text/plain`, `text/csv` 및 `text/html`이 있습니다.  \
     * {@link https://www.iana.org/assignments/media-types/media-types.xhtml#text (IANA에서 텍스트 타입 레지스트리를 확인하세요)}
     */
    static get TEXT() { return Type.#TEXT; }
    /**
     * MP4 영화(`video/mp4`)와 같은 비디오 데이터 또는 파일입니다.  \
     * {@link https://www.iana.org/assignments/media-types/media-types.xhtml#video (IANA에서 비디오 타입 레지스트리를 확인하세요)}
     */
    static get VIDEO() { return Type.#VIDEO; }
    #name;
    get name() { return this.#name; }
    constructor(value, name) {
        super(value);
        this.#name = name;
    }
}


/***/ }),

/***/ "./node_modules/@nuka9510/simple-enum/dist/esm/index.min.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@nuka9510/simple-enum/dist/esm/index.min.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Enum: () => (/* binding */ v)
/* harmony export */ });
var r=function(){return r=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},r.apply(this,arguments)};function e(e,t){for(var a={},o={},s=e.split("~~"),i=!1,l=0;s.length>l;l++){for(var c=s[l].split("~"),n=0;n<c.length;n+=2){var u=c[n],p=c[n+1],g="&"+u+";";a[g]=p,i&&(a["&"+u]=p),o[p]=g}i=!0}return t?{entities:r(r({},a),t.entities),characters:r(r({},o),t.characters)}:{entities:a,characters:o}}var t={xml:/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g},a={};a.xml=e("lt~<~gt~>~quot~\"~apos~'~amp~&"),a.html4=e("apos~'~OElig~Œ~oelig~œ~Scaron~Š~scaron~š~Yuml~Ÿ~circ~ˆ~tilde~˜~ensp~ ~emsp~ ~thinsp~ ~zwnj~‌~zwj~‍~lrm~‎~rlm~‏~ndash~–~mdash~—~lsquo~‘~rsquo~’~sbquo~‚~ldquo~“~rdquo~”~bdquo~„~dagger~†~Dagger~‡~permil~‰~lsaquo~‹~rsaquo~›~euro~€~fnof~ƒ~Alpha~Α~Beta~Β~Gamma~Γ~Delta~Δ~Epsilon~Ε~Zeta~Ζ~Eta~Η~Theta~Θ~Iota~Ι~Kappa~Κ~Lambda~Λ~Mu~Μ~Nu~Ν~Xi~Ξ~Omicron~Ο~Pi~Π~Rho~Ρ~Sigma~Σ~Tau~Τ~Upsilon~Υ~Phi~Φ~Chi~Χ~Psi~Ψ~Omega~Ω~alpha~α~beta~β~gamma~γ~delta~δ~epsilon~ε~zeta~ζ~eta~η~theta~θ~iota~ι~kappa~κ~lambda~λ~mu~μ~nu~ν~xi~ξ~omicron~ο~pi~π~rho~ρ~sigmaf~ς~sigma~σ~tau~τ~upsilon~υ~phi~φ~chi~χ~psi~ψ~omega~ω~thetasym~ϑ~upsih~ϒ~piv~ϖ~bull~•~hellip~…~prime~′~Prime~″~oline~‾~frasl~⁄~weierp~℘~image~ℑ~real~ℜ~trade~™~alefsym~ℵ~larr~←~uarr~↑~rarr~→~darr~↓~harr~↔~crarr~↵~lArr~⇐~uArr~⇑~rArr~⇒~dArr~⇓~hArr~⇔~forall~∀~part~∂~exist~∃~empty~∅~nabla~∇~isin~∈~notin~∉~ni~∋~prod~∏~sum~∑~minus~−~lowast~∗~radic~√~prop~∝~infin~∞~ang~∠~and~∧~or~∨~cap~∩~cup~∪~int~∫~there4~∴~sim~∼~cong~≅~asymp~≈~ne~≠~equiv~≡~le~≤~ge~≥~sub~⊂~sup~⊃~nsub~⊄~sube~⊆~supe~⊇~oplus~⊕~otimes~⊗~perp~⊥~sdot~⋅~lceil~⌈~rceil~⌉~lfloor~⌊~rfloor~⌋~lang~〈~rang~〉~loz~◊~spades~♠~clubs~♣~hearts~♥~diams~♦~~nbsp~ ~iexcl~¡~cent~¢~pound~£~curren~¤~yen~¥~brvbar~¦~sect~§~uml~¨~copy~©~ordf~ª~laquo~«~not~¬~shy~­~reg~®~macr~¯~deg~°~plusmn~±~sup2~²~sup3~³~acute~´~micro~µ~para~¶~middot~·~cedil~¸~sup1~¹~ordm~º~raquo~»~frac14~¼~frac12~½~frac34~¾~iquest~¿~Agrave~À~Aacute~Á~Acirc~Â~Atilde~Ã~Auml~Ä~Aring~Å~AElig~Æ~Ccedil~Ç~Egrave~È~Eacute~É~Ecirc~Ê~Euml~Ë~Igrave~Ì~Iacute~Í~Icirc~Î~Iuml~Ï~ETH~Ð~Ntilde~Ñ~Ograve~Ò~Oacute~Ó~Ocirc~Ô~Otilde~Õ~Ouml~Ö~times~×~Oslash~Ø~Ugrave~Ù~Uacute~Ú~Ucirc~Û~Uuml~Ü~Yacute~Ý~THORN~Þ~szlig~ß~agrave~à~aacute~á~acirc~â~atilde~ã~auml~ä~aring~å~aelig~æ~ccedil~ç~egrave~è~eacute~é~ecirc~ê~euml~ë~igrave~ì~iacute~í~icirc~î~iuml~ï~eth~ð~ntilde~ñ~ograve~ò~oacute~ó~ocirc~ô~otilde~õ~ouml~ö~divide~÷~oslash~ø~ugrave~ù~uacute~ú~ucirc~û~uuml~ü~yacute~ý~thorn~þ~yuml~ÿ~quot~\"~amp~&~lt~<~gt~>"),a.html5=e('Abreve~Ă~Acy~А~Afr~𝔄~Amacr~Ā~And~⩓~Aogon~Ą~Aopf~𝔸~ApplyFunction~⁡~Ascr~𝒜~Assign~≔~Backslash~∖~Barv~⫧~Barwed~⌆~Bcy~Б~Because~∵~Bernoullis~ℬ~Bfr~𝔅~Bopf~𝔹~Breve~˘~Bscr~ℬ~Bumpeq~≎~CHcy~Ч~Cacute~Ć~Cap~⋒~CapitalDifferentialD~ⅅ~Cayleys~ℭ~Ccaron~Č~Ccirc~Ĉ~Cconint~∰~Cdot~Ċ~Cedilla~¸~CenterDot~·~Cfr~ℭ~CircleDot~⊙~CircleMinus~⊖~CirclePlus~⊕~CircleTimes~⊗~ClockwiseContourIntegral~∲~CloseCurlyDoubleQuote~”~CloseCurlyQuote~’~Colon~∷~Colone~⩴~Congruent~≡~Conint~∯~ContourIntegral~∮~Copf~ℂ~Coproduct~∐~CounterClockwiseContourIntegral~∳~Cross~⨯~Cscr~𝒞~Cup~⋓~CupCap~≍~DD~ⅅ~DDotrahd~⤑~DJcy~Ђ~DScy~Ѕ~DZcy~Џ~Darr~↡~Dashv~⫤~Dcaron~Ď~Dcy~Д~Del~∇~Dfr~𝔇~DiacriticalAcute~´~DiacriticalDot~˙~DiacriticalDoubleAcute~˝~DiacriticalGrave~`~DiacriticalTilde~˜~Diamond~⋄~DifferentialD~ⅆ~Dopf~𝔻~Dot~¨~DotDot~⃜~DotEqual~≐~DoubleContourIntegral~∯~DoubleDot~¨~DoubleDownArrow~⇓~DoubleLeftArrow~⇐~DoubleLeftRightArrow~⇔~DoubleLeftTee~⫤~DoubleLongLeftArrow~⟸~DoubleLongLeftRightArrow~⟺~DoubleLongRightArrow~⟹~DoubleRightArrow~⇒~DoubleRightTee~⊨~DoubleUpArrow~⇑~DoubleUpDownArrow~⇕~DoubleVerticalBar~∥~DownArrow~↓~DownArrowBar~⤓~DownArrowUpArrow~⇵~DownBreve~̑~DownLeftRightVector~⥐~DownLeftTeeVector~⥞~DownLeftVector~↽~DownLeftVectorBar~⥖~DownRightTeeVector~⥟~DownRightVector~⇁~DownRightVectorBar~⥗~DownTee~⊤~DownTeeArrow~↧~Downarrow~⇓~Dscr~𝒟~Dstrok~Đ~ENG~Ŋ~Ecaron~Ě~Ecy~Э~Edot~Ė~Efr~𝔈~Element~∈~Emacr~Ē~EmptySmallSquare~◻~EmptyVerySmallSquare~▫~Eogon~Ę~Eopf~𝔼~Equal~⩵~EqualTilde~≂~Equilibrium~⇌~Escr~ℰ~Esim~⩳~Exists~∃~ExponentialE~ⅇ~Fcy~Ф~Ffr~𝔉~FilledSmallSquare~◼~FilledVerySmallSquare~▪~Fopf~𝔽~ForAll~∀~Fouriertrf~ℱ~Fscr~ℱ~GJcy~Ѓ~Gammad~Ϝ~Gbreve~Ğ~Gcedil~Ģ~Gcirc~Ĝ~Gcy~Г~Gdot~Ġ~Gfr~𝔊~Gg~⋙~Gopf~𝔾~GreaterEqual~≥~GreaterEqualLess~⋛~GreaterFullEqual~≧~GreaterGreater~⪢~GreaterLess~≷~GreaterSlantEqual~⩾~GreaterTilde~≳~Gscr~𝒢~Gt~≫~HARDcy~Ъ~Hacek~ˇ~Hat~^~Hcirc~Ĥ~Hfr~ℌ~HilbertSpace~ℋ~Hopf~ℍ~HorizontalLine~─~Hscr~ℋ~Hstrok~Ħ~HumpDownHump~≎~HumpEqual~≏~IEcy~Е~IJlig~Ĳ~IOcy~Ё~Icy~И~Idot~İ~Ifr~ℑ~Im~ℑ~Imacr~Ī~ImaginaryI~ⅈ~Implies~⇒~Int~∬~Integral~∫~Intersection~⋂~InvisibleComma~⁣~InvisibleTimes~⁢~Iogon~Į~Iopf~𝕀~Iscr~ℐ~Itilde~Ĩ~Iukcy~І~Jcirc~Ĵ~Jcy~Й~Jfr~𝔍~Jopf~𝕁~Jscr~𝒥~Jsercy~Ј~Jukcy~Є~KHcy~Х~KJcy~Ќ~Kcedil~Ķ~Kcy~К~Kfr~𝔎~Kopf~𝕂~Kscr~𝒦~LJcy~Љ~Lacute~Ĺ~Lang~⟪~Laplacetrf~ℒ~Larr~↞~Lcaron~Ľ~Lcedil~Ļ~Lcy~Л~LeftAngleBracket~⟨~LeftArrow~←~LeftArrowBar~⇤~LeftArrowRightArrow~⇆~LeftCeiling~⌈~LeftDoubleBracket~⟦~LeftDownTeeVector~⥡~LeftDownVector~⇃~LeftDownVectorBar~⥙~LeftFloor~⌊~LeftRightArrow~↔~LeftRightVector~⥎~LeftTee~⊣~LeftTeeArrow~↤~LeftTeeVector~⥚~LeftTriangle~⊲~LeftTriangleBar~⧏~LeftTriangleEqual~⊴~LeftUpDownVector~⥑~LeftUpTeeVector~⥠~LeftUpVector~↿~LeftUpVectorBar~⥘~LeftVector~↼~LeftVectorBar~⥒~Leftarrow~⇐~Leftrightarrow~⇔~LessEqualGreater~⋚~LessFullEqual~≦~LessGreater~≶~LessLess~⪡~LessSlantEqual~⩽~LessTilde~≲~Lfr~𝔏~Ll~⋘~Lleftarrow~⇚~Lmidot~Ŀ~LongLeftArrow~⟵~LongLeftRightArrow~⟷~LongRightArrow~⟶~Longleftarrow~⟸~Longleftrightarrow~⟺~Longrightarrow~⟹~Lopf~𝕃~LowerLeftArrow~↙~LowerRightArrow~↘~Lscr~ℒ~Lsh~↰~Lstrok~Ł~Lt~≪~Map~⤅~Mcy~М~MediumSpace~ ~Mellintrf~ℳ~Mfr~𝔐~MinusPlus~∓~Mopf~𝕄~Mscr~ℳ~NJcy~Њ~Nacute~Ń~Ncaron~Ň~Ncedil~Ņ~Ncy~Н~NegativeMediumSpace~​~NegativeThickSpace~​~NegativeThinSpace~​~NegativeVeryThinSpace~​~NestedGreaterGreater~≫~NestedLessLess~≪~NewLine~\n~Nfr~𝔑~NoBreak~⁠~NonBreakingSpace~ ~Nopf~ℕ~Not~⫬~NotCongruent~≢~NotCupCap~≭~NotDoubleVerticalBar~∦~NotElement~∉~NotEqual~≠~NotEqualTilde~≂̸~NotExists~∄~NotGreater~≯~NotGreaterEqual~≱~NotGreaterFullEqual~≧̸~NotGreaterGreater~≫̸~NotGreaterLess~≹~NotGreaterSlantEqual~⩾̸~NotGreaterTilde~≵~NotHumpDownHump~≎̸~NotHumpEqual~≏̸~NotLeftTriangle~⋪~NotLeftTriangleBar~⧏̸~NotLeftTriangleEqual~⋬~NotLess~≮~NotLessEqual~≰~NotLessGreater~≸~NotLessLess~≪̸~NotLessSlantEqual~⩽̸~NotLessTilde~≴~NotNestedGreaterGreater~⪢̸~NotNestedLessLess~⪡̸~NotPrecedes~⊀~NotPrecedesEqual~⪯̸~NotPrecedesSlantEqual~⋠~NotReverseElement~∌~NotRightTriangle~⋫~NotRightTriangleBar~⧐̸~NotRightTriangleEqual~⋭~NotSquareSubset~⊏̸~NotSquareSubsetEqual~⋢~NotSquareSuperset~⊐̸~NotSquareSupersetEqual~⋣~NotSubset~⊂⃒~NotSubsetEqual~⊈~NotSucceeds~⊁~NotSucceedsEqual~⪰̸~NotSucceedsSlantEqual~⋡~NotSucceedsTilde~≿̸~NotSuperset~⊃⃒~NotSupersetEqual~⊉~NotTilde~≁~NotTildeEqual~≄~NotTildeFullEqual~≇~NotTildeTilde~≉~NotVerticalBar~∤~Nscr~𝒩~Ocy~О~Odblac~Ő~Ofr~𝔒~Omacr~Ō~Oopf~𝕆~OpenCurlyDoubleQuote~“~OpenCurlyQuote~‘~Or~⩔~Oscr~𝒪~Otimes~⨷~OverBar~‾~OverBrace~⏞~OverBracket~⎴~OverParenthesis~⏜~PartialD~∂~Pcy~П~Pfr~𝔓~PlusMinus~±~Poincareplane~ℌ~Popf~ℙ~Pr~⪻~Precedes~≺~PrecedesEqual~⪯~PrecedesSlantEqual~≼~PrecedesTilde~≾~Product~∏~Proportion~∷~Proportional~∝~Pscr~𝒫~Qfr~𝔔~Qopf~ℚ~Qscr~𝒬~RBarr~⤐~Racute~Ŕ~Rang~⟫~Rarr~↠~Rarrtl~⤖~Rcaron~Ř~Rcedil~Ŗ~Rcy~Р~Re~ℜ~ReverseElement~∋~ReverseEquilibrium~⇋~ReverseUpEquilibrium~⥯~Rfr~ℜ~RightAngleBracket~⟩~RightArrow~→~RightArrowBar~⇥~RightArrowLeftArrow~⇄~RightCeiling~⌉~RightDoubleBracket~⟧~RightDownTeeVector~⥝~RightDownVector~⇂~RightDownVectorBar~⥕~RightFloor~⌋~RightTee~⊢~RightTeeArrow~↦~RightTeeVector~⥛~RightTriangle~⊳~RightTriangleBar~⧐~RightTriangleEqual~⊵~RightUpDownVector~⥏~RightUpTeeVector~⥜~RightUpVector~↾~RightUpVectorBar~⥔~RightVector~⇀~RightVectorBar~⥓~Rightarrow~⇒~Ropf~ℝ~RoundImplies~⥰~Rrightarrow~⇛~Rscr~ℛ~Rsh~↱~RuleDelayed~⧴~SHCHcy~Щ~SHcy~Ш~SOFTcy~Ь~Sacute~Ś~Sc~⪼~Scedil~Ş~Scirc~Ŝ~Scy~С~Sfr~𝔖~ShortDownArrow~↓~ShortLeftArrow~←~ShortRightArrow~→~ShortUpArrow~↑~SmallCircle~∘~Sopf~𝕊~Sqrt~√~Square~□~SquareIntersection~⊓~SquareSubset~⊏~SquareSubsetEqual~⊑~SquareSuperset~⊐~SquareSupersetEqual~⊒~SquareUnion~⊔~Sscr~𝒮~Star~⋆~Sub~⋐~Subset~⋐~SubsetEqual~⊆~Succeeds~≻~SucceedsEqual~⪰~SucceedsSlantEqual~≽~SucceedsTilde~≿~SuchThat~∋~Sum~∑~Sup~⋑~Superset~⊃~SupersetEqual~⊇~Supset~⋑~TRADE~™~TSHcy~Ћ~TScy~Ц~Tab~\t~Tcaron~Ť~Tcedil~Ţ~Tcy~Т~Tfr~𝔗~Therefore~∴~ThickSpace~  ~ThinSpace~ ~Tilde~∼~TildeEqual~≃~TildeFullEqual~≅~TildeTilde~≈~Topf~𝕋~TripleDot~⃛~Tscr~𝒯~Tstrok~Ŧ~Uarr~↟~Uarrocir~⥉~Ubrcy~Ў~Ubreve~Ŭ~Ucy~У~Udblac~Ű~Ufr~𝔘~Umacr~Ū~UnderBar~_~UnderBrace~⏟~UnderBracket~⎵~UnderParenthesis~⏝~Union~⋃~UnionPlus~⊎~Uogon~Ų~Uopf~𝕌~UpArrow~↑~UpArrowBar~⤒~UpArrowDownArrow~⇅~UpDownArrow~↕~UpEquilibrium~⥮~UpTee~⊥~UpTeeArrow~↥~Uparrow~⇑~Updownarrow~⇕~UpperLeftArrow~↖~UpperRightArrow~↗~Upsi~ϒ~Uring~Ů~Uscr~𝒰~Utilde~Ũ~VDash~⊫~Vbar~⫫~Vcy~В~Vdash~⊩~Vdashl~⫦~Vee~⋁~Verbar~‖~Vert~‖~VerticalBar~∣~VerticalLine~|~VerticalSeparator~❘~VerticalTilde~≀~VeryThinSpace~ ~Vfr~𝔙~Vopf~𝕍~Vscr~𝒱~Vvdash~⊪~Wcirc~Ŵ~Wedge~⋀~Wfr~𝔚~Wopf~𝕎~Wscr~𝒲~Xfr~𝔛~Xopf~𝕏~Xscr~𝒳~YAcy~Я~YIcy~Ї~YUcy~Ю~Ycirc~Ŷ~Ycy~Ы~Yfr~𝔜~Yopf~𝕐~Yscr~𝒴~ZHcy~Ж~Zacute~Ź~Zcaron~Ž~Zcy~З~Zdot~Ż~ZeroWidthSpace~​~Zfr~ℨ~Zopf~ℤ~Zscr~𝒵~abreve~ă~ac~∾~acE~∾̳~acd~∿~acy~а~af~⁡~afr~𝔞~aleph~ℵ~amacr~ā~amalg~⨿~andand~⩕~andd~⩜~andslope~⩘~andv~⩚~ange~⦤~angle~∠~angmsd~∡~angmsdaa~⦨~angmsdab~⦩~angmsdac~⦪~angmsdad~⦫~angmsdae~⦬~angmsdaf~⦭~angmsdag~⦮~angmsdah~⦯~angrt~∟~angrtvb~⊾~angrtvbd~⦝~angsph~∢~angst~Å~angzarr~⍼~aogon~ą~aopf~𝕒~ap~≈~apE~⩰~apacir~⩯~ape~≊~apid~≋~approx~≈~approxeq~≊~ascr~𝒶~ast~*~asympeq~≍~awconint~∳~awint~⨑~bNot~⫭~backcong~≌~backepsilon~϶~backprime~‵~backsim~∽~backsimeq~⋍~barvee~⊽~barwed~⌅~barwedge~⌅~bbrk~⎵~bbrktbrk~⎶~bcong~≌~bcy~б~becaus~∵~because~∵~bemptyv~⦰~bepsi~϶~bernou~ℬ~beth~ℶ~between~≬~bfr~𝔟~bigcap~⋂~bigcirc~◯~bigcup~⋃~bigodot~⨀~bigoplus~⨁~bigotimes~⨂~bigsqcup~⨆~bigstar~★~bigtriangledown~▽~bigtriangleup~△~biguplus~⨄~bigvee~⋁~bigwedge~⋀~bkarow~⤍~blacklozenge~⧫~blacksquare~▪~blacktriangle~▴~blacktriangledown~▾~blacktriangleleft~◂~blacktriangleright~▸~blank~␣~blk12~▒~blk14~░~blk34~▓~block~█~bne~=⃥~bnequiv~≡⃥~bnot~⌐~bopf~𝕓~bot~⊥~bottom~⊥~bowtie~⋈~boxDL~╗~boxDR~╔~boxDl~╖~boxDr~╓~boxH~═~boxHD~╦~boxHU~╩~boxHd~╤~boxHu~╧~boxUL~╝~boxUR~╚~boxUl~╜~boxUr~╙~boxV~║~boxVH~╬~boxVL~╣~boxVR~╠~boxVh~╫~boxVl~╢~boxVr~╟~boxbox~⧉~boxdL~╕~boxdR~╒~boxdl~┐~boxdr~┌~boxh~─~boxhD~╥~boxhU~╨~boxhd~┬~boxhu~┴~boxminus~⊟~boxplus~⊞~boxtimes~⊠~boxuL~╛~boxuR~╘~boxul~┘~boxur~└~boxv~│~boxvH~╪~boxvL~╡~boxvR~╞~boxvh~┼~boxvl~┤~boxvr~├~bprime~‵~breve~˘~bscr~𝒷~bsemi~⁏~bsim~∽~bsime~⋍~bsol~\\~bsolb~⧅~bsolhsub~⟈~bullet~•~bump~≎~bumpE~⪮~bumpe~≏~bumpeq~≏~cacute~ć~capand~⩄~capbrcup~⩉~capcap~⩋~capcup~⩇~capdot~⩀~caps~∩︀~caret~⁁~caron~ˇ~ccaps~⩍~ccaron~č~ccirc~ĉ~ccups~⩌~ccupssm~⩐~cdot~ċ~cemptyv~⦲~centerdot~·~cfr~𝔠~chcy~ч~check~✓~checkmark~✓~cir~○~cirE~⧃~circeq~≗~circlearrowleft~↺~circlearrowright~↻~circledR~®~circledS~Ⓢ~circledast~⊛~circledcirc~⊚~circleddash~⊝~cire~≗~cirfnint~⨐~cirmid~⫯~cirscir~⧂~clubsuit~♣~colon~:~colone~≔~coloneq~≔~comma~,~commat~@~comp~∁~compfn~∘~complement~∁~complexes~ℂ~congdot~⩭~conint~∮~copf~𝕔~coprod~∐~copysr~℗~cross~✗~cscr~𝒸~csub~⫏~csube~⫑~csup~⫐~csupe~⫒~ctdot~⋯~cudarrl~⤸~cudarrr~⤵~cuepr~⋞~cuesc~⋟~cularr~↶~cularrp~⤽~cupbrcap~⩈~cupcap~⩆~cupcup~⩊~cupdot~⊍~cupor~⩅~cups~∪︀~curarr~↷~curarrm~⤼~curlyeqprec~⋞~curlyeqsucc~⋟~curlyvee~⋎~curlywedge~⋏~curvearrowleft~↶~curvearrowright~↷~cuvee~⋎~cuwed~⋏~cwconint~∲~cwint~∱~cylcty~⌭~dHar~⥥~daleth~ℸ~dash~‐~dashv~⊣~dbkarow~⤏~dblac~˝~dcaron~ď~dcy~д~dd~ⅆ~ddagger~‡~ddarr~⇊~ddotseq~⩷~demptyv~⦱~dfisht~⥿~dfr~𝔡~dharl~⇃~dharr~⇂~diam~⋄~diamond~⋄~diamondsuit~♦~die~¨~digamma~ϝ~disin~⋲~div~÷~divideontimes~⋇~divonx~⋇~djcy~ђ~dlcorn~⌞~dlcrop~⌍~dollar~$~dopf~𝕕~dot~˙~doteq~≐~doteqdot~≑~dotminus~∸~dotplus~∔~dotsquare~⊡~doublebarwedge~⌆~downarrow~↓~downdownarrows~⇊~downharpoonleft~⇃~downharpoonright~⇂~drbkarow~⤐~drcorn~⌟~drcrop~⌌~dscr~𝒹~dscy~ѕ~dsol~⧶~dstrok~đ~dtdot~⋱~dtri~▿~dtrif~▾~duarr~⇵~duhar~⥯~dwangle~⦦~dzcy~џ~dzigrarr~⟿~eDDot~⩷~eDot~≑~easter~⩮~ecaron~ě~ecir~≖~ecolon~≕~ecy~э~edot~ė~ee~ⅇ~efDot~≒~efr~𝔢~eg~⪚~egs~⪖~egsdot~⪘~el~⪙~elinters~⏧~ell~ℓ~els~⪕~elsdot~⪗~emacr~ē~emptyset~∅~emptyv~∅~emsp13~ ~emsp14~ ~eng~ŋ~eogon~ę~eopf~𝕖~epar~⋕~eparsl~⧣~eplus~⩱~epsi~ε~epsiv~ϵ~eqcirc~≖~eqcolon~≕~eqsim~≂~eqslantgtr~⪖~eqslantless~⪕~equals~=~equest~≟~equivDD~⩸~eqvparsl~⧥~erDot~≓~erarr~⥱~escr~ℯ~esdot~≐~esim~≂~excl~!~expectation~ℰ~exponentiale~ⅇ~fallingdotseq~≒~fcy~ф~female~♀~ffilig~ﬃ~fflig~ﬀ~ffllig~ﬄ~ffr~𝔣~filig~ﬁ~fjlig~fj~flat~♭~fllig~ﬂ~fltns~▱~fopf~𝕗~fork~⋔~forkv~⫙~fpartint~⨍~frac13~⅓~frac15~⅕~frac16~⅙~frac18~⅛~frac23~⅔~frac25~⅖~frac35~⅗~frac38~⅜~frac45~⅘~frac56~⅚~frac58~⅝~frac78~⅞~frown~⌢~fscr~𝒻~gE~≧~gEl~⪌~gacute~ǵ~gammad~ϝ~gap~⪆~gbreve~ğ~gcirc~ĝ~gcy~г~gdot~ġ~gel~⋛~geq~≥~geqq~≧~geqslant~⩾~ges~⩾~gescc~⪩~gesdot~⪀~gesdoto~⪂~gesdotol~⪄~gesl~⋛︀~gesles~⪔~gfr~𝔤~gg~≫~ggg~⋙~gimel~ℷ~gjcy~ѓ~gl~≷~glE~⪒~gla~⪥~glj~⪤~gnE~≩~gnap~⪊~gnapprox~⪊~gne~⪈~gneq~⪈~gneqq~≩~gnsim~⋧~gopf~𝕘~grave~`~gscr~ℊ~gsim~≳~gsime~⪎~gsiml~⪐~gtcc~⪧~gtcir~⩺~gtdot~⋗~gtlPar~⦕~gtquest~⩼~gtrapprox~⪆~gtrarr~⥸~gtrdot~⋗~gtreqless~⋛~gtreqqless~⪌~gtrless~≷~gtrsim~≳~gvertneqq~≩︀~gvnE~≩︀~hairsp~ ~half~½~hamilt~ℋ~hardcy~ъ~harrcir~⥈~harrw~↭~hbar~ℏ~hcirc~ĥ~heartsuit~♥~hercon~⊹~hfr~𝔥~hksearow~⤥~hkswarow~⤦~hoarr~⇿~homtht~∻~hookleftarrow~↩~hookrightarrow~↪~hopf~𝕙~horbar~―~hscr~𝒽~hslash~ℏ~hstrok~ħ~hybull~⁃~hyphen~‐~ic~⁣~icy~и~iecy~е~iff~⇔~ifr~𝔦~ii~ⅈ~iiiint~⨌~iiint~∭~iinfin~⧜~iiota~℩~ijlig~ĳ~imacr~ī~imagline~ℐ~imagpart~ℑ~imath~ı~imof~⊷~imped~Ƶ~in~∈~incare~℅~infintie~⧝~inodot~ı~intcal~⊺~integers~ℤ~intercal~⊺~intlarhk~⨗~intprod~⨼~iocy~ё~iogon~į~iopf~𝕚~iprod~⨼~iscr~𝒾~isinE~⋹~isindot~⋵~isins~⋴~isinsv~⋳~isinv~∈~it~⁢~itilde~ĩ~iukcy~і~jcirc~ĵ~jcy~й~jfr~𝔧~jmath~ȷ~jopf~𝕛~jscr~𝒿~jsercy~ј~jukcy~є~kappav~ϰ~kcedil~ķ~kcy~к~kfr~𝔨~kgreen~ĸ~khcy~х~kjcy~ќ~kopf~𝕜~kscr~𝓀~lAarr~⇚~lAtail~⤛~lBarr~⤎~lE~≦~lEg~⪋~lHar~⥢~lacute~ĺ~laemptyv~⦴~lagran~ℒ~langd~⦑~langle~⟨~lap~⪅~larrb~⇤~larrbfs~⤟~larrfs~⤝~larrhk~↩~larrlp~↫~larrpl~⤹~larrsim~⥳~larrtl~↢~lat~⪫~latail~⤙~late~⪭~lates~⪭︀~lbarr~⤌~lbbrk~❲~lbrace~{~lbrack~[~lbrke~⦋~lbrksld~⦏~lbrkslu~⦍~lcaron~ľ~lcedil~ļ~lcub~{~lcy~л~ldca~⤶~ldquor~„~ldrdhar~⥧~ldrushar~⥋~ldsh~↲~leftarrow~←~leftarrowtail~↢~leftharpoondown~↽~leftharpoonup~↼~leftleftarrows~⇇~leftrightarrow~↔~leftrightarrows~⇆~leftrightharpoons~⇋~leftrightsquigarrow~↭~leftthreetimes~⋋~leg~⋚~leq~≤~leqq~≦~leqslant~⩽~les~⩽~lescc~⪨~lesdot~⩿~lesdoto~⪁~lesdotor~⪃~lesg~⋚︀~lesges~⪓~lessapprox~⪅~lessdot~⋖~lesseqgtr~⋚~lesseqqgtr~⪋~lessgtr~≶~lesssim~≲~lfisht~⥼~lfr~𝔩~lg~≶~lgE~⪑~lhard~↽~lharu~↼~lharul~⥪~lhblk~▄~ljcy~љ~ll~≪~llarr~⇇~llcorner~⌞~llhard~⥫~lltri~◺~lmidot~ŀ~lmoust~⎰~lmoustache~⎰~lnE~≨~lnap~⪉~lnapprox~⪉~lne~⪇~lneq~⪇~lneqq~≨~lnsim~⋦~loang~⟬~loarr~⇽~lobrk~⟦~longleftarrow~⟵~longleftrightarrow~⟷~longmapsto~⟼~longrightarrow~⟶~looparrowleft~↫~looparrowright~↬~lopar~⦅~lopf~𝕝~loplus~⨭~lotimes~⨴~lowbar~_~lozenge~◊~lozf~⧫~lpar~(~lparlt~⦓~lrarr~⇆~lrcorner~⌟~lrhar~⇋~lrhard~⥭~lrtri~⊿~lscr~𝓁~lsh~↰~lsim~≲~lsime~⪍~lsimg~⪏~lsqb~[~lsquor~‚~lstrok~ł~ltcc~⪦~ltcir~⩹~ltdot~⋖~lthree~⋋~ltimes~⋉~ltlarr~⥶~ltquest~⩻~ltrPar~⦖~ltri~◃~ltrie~⊴~ltrif~◂~lurdshar~⥊~luruhar~⥦~lvertneqq~≨︀~lvnE~≨︀~mDDot~∺~male~♂~malt~✠~maltese~✠~map~↦~mapsto~↦~mapstodown~↧~mapstoleft~↤~mapstoup~↥~marker~▮~mcomma~⨩~mcy~м~measuredangle~∡~mfr~𝔪~mho~℧~mid~∣~midast~*~midcir~⫰~minusb~⊟~minusd~∸~minusdu~⨪~mlcp~⫛~mldr~…~mnplus~∓~models~⊧~mopf~𝕞~mp~∓~mscr~𝓂~mstpos~∾~multimap~⊸~mumap~⊸~nGg~⋙̸~nGt~≫⃒~nGtv~≫̸~nLeftarrow~⇍~nLeftrightarrow~⇎~nLl~⋘̸~nLt~≪⃒~nLtv~≪̸~nRightarrow~⇏~nVDash~⊯~nVdash~⊮~nacute~ń~nang~∠⃒~nap~≉~napE~⩰̸~napid~≋̸~napos~ŉ~napprox~≉~natur~♮~natural~♮~naturals~ℕ~nbump~≎̸~nbumpe~≏̸~ncap~⩃~ncaron~ň~ncedil~ņ~ncong~≇~ncongdot~⩭̸~ncup~⩂~ncy~н~neArr~⇗~nearhk~⤤~nearr~↗~nearrow~↗~nedot~≐̸~nequiv~≢~nesear~⤨~nesim~≂̸~nexist~∄~nexists~∄~nfr~𝔫~ngE~≧̸~nge~≱~ngeq~≱~ngeqq~≧̸~ngeqslant~⩾̸~nges~⩾̸~ngsim~≵~ngt~≯~ngtr~≯~nhArr~⇎~nharr~↮~nhpar~⫲~nis~⋼~nisd~⋺~niv~∋~njcy~њ~nlArr~⇍~nlE~≦̸~nlarr~↚~nldr~‥~nle~≰~nleftarrow~↚~nleftrightarrow~↮~nleq~≰~nleqq~≦̸~nleqslant~⩽̸~nles~⩽̸~nless~≮~nlsim~≴~nlt~≮~nltri~⋪~nltrie~⋬~nmid~∤~nopf~𝕟~notinE~⋹̸~notindot~⋵̸~notinva~∉~notinvb~⋷~notinvc~⋶~notni~∌~notniva~∌~notnivb~⋾~notnivc~⋽~npar~∦~nparallel~∦~nparsl~⫽⃥~npart~∂̸~npolint~⨔~npr~⊀~nprcue~⋠~npre~⪯̸~nprec~⊀~npreceq~⪯̸~nrArr~⇏~nrarr~↛~nrarrc~⤳̸~nrarrw~↝̸~nrightarrow~↛~nrtri~⋫~nrtrie~⋭~nsc~⊁~nsccue~⋡~nsce~⪰̸~nscr~𝓃~nshortmid~∤~nshortparallel~∦~nsim~≁~nsime~≄~nsimeq~≄~nsmid~∤~nspar~∦~nsqsube~⋢~nsqsupe~⋣~nsubE~⫅̸~nsube~⊈~nsubset~⊂⃒~nsubseteq~⊈~nsubseteqq~⫅̸~nsucc~⊁~nsucceq~⪰̸~nsup~⊅~nsupE~⫆̸~nsupe~⊉~nsupset~⊃⃒~nsupseteq~⊉~nsupseteqq~⫆̸~ntgl~≹~ntlg~≸~ntriangleleft~⋪~ntrianglelefteq~⋬~ntriangleright~⋫~ntrianglerighteq~⋭~num~#~numero~№~numsp~ ~nvDash~⊭~nvHarr~⤄~nvap~≍⃒~nvdash~⊬~nvge~≥⃒~nvgt~>⃒~nvinfin~⧞~nvlArr~⤂~nvle~≤⃒~nvlt~<⃒~nvltrie~⊴⃒~nvrArr~⤃~nvrtrie~⊵⃒~nvsim~∼⃒~nwArr~⇖~nwarhk~⤣~nwarr~↖~nwarrow~↖~nwnear~⤧~oS~Ⓢ~oast~⊛~ocir~⊚~ocy~о~odash~⊝~odblac~ő~odiv~⨸~odot~⊙~odsold~⦼~ofcir~⦿~ofr~𝔬~ogon~˛~ogt~⧁~ohbar~⦵~ohm~Ω~oint~∮~olarr~↺~olcir~⦾~olcross~⦻~olt~⧀~omacr~ō~omid~⦶~ominus~⊖~oopf~𝕠~opar~⦷~operp~⦹~orarr~↻~ord~⩝~order~ℴ~orderof~ℴ~origof~⊶~oror~⩖~orslope~⩗~orv~⩛~oscr~ℴ~osol~⊘~otimesas~⨶~ovbar~⌽~par~∥~parallel~∥~parsim~⫳~parsl~⫽~pcy~п~percnt~%~period~.~pertenk~‱~pfr~𝔭~phiv~ϕ~phmmat~ℳ~phone~☎~pitchfork~⋔~planck~ℏ~planckh~ℎ~plankv~ℏ~plus~+~plusacir~⨣~plusb~⊞~pluscir~⨢~plusdo~∔~plusdu~⨥~pluse~⩲~plussim~⨦~plustwo~⨧~pm~±~pointint~⨕~popf~𝕡~pr~≺~prE~⪳~prap~⪷~prcue~≼~pre~⪯~prec~≺~precapprox~⪷~preccurlyeq~≼~preceq~⪯~precnapprox~⪹~precneqq~⪵~precnsim~⋨~precsim~≾~primes~ℙ~prnE~⪵~prnap~⪹~prnsim~⋨~profalar~⌮~profline~⌒~profsurf~⌓~propto~∝~prsim~≾~prurel~⊰~pscr~𝓅~puncsp~ ~qfr~𝔮~qint~⨌~qopf~𝕢~qprime~⁗~qscr~𝓆~quaternions~ℍ~quatint~⨖~quest~?~questeq~≟~rAarr~⇛~rAtail~⤜~rBarr~⤏~rHar~⥤~race~∽̱~racute~ŕ~raemptyv~⦳~rangd~⦒~range~⦥~rangle~⟩~rarrap~⥵~rarrb~⇥~rarrbfs~⤠~rarrc~⤳~rarrfs~⤞~rarrhk~↪~rarrlp~↬~rarrpl~⥅~rarrsim~⥴~rarrtl~↣~rarrw~↝~ratail~⤚~ratio~∶~rationals~ℚ~rbarr~⤍~rbbrk~❳~rbrace~}~rbrack~]~rbrke~⦌~rbrksld~⦎~rbrkslu~⦐~rcaron~ř~rcedil~ŗ~rcub~}~rcy~р~rdca~⤷~rdldhar~⥩~rdquor~”~rdsh~↳~realine~ℛ~realpart~ℜ~reals~ℝ~rect~▭~rfisht~⥽~rfr~𝔯~rhard~⇁~rharu~⇀~rharul~⥬~rhov~ϱ~rightarrow~→~rightarrowtail~↣~rightharpoondown~⇁~rightharpoonup~⇀~rightleftarrows~⇄~rightleftharpoons~⇌~rightrightarrows~⇉~rightsquigarrow~↝~rightthreetimes~⋌~ring~˚~risingdotseq~≓~rlarr~⇄~rlhar~⇌~rmoust~⎱~rmoustache~⎱~rnmid~⫮~roang~⟭~roarr~⇾~robrk~⟧~ropar~⦆~ropf~𝕣~roplus~⨮~rotimes~⨵~rpar~)~rpargt~⦔~rppolint~⨒~rrarr~⇉~rscr~𝓇~rsh~↱~rsqb~]~rsquor~’~rthree~⋌~rtimes~⋊~rtri~▹~rtrie~⊵~rtrif~▸~rtriltri~⧎~ruluhar~⥨~rx~℞~sacute~ś~sc~≻~scE~⪴~scap~⪸~sccue~≽~sce~⪰~scedil~ş~scirc~ŝ~scnE~⪶~scnap~⪺~scnsim~⋩~scpolint~⨓~scsim~≿~scy~с~sdotb~⊡~sdote~⩦~seArr~⇘~searhk~⤥~searr~↘~searrow~↘~semi~;~seswar~⤩~setminus~∖~setmn~∖~sext~✶~sfr~𝔰~sfrown~⌢~sharp~♯~shchcy~щ~shcy~ш~shortmid~∣~shortparallel~∥~sigmav~ς~simdot~⩪~sime~≃~simeq~≃~simg~⪞~simgE~⪠~siml~⪝~simlE~⪟~simne~≆~simplus~⨤~simrarr~⥲~slarr~←~smallsetminus~∖~smashp~⨳~smeparsl~⧤~smid~∣~smile~⌣~smt~⪪~smte~⪬~smtes~⪬︀~softcy~ь~sol~/~solb~⧄~solbar~⌿~sopf~𝕤~spadesuit~♠~spar~∥~sqcap~⊓~sqcaps~⊓︀~sqcup~⊔~sqcups~⊔︀~sqsub~⊏~sqsube~⊑~sqsubset~⊏~sqsubseteq~⊑~sqsup~⊐~sqsupe~⊒~sqsupset~⊐~sqsupseteq~⊒~squ~□~square~□~squarf~▪~squf~▪~srarr~→~sscr~𝓈~ssetmn~∖~ssmile~⌣~sstarf~⋆~star~☆~starf~★~straightepsilon~ϵ~straightphi~ϕ~strns~¯~subE~⫅~subdot~⪽~subedot~⫃~submult~⫁~subnE~⫋~subne~⊊~subplus~⪿~subrarr~⥹~subset~⊂~subseteq~⊆~subseteqq~⫅~subsetneq~⊊~subsetneqq~⫋~subsim~⫇~subsub~⫕~subsup~⫓~succ~≻~succapprox~⪸~succcurlyeq~≽~succeq~⪰~succnapprox~⪺~succneqq~⪶~succnsim~⋩~succsim~≿~sung~♪~supE~⫆~supdot~⪾~supdsub~⫘~supedot~⫄~suphsol~⟉~suphsub~⫗~suplarr~⥻~supmult~⫂~supnE~⫌~supne~⊋~supplus~⫀~supset~⊃~supseteq~⊇~supseteqq~⫆~supsetneq~⊋~supsetneqq~⫌~supsim~⫈~supsub~⫔~supsup~⫖~swArr~⇙~swarhk~⤦~swarr~↙~swarrow~↙~swnwar~⤪~target~⌖~tbrk~⎴~tcaron~ť~tcedil~ţ~tcy~т~tdot~⃛~telrec~⌕~tfr~𝔱~therefore~∴~thetav~ϑ~thickapprox~≈~thicksim~∼~thkap~≈~thksim~∼~timesb~⊠~timesbar~⨱~timesd~⨰~tint~∭~toea~⤨~top~⊤~topbot~⌶~topcir~⫱~topf~𝕥~topfork~⫚~tosa~⤩~tprime~‴~triangle~▵~triangledown~▿~triangleleft~◃~trianglelefteq~⊴~triangleq~≜~triangleright~▹~trianglerighteq~⊵~tridot~◬~trie~≜~triminus~⨺~triplus~⨹~trisb~⧍~tritime~⨻~trpezium~⏢~tscr~𝓉~tscy~ц~tshcy~ћ~tstrok~ŧ~twixt~≬~twoheadleftarrow~↞~twoheadrightarrow~↠~uHar~⥣~ubrcy~ў~ubreve~ŭ~ucy~у~udarr~⇅~udblac~ű~udhar~⥮~ufisht~⥾~ufr~𝔲~uharl~↿~uharr~↾~uhblk~▀~ulcorn~⌜~ulcorner~⌜~ulcrop~⌏~ultri~◸~umacr~ū~uogon~ų~uopf~𝕦~uparrow~↑~updownarrow~↕~upharpoonleft~↿~upharpoonright~↾~uplus~⊎~upsi~υ~upuparrows~⇈~urcorn~⌝~urcorner~⌝~urcrop~⌎~uring~ů~urtri~◹~uscr~𝓊~utdot~⋰~utilde~ũ~utri~▵~utrif~▴~uuarr~⇈~uwangle~⦧~vArr~⇕~vBar~⫨~vBarv~⫩~vDash~⊨~vangrt~⦜~varepsilon~ϵ~varkappa~ϰ~varnothing~∅~varphi~ϕ~varpi~ϖ~varpropto~∝~varr~↕~varrho~ϱ~varsigma~ς~varsubsetneq~⊊︀~varsubsetneqq~⫋︀~varsupsetneq~⊋︀~varsupsetneqq~⫌︀~vartheta~ϑ~vartriangleleft~⊲~vartriangleright~⊳~vcy~в~vdash~⊢~vee~∨~veebar~⊻~veeeq~≚~vellip~⋮~verbar~|~vert~|~vfr~𝔳~vltri~⊲~vnsub~⊂⃒~vnsup~⊃⃒~vopf~𝕧~vprop~∝~vrtri~⊳~vscr~𝓋~vsubnE~⫋︀~vsubne~⊊︀~vsupnE~⫌︀~vsupne~⊋︀~vzigzag~⦚~wcirc~ŵ~wedbar~⩟~wedge~∧~wedgeq~≙~wfr~𝔴~wopf~𝕨~wp~℘~wr~≀~wreath~≀~wscr~𝓌~xcap~⋂~xcirc~◯~xcup~⋃~xdtri~▽~xfr~𝔵~xhArr~⟺~xharr~⟷~xlArr~⟸~xlarr~⟵~xmap~⟼~xnis~⋻~xodot~⨀~xopf~𝕩~xoplus~⨁~xotime~⨂~xrArr~⟹~xrarr~⟶~xscr~𝓍~xsqcup~⨆~xuplus~⨄~xutri~△~xvee~⋁~xwedge~⋀~yacy~я~ycirc~ŷ~ycy~ы~yfr~𝔶~yicy~ї~yopf~𝕪~yscr~𝓎~yucy~ю~zacute~ź~zcaron~ž~zcy~з~zdot~ż~zeetrf~ℨ~zfr~𝔷~zhcy~ж~zigrarr~⇝~zopf~𝕫~zscr~𝓏~~AMP~&~COPY~©~GT~>~LT~<~QUOT~"~REG~®',a.html4);var o={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376},s=String.fromCodePoint||function(r){return String.fromCharCode(Math.floor((r-65536)/1024)+55296,(r-65536)%1024+56320)},i=String.prototype.codePointAt?function(r,e){return r.codePointAt(e)}:function(r,e){return 1024*(r.charCodeAt(e)-55296)+r.charCodeAt(e+1)-56320+65536},l=function(){return l=Object.assign||function(r){for(var e,t=1,a=arguments.length;t<a;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},l.apply(this,arguments)},c=l(l({},a),{all:a.html5}),n={specialChars:/[<>'"&]/g,nonAscii:/[<>'"&\u0080-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,nonAsciiPrintable:/[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,nonAsciiPrintableOnly:/[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,extensive:/[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g},u="specialChars",p="body",g=/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g,d=/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g,m={xml:{strict:g,attribute:d,body:t.xml},html4:{strict:g,attribute:d,body:t.html4},html5:{strict:g,attribute:d,body:t.html5}},h=l(l({},m),{all:m.html5}),f=String.fromCharCode,b=f(65533);class q{static empty(r){let e=[void 0,null,0,""].includes(r);if(!e){if(r.constructor==Object)return 0==Object.keys(r).length&&0==Object.keys(Object.getPrototypeOf(r)).length;try{if(r.constructor==NodeList)return 0==r.length}catch(r){}if(Array.isArray(r))return 0==r.length}return e}static isNumber(r,e=!1){let t=!Number.isNaN(Number(r))&&["number","string"].includes(typeof r)&&!/^\s*$/.test(`${r}`);return t&&e&&(t="number"==typeof r),t}static isObject(r){return r?.constructor==Object}static numberFormat(r,e=0,t=".",a=","){if(!q.isNumber(r,!0)||!q.isNumber(e,!0))return null;const o=String(r).split(".");return o[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g,a),q.empty(o[1])||(o[1]=o[1].substring(0,e)),q.empty(o[1])?o[0]:o[0].concat(t,o[1])}static strftime(r,e){const t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/(%{1})/g,"\\$1")).replace(/(\\%){2}/g,"%")).replace(/\\%Y/g,String(r.getFullYear()))).replace(/\\%y/g,String(r.getFullYear()).replace(/^\d+(\d{2})$/,"$1"))).replace(/\\%B/g,t[r.getMonth()])).replace(/\\%b/g,t[r.getMonth()].replace(/^(\w{3})\w*$/,"$1"))).replace(/\\%m/g,String(r.getMonth()+1).replace(/^(\d{1})$/,"0$1"))).replace(/\\%d/g,String(r.getDate()).replace(/^(\d{1})$/,"0$1"))).replace(/\\%A/g,a[r.getDay()])).replace(/\\%a/g,a[r.getDay()].replace(/^(\w{3})\w*$/,"$1"))).replace(/\\%H/g,String(r.getHours()).replace(/^(\d{1})$/,"0$1"))).replace(/\\%I/g,String(r.getHours()>12?r.getHours()-12:r.getHours()).replace(/^0$/,"12").replace(/^(\d{1})$/,"0$1"))).replace(/\\%p/g,r.getHours()<12?"AM":"PM")).replace(/\\%M/g,String(r.getMinutes()).replace(/^(\d{1})$/,"0$1"))).replace(/\\%S/g,String(r.getSeconds()).replace(/^(\d{1})$/,"0$1"))}static checkdate(r,e,t){const a=new Date(r,e-1,t);return a.getFullYear()==r&&a.getMonth()+1==e&&a.getDate()==t}static equaldate(r,e=new Date){return q.strftime(r,"%Y-%m-%d")==q.strftime(e,"%Y-%m-%d")}static getWeek(r,e=!0){const t=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"][r.getDay()];return e?t:t.replace(/^([ㄱ-ㅎㅏ-ㅣ가-힣]{1})[ㄱ-ㅎㅏ-ㅣ가-힣]+$/,"$1")}static addDate(r,e){return new Date(r.getFullYear()+(q.isNumber(e.year,!0)?e.year:0),r.getMonth()+(q.isNumber(e.month,!0)?e.month:0),r.getDate()+(q.isNumber(e.day,!0)?e.day:0),r.getHours()+(q.isNumber(e.hour,!0)?e.hour:0),r.getMinutes()+(q.isNumber(e.minute,!0)?e.minute:0),r.getSeconds()+(q.isNumber(e.second,!0)?e.second:0),r.getMilliseconds()+(q.isNumber(e.millisecond,!0)?e.millisecond:0))}static subDate(r,e){return new Date(r.getFullYear()-(q.isNumber(e.year,!0)?e.year:0),r.getMonth()-(q.isNumber(e.month,!0)?e.month:0),r.getDate()-(q.isNumber(e.day,!0)?e.day:0),r.getHours()-(q.isNumber(e.hour,!0)?e.hour:0),r.getMinutes()-(q.isNumber(e.minute,!0)?e.minute:0),r.getSeconds()-(q.isNumber(e.second,!0)?e.second:0),r.getMilliseconds()-(q.isNumber(e.millisecond,!0)?e.millisecond:0))}static xor(r,e){return!(r&&e)&&(r||e)}static formDataToJson(r){return JSON.stringify(Object.fromEntries([...new Set(r.keys())].map(((...e)=>[e[0],r.getAll(e[0]).length>1?r.getAll(e[0]):r.get(e[0])]))))}static percentage(r,e){return r*(e/100)}static ratio(r,e,t=!0){const a=t?[1,0]:[0,1];return e*r[a[0]]/r[a[1]]}static arithmeticSequence(r,e,t,a){return r+(a-e)*t}static geometricSequence(r,e,t,a){return r/t**(e-1)*t**(a-1)}static decimalAdjust(r,e,t=0){const[a,o="0"]=e.toString().split("e"),s=Math[r](Number(`${a}e${parseInt(o)+t}`)),[i,l="0"]=s.toString().split("e");return Number(`${i}e${parseInt(l)-t}`)}static encodeHtmlEntity(r){return function(r){if(!r)return"";var e=n[u],t=c.all.characters;return String.prototype.replace.call(r,e,(function(r){var e=t[r];if(!e){var a=r.length>1?i(r,0):r.charCodeAt(0);e="&#"+a+";"}return e}))}(r)}static decodeHtmlEntity(r){return function(r){var e="all",t=p;if(!r)return"";var a=h[e][t],i=c[e].entities;return r.replace(a,(function(r){return function(r,e){var t=r,a=(r[r.length-1],e[r]);if(a)t=a;else if("&"===r[0]&&"#"===r[1]){var i=r[2],l="x"==i||"X"==i?parseInt(r.substr(3),16):parseInt(r.substr(2));t=l>=1114111?b:l>65535?s(l):f(o[l]||l)}return t}(r,i)}))}(r)}static copy(r){if(q.isObject(r)){const e={};for(const t in r)e[t]=q.copy(r[t]);return e}if(Array.isArray(r)){const e=[];for(const t of r)e.push(q.copy(t));return e}return r}static numRange(r,e){let t=e-r;const a=t>0;return t=Math.abs(t)+1,[...new Array(t)].map(((...e)=>e[1]*(a?1:-1)+r))}static arrayChunk(r,e){if(!q.isNumber(e,!0))throw new TypeError("size는 숫자 타입 이어야 합니다.");if(e<=0&&Number.isInteger(e))throw new RangeError("size는 0보다 큰 정수여야 합니다.");const t=[];return q.numRange(0,q.decimalAdjust("ceil",r.length/e)+(r.length>0?-1:0)).forEach(((...a)=>{t.push(r.slice(a[0]*e,(a[0]+1)*e))})),t}static get(r,e){return e(r)}static getOrElse(r,e,t=r=>r){return t(r)??e}}class v{#r;constructor(r){this.#r=r,v.#e(r,this)}get value(){if(this.#r?.constructor!=Object)return this.#r;const r=v.#t(this.constructor);for(const e of r)if(e.value==this.#r){const r={value:e.id},t=q.copy(this.#r);return Object.defineProperty(t,"__enums_id__",r),t}return null}static#e(r,e){const t=e.constructor,a=Object.getOwnPropertyDescriptor(t,"__enums__")??{},o=a.value??[];if(o.some(((...e)=>e[0].value==r)))throw new Error("이미 등록된 값 입니다.");Object.defineProperty(t,"__enums__",{...a,value:[...o,{value:r,enums:e,id:`${t.name}-${Date.now()}-${o.length}`}],configurable:!0})}static valueOf(r){const e=v.#t(this);for(const t of e)if(r?.constructor!=Object){if(t.value==r)return t.enums}else if(r.hasOwnProperty("__enums_id__")?t.id==Object.getOwnPropertyDescriptor(r,"__enums_id__")?.value:t.value==r)return t.enums;return null}static*values(){const r=v.#t(this);for(const e of r)yield e.enums}static*#t(r){const e=Object.getOwnPropertyDescriptor(r,"__enums__")??{};for(const r of(e.value??[]).values())yield r}}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MIME: () => (/* reexport safe */ _mime_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Type: () => (/* reexport safe */ _type_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.js */ "./dist/type.js");
/* harmony import */ var _mime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mime.js */ "./dist/mime.js");




})();

mimeEnum = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map