import { Enum } from "@nuka9510/simple-enum";

export default class Type extends Enum<string> {
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

  #name: string;

  get name(): string { return this.#name; }

  constructor(
    value: string,
    name: string
  ) {
    super(value);

    this.#name = name;
  }

}