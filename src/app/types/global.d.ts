declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare var __IS_DEV__: boolean;
declare var __MODE__: string;
