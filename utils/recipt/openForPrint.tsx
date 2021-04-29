import ReactDOMServer from "react-dom/server";
import $ from "jquery";
import ReactDOM from "react-dom";

export const openForPrint = (markUp: JSX.Element | string, favUrl?: string) => {
    const w = window.open("", "JD-receipt");
    if (!w) throw Error("Can not open Window 'openForPrint'");
    w.document.title = "JD-receipt";
    if (typeof markUp === "string") w.document.body.innerHTML = markUp;
    else
        w.document.body.innerHTML = ReactDOMServer.renderToStaticMarkup(markUp);
    w.document.scripts;
    $("head", w.document).append(`<link rel="icon" href=${favUrl}>`);
};

export const openForPirntWithReactPortal = (element: React.ReactNode) => {
    const container = document.createElement("div");
    const externalWindow = window.open("", "JD-receipt");
    if (!externalWindow) throw Error("Can not open Window 'openForPrint'");
    ReactDOM.createPortal(element, container);
    externalWindow.document.body.appendChild(container);
};

function copyStyles(sourceDoc: Document, targetDoc: Document) {
    Array.from(sourceDoc.styleSheets).forEach((styleSheet) => {
        if (styleSheet.cssRules) {
            // for <style> elements
            const newStyleEl = sourceDoc.createElement("style");

            Array.from(styleSheet.cssRules).forEach((cssRule) => {
                // write the text of each rule into the body of the style element
                newStyleEl.appendChild(
                    sourceDoc.createTextNode(cssRule.cssText)
                );
            });

            targetDoc.head.appendChild(newStyleEl);
        } else if (styleSheet.href) {
            // for <link> elements loading CSS from a URL
            const newLinkEl = sourceDoc.createElement("link");

            newLinkEl.rel = "stylesheet";
            newLinkEl.href = styleSheet.href;
            targetDoc.head.appendChild(newLinkEl);
        }
    });
}
