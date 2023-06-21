declare module '*.module.css' {
    interface IClassNames {
        [className: string]: string,
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    const content: any;
    export default content;
}

declare type JSONArray = Array<JSONValue>;

declare interface JSONObject {
  [key: string]: JSONValue,
}

declare type JSONValue =
  | string
  | number
  | boolean
  | JSONArray
  | JSONObject
  | null;

export type LocalizedString = {
    cs: string,
    en: string,
};
