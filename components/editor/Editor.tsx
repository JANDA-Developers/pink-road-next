import * as React from "react";
import { EditorConfig } from "@editorjs/editorjs";
import Render from "react-editorjs-renderer";
interface EditorJsWrapperProps extends React.ComponentProps<"div"> {
    config?: EditorConfig;
}

export default function EditorJsWrapper({
    config = {},
    ...restProps
}: EditorJsWrapperProps): JSX.Element {
    const elmtRef = React.useRef<HTMLDivElement>();

    React.useEffect(() => {
        if (!elmtRef.current) {
            return;
        }

        let editorJs;

        (async () => {
            const { default: EditorJS } = await import("@editorjs/editorjs");
            const { default: EditorJSTools } = await import("./tools.js");

            editorJs = new EditorJS({
                ...config,
                tools: EditorJSTools,
                holder: elmtRef.current,
            });
        })().catch((error): void => console.error(error));

        return (): void => {
            editorJs.destroy();
        };
    }, [config]);

    if (typeof window === "undefined" && config.readOnly) {
        return <Render data={config.data} />
    }

    return (
        <div
            {...restProps}
            ref={(elmt): void => {
                elmtRef.current = elmt;
            }}
        />
    );
}