import { Enum } from "@nuka9510/simple-enum";
export default class Type extends Enum<string> {
    #private;
    static get APPLICATION(): Type;
    static get AUDIO(): Type;
    static get FONT(): Type;
    static get IMAGE(): Type;
    static get MESSAGE(): Type;
    static get MODEL(): Type;
    static get MULTIPART(): Type;
    static get TEXT(): Type;
    static get VIDEO(): Type;
    get name(): string;
    constructor(value: string, name: string);
}
