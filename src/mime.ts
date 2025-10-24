import { Enum } from "@nuka9510/simple-enum";
import Type from "./type.js";

/** {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Guides/MIME_types/Common_types MIME} 타입 Enum */
export default class MIME extends Enum<string> {
  static #APPLICATION_ATOM_XML = new MIME('application/atom+xml', 'APPLICATION_ATOM_XML', new Set(['xml']), Type.APPLICATION);

  static #APPLICATION_EPUB_ZIP = new MIME('application/epub+zip', 'APPLICATION_EPUB_ZIP', new Set(['epub']), Type.APPLICATION);

  static #APPLICATION_GZIP = new MIME('application/gzip', 'APPLICATION_GZIP', new Set(['gz']), Type.APPLICATION);

  static #APPLICATION_JAVA_ARCHIVE = new MIME('application/java-archive', 'APPLICATION_JAVA_ARCHIVE', new Set(['jar']), Type.APPLICATION);

  static #APPLICATION_JSON = new MIME('application/json', 'APPLICATION_JSON', new Set(['json']), Type.APPLICATION);

  static #APPLICATION_LD_JSON = new MIME('application/ld+json', 'APPLICATION_LD_JSON', new Set(['jsonld']), Type.APPLICATION);

  static #APPLICATION_MSWORD = new MIME('application/msword', 'APPLICATION_MSWORD', new Set(['doc']), Type.APPLICATION);

  static #APPLICATION_OCTET_STREAM = new MIME('application/octet-stream', 'APPLICATION_OCTET_STREAM', new Set(['bin']), Type.APPLICATION);

  static #APPLICATION_OGG = new MIME('application/ogg', 'APPLICATION_OGG', new Set(['ogx']), Type.APPLICATION);

  static #APPLICATION_PDF = new MIME('application/pdf', 'APPLICATION_PDF', new Set(['pdf']), Type.APPLICATION);

  static #APPLICATION_RTF = new MIME('application/rtf', 'APPLICATION_RTF', new Set(['rtf']), Type.APPLICATION);

  static #APPLICATION_VND_AMAZON_EBOOK = new MIME('application/vnd.amazon.ebook', 'APPLICATION_VND_AMAZON_EBOOK', new Set(['azw']), Type.APPLICATION);

  static #APPLICATION_VND_APPLE_INSTALLER_XML = new MIME('application/vnd.apple.installer+xml', 'APPLICATION_VND_APPLE_INSTALLER_XML', new Set(['mpkg']), Type.APPLICATION);

  static #APPLICATION_VND_MOZILLA_XUL_XML = new MIME('application/vnd.mozilla.xul+xml', 'APPLICATION_VND_MOZILLA_XUL_XML', new Set(['xul']), Type.APPLICATION);

  static #APPLICATION_VND_MS_EXCEL = new MIME('application/vnd.ms-excel', 'APPLICATION_VND_MS_EXCEL', new Set(['xls']), Type.APPLICATION);

  static #APPLICATION_VND_MS_FONTOBJECT = new MIME('application/vnd.ms-fontobject', 'APPLICATION_VND_MS_FONTOBJECT', new Set(['eot']), Type.APPLICATION);

  static #APPLICATION_VND_MS_POWERPOINT = new MIME('application/vnd.ms-powerpoint', 'APPLICATION_VND_MS_POWERPOINT', new Set(['ppt']), Type.APPLICATION);

  static #APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION = new MIME('application/vnd.oasis.opendocument.presentation', 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION', new Set(['odp']), Type.APPLICATION);

  static #APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET = new MIME('application/vnd.oasis.opendocument.spreadsheet', 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET', new Set(['ods']), Type.APPLICATION);

  static #APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT = new MIME('application/vnd.oasis.opendocument.text', 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT', new Set(['odt']), Type.APPLICATION);

  static #APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION = new MIME('application/vnd.openxmlformats-officedocument.presentationml.presentation', 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION', new Set(['pptx']), Type.APPLICATION);

  static #APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET = new MIME('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET', new Set(['xlsx']), Type.APPLICATION);

  static #APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT = new MIME('application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT', new Set(['docx']), Type.APPLICATION);

  static #APPLICATION_VND_RAR = new MIME('application/vnd.rar', 'APPLICATION_VND_RAR', new Set(['rar']), Type.APPLICATION);

  static #APPLICATION_VND_VISIO = new MIME('application/vnd.visio', 'APPLICATION_VND_VISIO', new Set(['vsd']), Type.APPLICATION);

