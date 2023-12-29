import { renderToString } from "solid-js/web";
import Entry from "./entry";

export function render() {
    const html = renderToString(() => <Entry />);
    return { html }
}