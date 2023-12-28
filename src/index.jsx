import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./assets/global.css";
import Layout from "./layout";
import Landing from "./pages/index";

render(() =>
    <Router>
        <Route path={"/"} component={Layout}>
            <Route path={"/"} component={Landing} />
        </Route>
    </Router>,
    document.getElementById("root"));