  static #APPLICATION_X_7Z_COMPRESSED = new MIME('application/x-7z-compressed', 'APPLICATION_X_7Z_COMPRESSED', new Set(['7z']), Type.APPLICATION);

  static #APPLICATION_X_ABIWORD = new MIME('application/x-abiword', 'APPLICATION_X_ABIWORD', new Set(['abw']), Type.APPLICATION);

  static #APPLICATION_X_BZIP = new MIME('application/x-bzip', 'APPLICATION_X_BZIP', new Set(['bz']), Type.APPLICATION);

  static #APPLICATION_X_BZIP2 = new MIME('application/x-bzip2', 'APPLICATION_X_BZIP2', new Set(['bz2']), Type.APPLICATION);

  static #APPLICATION_X_CDF = new MIME('application/x-cdf', 'APPLICATION_X_CDF', new Set(['cda']), Type.APPLICATION);

  static #APPLICATION_X_CSH = new MIME('application/x-csh', 'APPLICATION_X_CSH', new Set(['csh']), Type.APPLICATION);

  static #APPLICATION_X_FREEARC = new MIME('application/x-freearc', 'APPLICATION_X_FREEARC', new Set(['arc']), Type.APPLICATION);

  static #APPLICATION_X_HTTPD_PHP = new MIME('application/x-httpd-php', 'APPLICATION_X_HTTPD_PHP', new Set(['php']), Type.APPLICATION);

  static #APPLICATION_X_SH = new MIME('application/x-sh', 'APPLICATION_X_SH', new Set(['sh']), Type.APPLICATION);

  static #APPLICATION_X_TAR = new MIME('application/x-tar', 'APPLICATION_X_TAR', new Set(['tar']), Type.APPLICATION);

  static #APPLICATION_XHTML_XML = new MIME('application/xhtml+xml', 'APPLICATION_XHTML_XML', new Set(['xhtml']), Type.APPLICATION);

  static #APPLICATION_XML = new MIME('application/xml', 'APPLICATION_XML', new Set(['xml']), Type.APPLICATION);

  static #APPLICATION_ZIP = new MIME('application/zip', 'APPLICATION_ZIP', new Set(['zip']), Type.APPLICATION);

  static #AUDIO_3GPP = new MIME('audio/3gpp', 'AUDIO_3GPP', new Set(['3gp']), Type.AUDIO);

  static #AUDIO_3GPP2 = new MIME('audio/3gpp2', 'AUDIO_3GPP2', new Set(['3g2']), Type.AUDIO);

  static #AUDIO_AAC = new MIME('audio/aac', 'AUDIO_AAC', new Set(['aac']), Type.AUDIO);

  static #AUDIO_MIDI = new MIME('audio/midi', 'AUDIO_MIDI', new Set(['mid', 'midi']), Type.AUDIO);

  static #AUDIO_MPEG = new MIME('audio/mpeg', 'AUDIO_MPEG', new Set(['mp3']), Type.AUDIO);

  static #AUDIO_OGG = new MIME('audio/ogg', 'AUDIO_OGG', new Set(['oga']), Type.AUDIO);

  static #AUDIO_OPUS = new MIME('audio/opus', 'AUDIO_OPUS', new Set(['opus']), Type.AUDIO);

  static #AUDIO_WAV = new MIME('audio/wav', 'AUDIO_WAV', new Set(['wav']), Type.AUDIO);

  static #AUDIO_WAVE = new MIME('audio/wave', 'AUDIO_WAVE', new Set(['wav']), Type.AUDIO);

  static #AUDIO_WEBM = new MIME('audio/webm', 'AUDIO_WEBM', new Set(['weba']), Type.AUDIO);

  static #AUDIO_X_MIDI = new MIME('audio/x-midi', 'AUDIO_X_MIDI', new Set(['mid', 'midi']), Type.AUDIO);

  static #AUDIO_X_PN_WAV = new MIME('audio/x-pn-wav', 'AUDIO_X_PN_WAV', new Set(['wav']), Type.AUDIO);

  static #AUDIO_X_WAV = new MIME('audio/x-wav', 'AUDIO_X_WAV', new Set(['wav']), Type.AUDIO);

  static #FONT_OTF = new MIME('font/otf', 'FONT_OTF', new Set(['otf']), Type.FONT);

  static #FONT_TTF = new MIME('font/ttf', 'FONT_TTF', new Set(['ttf']), Type.FONT);

  static #FONT_WOFF = new MIME('font/woff', 'FONT_WOFF', new Set(['woff']), Type.FONT);

