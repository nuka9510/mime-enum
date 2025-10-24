import { Enum } from "@nuka9510/simple-enum";
import Type from "./type.js";
/** {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Guides/MIME_types/Common_types MIME} 타입 Enum */
export default class MIME extends Enum<string> {
    #private;
    /** XML */
    static get APPLICATION_ATOM_XML(): MIME;
    /** 전자출판물(Electronic publication) (EPUB) */
    static get APPLICATION_EPUB_ZIP(): MIME;
    /** GZip 압축 아카이브 */
    static get APPLICATION_GZIP(): MIME;
    /** Java Archive (JAR) */
    static get APPLICATION_JAVA_ARCHIVE(): MIME;
    /** JSON 형식 */
    static get APPLICATION_JSON(): MIME;
    /** JSON-LD 형식 */
    static get APPLICATION_LD_JSON(): MIME;
    /** Microsoft 워드 */
    static get APPLICATION_MSWORD(): MIME;
    /** 모든 종류의 이진 데이터 */
    static get APPLICATION_OCTET_STREAM(): MIME;
    /** OGG */
    static get APPLICATION_OGG(): MIME;
    /** Adobe {@link https://www.adobe.com/acrobat/about-adobe-pdf.html 휴대용 문서 형식} (PDF) */
    static get APPLICATION_PDF(): MIME;
    /** Rich Text Format (RTF) */
    static get APPLICATION_RTF(): MIME;
    /** 아마존 킨들 전자책 포맷 */
    static get APPLICATION_VND_AMAZON_EBOOK(): MIME;
    /** Apple 설치 패키지 */
    static get APPLICATION_VND_APPLE_INSTALLER_XML(): MIME;
    /** XUL */
    static get APPLICATION_VND_MOZILLA_XUL_XML(): MIME;
    /** Microsoft Excel */
    static get APPLICATION_VND_MS_EXCEL(): MIME;
    /** MS Embedded OpenType fonts */
    static get APPLICATION_VND_MS_FONTOBJECT(): MIME;
    /** Microsoft PowerPoint */
    static get APPLICATION_VND_MS_POWERPOINT(): MIME;
    /** OpenDocument 프레젠테이션 문서 */
    static get APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION(): MIME;
    /** OpenDocument 스프레드시트 문서 */
    static get APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET(): MIME;
    /** OpenDocument 텍스트 문서 */
    static get APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT(): MIME;
    /** Microsoft PowerPoint (OpenXML) */
    static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION(): MIME;
    /** Microsoft Excel (OpenXML) */
    static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET(): MIME;
    /** Microsoft 워드 (OpenXML) */
    static get APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT(): MIME;
    /** RAR 아카이브 */
    static get APPLICATION_VND_RAR(): MIME;
    /** Microsoft Visio */
    static get APPLICATION_VND_VISIO(): MIME;
    /** {@link https://en.wikipedia.org/wiki/7-Zip 7-zip} archive */
    static get APPLICATION_X_7Z_COMPRESSED(): MIME;
    /** {@link https://en.wikipedia.org/wiki/AbiWord AbiWord} 문서 */
    static get APPLICATION_X_ABIWORD(): MIME;
    /** BZip 아카이브 */
    static get APPLICATION_X_BZIP(): MIME;
    /** BZip2 아카이브 */
    static get APPLICATION_X_BZIP2(): MIME;
    /** CD 오디오 */
    static get APPLICATION_X_CDF(): MIME;
    /** C-셸 스크립트 */
    static get APPLICATION_X_CSH(): MIME;
    /** 아카이브 문서 (다중 파일 포함) */
    static get APPLICATION_X_FREEARC(): MIME;
    /** Hypertext Preprocessor (Personal Home Page) */
    static get APPLICATION_X_HTTPD_PHP(): MIME;
    /** Bourne shell script */
    static get APPLICATION_X_SH(): MIME;
    /** Tape Archive (TAR) */
    static get APPLICATION_X_TAR(): MIME;
    /** XHTML */
    static get APPLICATION_XHTML_XML(): MIME;
    /** XML */
    static get APPLICATION_XML(): MIME;
    /** ZIP archive */
    static get APPLICATION_ZIP(): MIME;
    /** {@link https://en.wikipedia.org/wiki/3GP_and_3G2 3GPP} audio container */
    static get AUDIO_3GPP(): MIME;
    /** {@link https://en.wikipedia.org/wiki/3GP_and_3G2 3GPP2} audio container */
    static get AUDIO_3GPP2(): MIME;
    /** AAC 오디오 */
    static get AUDIO_AAC(): MIME;
    /** Musical Instrument Digital Interface (MIDI) */
    static get AUDIO_MIDI(): MIME;
    /** MP3 오디오 */
    static get AUDIO_MPEG(): MIME;
    /** OGG 오디오 */
    static get AUDIO_OGG(): MIME;
    /** Opus 오디오 */
    static get AUDIO_OPUS(): MIME;
    /** Waveform Audio Format */
    static get AUDIO_WAV(): MIME;
    /** Waveform Audio Format */
    static get AUDIO_WAVE(): MIME;
    /** WEBM audio */
    static get AUDIO_WEBM(): MIME;
    /** Musical Instrument Digital Interface (MIDI) */
    static get AUDIO_X_MIDI(): MIME;
    /** Waveform Audio Format */
    static get AUDIO_X_PN_WAV(): MIME;
    /** Waveform Audio Format */
    static get AUDIO_X_WAV(): MIME;
    /** OpenType 폰트 */
    static get FONT_OTF(): MIME;
    /** TrueType Font */
    static get FONT_TTF(): MIME;
    /** Web Open Font Format (WOFF) */
    static get FONT_WOFF(): MIME;
    /** Web Open Font Format (WOFF) */
    static get FONT_WOFF2(): MIME;
    /** Animated Portable Network Graphics (APNG) */
    static get IMAGE_APNG(): MIME;
    /** AVIF 이미지 */
    static get IMAGE_AVIF(): MIME;
    /** Windows OS/2 비트맵 그래픽 */
    static get IMAGE_BMP(): MIME;
    /** Graphics Interchange Format (GIF) */
    static get IMAGE_GIF(): MIME;
    /** JPEG 이미지 */
    static get IMAGE_JPEG(): MIME;
    /** Portable Network Graphics */
    static get IMAGE_PNG(): MIME;
    /** Scalable Vector Graphics (SVG) */
    static get IMAGE_SVG_XML(): MIME;
    /** Tagged Image File Format (TIFF) */
    static get IMAGE_TIFF(): MIME;
    /** Icon format */
    static get IMAGE_VND_MICROSOFT_ICON(): MIME;
    /** WEBP image */
    static get IMAGE_WEBP(): MIME;
    /**
     * `multipart/byteranges` MIME 타입은 브라우저에 부분적 응답을 보내는 데 사용됩니다.  \
     *   \
     * {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Status/206 206 Partial Content} 상태 코드가 전송된 경우, MIME 타입은 문서가 각각의 요청된 범위들 중 하나인 몇 가지 파트들로 구성되어 있음을 알려주기 위해 사용됩니다.  \
     * 다른 다중부분 타입처럼, {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Content-Type Content-Type}은 이 조각들을 분리하기 위해 `boundary` 디렉티브를 사용합니다.  \
     * 각각의 다른 파트들은 문서의 실제 타입을 가진 {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Content-Type Content-Type} 헤더와 그들이 나타내는 범위를 가진 {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Content-Range Content-Range}를 지니고 있습니다.
     */
    static get MULTIPART_BYTERANGES(): MIME;
    /**
     * `multipart/form-data`은 브라우저에서 서버로 완성된 {@link https://developer.mozilla.org/ko/docs/Learn_web_development/Extensions/Forms HTML Form}의 내용을 전송 시 사용할 수 있습니다.  \
     *   \
     * 다중부분 문서 형식으로써, 경계(이중 대시 `'--'` 로 시작되는 문자열)로 구분되어지는 다른 파트들로 구성됩니다.  \
     * 각 파트는 그 자체로 개체이며 자신만의 HTTP 헤더를 가지는데, 파일 업로드 필드를 위한 헤더로는 {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Content-Disposition Content-Disposition}, {@link https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Headers/Content-Type Content-Type}이 있습니다.
     */
    static get MULTIPART_FORM_DATA(): MIME;
    /** iCalendar format */
    static get TEXT_CALENDAR(): MIME;
    /** 종속 스타일 시트 (CSS) */
    static get TEXT_CSS(): MIME;
    /** 쉼표로 구분된 값 (CSV) */
    static get TEXT_CSV(): MIME;
    /** HyperText Markup Language (HTML) */
    static get TEXT_HTML(): MIME;
    /**
     * JavaScript  \
     * JavaScript 모듈
     */
    static get TEXT_JAVASCRIPT(): MIME;
    /** Text, (일반적으로 {@link https://developer.mozilla.org/ko/docs/Glossary/ASCII ASCII} 또는 ISO 8859-n) */
    static get TEXT_PLAIN(): MIME;
    /** XML */
    static get TEXT_XML(): MIME;
    /** {@link https://en.wikipedia.org/wiki/3GP_and_3G2 3GPP} video container */
    static get VIDEO_3GPP(): MIME;
    /** {@link https://en.wikipedia.org/wiki/3GP_and_3G2 3GPP2} video container */
    static get VIDEO_3GPP2(): MIME;
    /** MPEG 전송 스트림 */
    static get VIDEO_MP2T(): MIME;
    /** MP4 비디오 */
    static get VIDEO_MP4(): MIME;
    /** MPEG 비디오 */
    static get VIDEO_MPEG(): MIME;
    /** OGG 비디오 */
    static get VIDEO_OGG(): MIME;
    /** WEBM video */
    static get VIDEO_WEBM(): MIME;
    /** AVI: 오디오 비디오 인터리브(Audio Video Interleave) */
    static get VIDEO_X_MSVIDEO(): MIME;
    get name(): string;
    get ext(): string[];
    get type(): Type;
    constructor(value: string, name: string, ext: Set<string>, type: Type);
}
