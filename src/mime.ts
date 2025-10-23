import { Enum } from "@nuka9510/simple-enum";
import Type from "./type.js";

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

  static get APPLICATION_ATOM_XML() { return MIME.#APPLICATION_ATOM_XML; }

  static get APPLICATION_EPUB_ZIP() { return MIME.#APPLICATION_EPUB_ZIP; }

  static get APPLICATION_GZIP() { return MIME.#APPLICATION_GZIP; }

  static get APPLICATION_JAVA_ARCHIVE() { return MIME.#APPLICATION_JAVA_ARCHIVE; }

  static get APPLICATION_JSON() { return MIME.#APPLICATION_JSON; }

  static get APPLICATION_LD_JSON() { return MIME.#APPLICATION_LD_JSON; }

  static get APPLICATION_MSWORD() { return MIME.#APPLICATION_MSWORD; }

  static get APPLICATION_OCTET_STREAM() { return MIME.#APPLICATION_OCTET_STREAM; }

  static get APPLICATION_OGG() { return MIME.#APPLICATION_OGG; }

  static get APPLICATION_PDF() { return MIME.#APPLICATION_PDF; }

  static get APPLICATION_RTF() { return MIME.#APPLICATION_RTF; }

  static get APPLICATION_VND_AMAZON_EBOOK() { return MIME.#APPLICATION_VND_AMAZON_EBOOK; }

  static get APPLICATION_VND_APPLE_INSTALLER_XML() { return MIME.#APPLICATION_VND_APPLE_INSTALLER_XML; }

  static get APPLICATION_VND_MOZILLA_XUL_XML() { return MIME.#APPLICATION_VND_MOZILLA_XUL_XML; }

  static get APPLICATION_VND_MS_EXCEL() { return MIME.#APPLICATION_VND_MS_EXCEL; }

  static get APPLICATION_VND_MS_FONTOBJECT() { return MIME.#APPLICATION_VND_MS_FONTOBJECT; }

  static get APPLICATION_VND_MS_POWERPOINT() { return MIME.#APPLICATION_VND_MS_POWERPOINT; }

  static get APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION() { return MIME.#APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION; }

  static get APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET() { return MIME.#APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET; }

  static get APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT() { return MIME.#APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT; }

  static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION() { return MIME.#APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION; }

  static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET() { return MIME.#APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET; }

  static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT() { return MIME.#APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT; }

  static get APPLICATION_VND_RAR() { return MIME.#APPLICATION_VND_RAR; }

  static get APPLICATION_VND_VISIO() { return MIME.#APPLICATION_VND_VISIO; }

  static get APPLICATION_X_7Z_COMPRESSED() { return MIME.#APPLICATION_X_7Z_COMPRESSED; }

  static get APPLICATION_X_ABIWORD() { return MIME.#APPLICATION_X_ABIWORD; }

  static get APPLICATION_X_BZIP() { return MIME.#APPLICATION_X_BZIP; }

  static get APPLICATION_X_BZIP2() { return MIME.#APPLICATION_X_BZIP2; }

  static get APPLICATION_X_CDF() { return MIME.#APPLICATION_X_CDF; }

  static get APPLICATION_X_CSH() { return MIME.#APPLICATION_X_CSH; }

  static get APPLICATION_X_FREEARC() { return MIME.#APPLICATION_X_FREEARC; }

  static get APPLICATION_X_HTTPD_PHP() { return MIME.#APPLICATION_X_HTTPD_PHP; }

  static get APPLICATION_X_SH() { return MIME.#APPLICATION_X_SH; }

  static get APPLICATION_X_TAR() { return MIME.#APPLICATION_X_TAR; }

  static get APPLICATION_XHTML_XML() { return MIME.#APPLICATION_XHTML_XML; }

  static get APPLICATION_XML() { return MIME.#APPLICATION_XML; }

  static get APPLICATION_ZIP() { return MIME.#APPLICATION_ZIP; }

  static get AUDIO_3GPP() { return MIME.#AUDIO_3GPP; }

  static get AUDIO_3GPP2() { return MIME.#AUDIO_3GPP2; }

  static get AUDIO_AAC() { return MIME.#AUDIO_AAC; }

  static get AUDIO_MIDI() { return MIME.#AUDIO_MIDI; }

  static get AUDIO_MPEG() { return MIME.#AUDIO_MPEG; }

  static get AUDIO_OGG() { return MIME.#AUDIO_OGG; }

  static get AUDIO_OPUS() { return MIME.#AUDIO_OPUS; }

  static get AUDIO_WAV() { return MIME.#AUDIO_WAV; }

  static get AUDIO_WAVE() { return MIME.#AUDIO_WAVE; }

  static get AUDIO_WEBM() { return MIME.#AUDIO_WEBM; }

  static get AUDIO_X_MIDI() { return MIME.#AUDIO_X_MIDI; }

  static get AUDIO_X_PN_WAV() { return MIME.#AUDIO_X_PN_WAV; }

  static get AUDIO_X_WAV() { return MIME.#AUDIO_X_WAV; }

  static get FONT_OTF() { return MIME.#FONT_OTF; }

  static get FONT_TTF() { return MIME.#FONT_TTF; }

  static get FONT_WOFF() { return MIME.#FONT_WOFF; }

  static get FONT_WOFF2() { return MIME.#FONT_WOFF2; }

  static get IMAGE_APNG() { return MIME.#IMAGE_APNG; }

  static get IMAGE_AVIF() { return MIME.#IMAGE_AVIF; }

  static get IMAGE_BMP() { return MIME.#IMAGE_BMP; }

  static get IMAGE_GIF() { return MIME.#IMAGE_GIF; }

  static get IMAGE_JPEG() { return MIME.#IMAGE_JPEG; }

  static get IMAGE_PNG() { return MIME.#IMAGE_PNG; }

  static get IMAGE_SVG_XML() { return MIME.#IMAGE_SVG_XML; }

  static get IMAGE_TIFF() { return MIME.#IMAGE_TIFF; }

  static get IMAGE_VND_MICROSOFT_ICON() { return MIME.#IMAGE_VND_MICROSOFT_ICON; }

  static get IMAGE_WEBP() { return MIME.#IMAGE_WEBP; }

  static get MULTIPART_BYTERANGES() { return MIME.#MULTIPART_BYTERANGES; }

  static get MULTIPART_FORM_DATA() { return MIME.#MULTIPART_FORM_DATA; }

  static get TEXT_CALENDAR() { return MIME.#TEXT_CALENDAR; }

  static get TEXT_CSS() { return MIME.#TEXT_CSS; }

  static get TEXT_CSV() { return MIME.#TEXT_CSV; }

  static get TEXT_HTML() { return MIME.#TEXT_HTML; }

  static get TEXT_JAVASCRIPT() { return MIME.#TEXT_JAVASCRIPT; }

  static get TEXT_PLAIN() { return MIME.#TEXT_PLAIN; }

  static get TEXT_XML() { return MIME.#TEXT_XML; }

  static get VIDEO_3GPP() { return MIME.#VIDEO_3GPP; }

  static get VIDEO_3GPP2() { return MIME.#VIDEO_3GPP2; }

  static get VIDEO_MP2T() { return MIME.#VIDEO_MP2T; }

  static get VIDEO_MP4() { return MIME.#VIDEO_MP4; }

  static get VIDEO_MPEG() { return MIME.#VIDEO_MPEG; }

  static get VIDEO_OGG() { return MIME.#VIDEO_OGG; }

  static get VIDEO_WEBM() { return MIME.#VIDEO_WEBM; }

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