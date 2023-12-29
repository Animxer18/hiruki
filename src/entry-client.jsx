import { hydrate } from "solid-js/web";
import Entry from "./entry";

hydrate(() => <Entry />, document.getElementById("root"));