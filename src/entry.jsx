import { Router, Route } from "@solidjs/router";
import "./assets/global.css";
import Layout from "./layout";
import Error from "./pages/error";
import Landing from "./pages/index";
import Info from "./pages/info";
import Stream from "./pages/stream";

export default function Entry() {
    return (
        <>
            <Router>
                <Route path="/" component={Layout}>
                    <Route path="/" component={Landing} />
                    <Route path="/i/:id" component={Info} />
                    <Route path="/e/:episode" component={Stream} />
                </Route>
                <Route path="*404" component={Error} />
            </Router>
        </>
    )
}