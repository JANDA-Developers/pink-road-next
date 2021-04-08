import "core-js";
import ResizeObserver from 'resize-observer-polyfill';

if(typeof window !== "undefined") {
    if(window.ResizeObserver === undefined) {
    window.ResizeObserver = ResizeObserver;
    }
}