  static #FONT_WOFF2 = new MIME('font/woff2', 'FONT_WOFF2', new Set(['woff2']), Type.FONT);

  static #IMAGE_APNG = new MIME('image/apng', 'IMAGE_APNG', new Set(['png', 'apng']), Type.IMAGE);

  static #IMAGE_AVIF = new MIME('image/avif', 'IMAGE_AVIF', new Set(['avif']), Type.IMAGE);

  static #IMAGE_BMP = new MIME('image/bmp', 'IMAGE_BMP', new Set(['bmp']), Type.IMAGE);

  static #IMAGE_GIF = new MIME('image/gif', 'IMAGE_GIF', new Set(['gif']), Type.IMAGE);

  static #IMAGE_JPEG = new MIME('image/jpeg', 'IMAGE_JPEG', new Set(['jpg', 'jpeg']), Type.IMAGE);

  static #IMAGE_PNG = new MIME('image/png', 'IMAGE_PNG', new Set(['png']), Type.IMAGE);

  static #IMAGE_SVG_XML = new MIME('image/svg+xml', 'IMAGE_SVG_XML', new Set(['svg']), Type.IMAGE);

  static #IMAGE_TIFF = new MIME('image/tiff', 'IMAGE_TIFF', new Set(['tif', 'tiff']), Type.IMAGE);

  static #IMAGE_VND_MICROSOFT_ICON = new MIME('image/vnd.microsoft.icon', 'IMAGE_VND_MICROSOFT_ICON', new Set(['ico']), Type.IMAGE);

  static #IMAGE_WEBP = new MIME('image/webp', 'IMAGE_WEBP', new Set(['webp']), Type.IMAGE);

  static #MULTIPART_BYTERANGES = new MIME('multipart/byteranges', 'MULTIPART_BYTERANGES', new Set([]), Type.MULTIPART);

  static #MULTIPART_FORM_DATA = new MIME('multipart/form-data', 'MULTIPART_FORM_DATA', new Set([]), Type.MULTIPART);

  static #TEXT_CALENDAR = new MIME('text/calendar', 'TEXT_CALENDAR', new Set(['ics']), Type.TEXT);

  static #TEXT_CSS = new MIME('text/css', 'TEXT_CSS', new Set(['css']), Type.TEXT);

  static #TEXT_CSV = new MIME('text/csv', 'TEXT_CSV', new Set(['csv']), Type.TEXT);

  static #TEXT_HTML = new MIME('text/html', 'TEXT_HTML', new Set(['htm', 'html']), Type.TEXT);

  static #TEXT_JAVASCRIPT = new MIME('text/javascript', 'TEXT_JAVASCRIPT', new Set(['js', 'mjs']), Type.TEXT);

  static #TEXT_PLAIN = new MIME('text/plain', 'TEXT_PLAIN', new Set(['txt']), Type.TEXT);

  static #TEXT_XML = new MIME('text/xml', 'TEXT_XML', new Set(['xml']), Type.TEXT);

  static #VIDEO_3GPP = new MIME('video/3gpp', 'VIDEO_3GPP', new Set(['3gp']), Type.VIDEO);

  static #VIDEO_3GPP2 = new MIME('video/3gpp2', 'VIDEO_3GPP2', new Set(['3g2']), Type.VIDEO);

  static #VIDEO_MP2T = new MIME('video/mp2t', 'VIDEO_MP2T', new Set(['ts']), Type.VIDEO);

  static #VIDEO_MP4 = new MIME('video/mp4', 'VIDEO_MP4', new Set(['mp4']), Type.VIDEO);

  static #VIDEO_MPEG = new MIME('video/mpeg', 'VIDEO_MPEG', new Set(['mpeg']), Type.VIDEO);

  static #VIDEO_OGG = new MIME('video/ogg', 'VIDEO_OGG', new Set(['ogv']), Type.VIDEO);

  static #VIDEO_WEBM = new MIME('video/webm', 'VIDEO_WEBM', new Set(['webm']), Type.VIDEO);

  static #VIDEO_X_MSVIDEO = new MIME('video/x-msvideo', 'VIDEO_X_MSVIDEO', new Set(['avi']), Type.VIDEO);

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

  #name: string;

  #ext: Set<string>;

  #type: Type;

  get name(): string { return this.#name; }

  get ext(): string[] { return [...this.#ext]; }

  get type(): Type { return this.#type; }

  constructor(
    value: string,
    name: string,
    ext: Set<string>,
    type: Type
  ) {
    super(value);

    this.#name = name;
    this.#ext = ext
    this.#type = type;
  }

}