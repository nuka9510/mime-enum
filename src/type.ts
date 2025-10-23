import { Enum } from "@nuka9510/simple-enum";

export default class Type extends Enum<string> {
  static #APPLICATION = new Type('application', 'APPLICATION');

  static #AUDIO = new Type('audio', 'AUDIO');

  static #FONT = new Type('font', 'FONT');

  static #IMAGE = new Type('image', 'IMAGE');

  static #MESSAGE = new Type('message', 'MESSAGE');

  static #MODEL = new Type('model', 'MODEL');

  static #MULTIPART = new Type('multipart', 'MULTIPART');

  static #TEXT = new Type('text', 'TEXT');

  static #VIDEO = new Type('video', 'VIDEO');

  static get APPLICATION() { return Type.#APPLICATION; }

  static get AUDIO() { return Type.#AUDIO; }

  static get FONT() { return Type.#FONT; }

  static get IMAGE() { return Type.#IMAGE; }

  static get MESSAGE() { return Type.#MESSAGE; }

  static get MODEL() { return Type.#MODEL; }

  static get MULTIPART() { return Type.#MULTIPART; }

  static get TEXT() { return Type.#TEXT; }

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