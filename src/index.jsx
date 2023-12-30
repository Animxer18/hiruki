import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./assets/global.css";
import Layout from "./layout";
import Error from "./pages/error";
import Landing from "./pages/index";
import Search from "./pages/search";
import Info from "./pages/info";
import Stream from "./pages/stream";

render(() =>
    <Router>
        <Route path="/" component={Layout}>
            <Route path="/" component={Landing} />
            <Route path="/search" component={Search} />
            <Route path="/i/:id" component={Info} />
            <Route path="/e/:episode" component={Stream} />
        </Route>
        <Route path="*404" component={Error} />
    </Router>,
    document.getElementById("root"));