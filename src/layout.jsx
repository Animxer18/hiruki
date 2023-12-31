import { createSignal } from "solid-js";
import { A, useNavigate, useLocation } from "@solidjs/router";

export default function Layout(props) {

    const navigate = useNavigate();
    const location = useLocation();

    const [toggle, setToggle] = createSignal(false);

    return (
        <>
            <section className="flex justify-around items-center p-4">
                <A href="/" className="text-primary text-4xl font-bold lowercase hover:text-light">Hiruki</A>
                <div className="hidden md:flex items-center gap-4">
                    <A href="/" className="text-light text-sm font-medium hover:text-primary">Home</A>
                    <A href="/search" className="text-light text-sm font-medium hover:text-primary">Search</A>
                </div>
            </section>
            <section>
                <div className="flex md:hidden fixed bottom-4 right-4 text-light bg-primary 
                shadow-md rounded-sm py-1 px-2">
                    <button type="button" aria-label="Menu" onClick={() => setToggle(!toggle())}
                        className="fa-solid fa-bars text-2xl"></button>
                </div>
                <div className={`${toggle() ? "flex md:hidden" : "hidden"} 
            flex-col fixed justify-start bottom-16 right-4 bg-primary shadow-md rounded-sm gap-1 p-2`}>
                    <A href="/" className="text-light text-base font-medium rounded-sm pt-0.5 
                pb-1 px-4 hover:text-dark hover:bg-light">Home</A>
                    <A href="/search" className="text-light text-base font-medium rounded-sm pt-0.5 
                pb-1 px-4 hover:text-dark hover:bg-light">Search</A>
                </div>
            </section>
            <section className="flex justify-between items-center py-2 px-4">
                <button type="button" aria-label="Back" disabled={location.pathname === "/"} onClick={() => navigate(-1)}
                    className="fa-solid fa-arrow-left text-light bg-primary bg-opacity-25 rounded-sm 
                py-2 px-4 hover:bg-primary disabled:cursor-not-allowed 
                disabled:hover:bg-primary disabled:hover:bg-opacity-25"></button>
                <div className="flex items-center gap-4">
                    <img src="/terakomari.gif" alt="Hiruki" title="Hiruki"
                        loading="eager" width="500" height="300"
                        className="w-14 h-14 object-cover rounded-full" />
                    <div className="flex flex-col">
                        <p className="text-primary font-semibold">Share Hiruki</p>
                        <p className="text-light">to your friend</p>
                    </div>
                </div>
            </section>
            {props.children}
            <section className="bg-subackground flex flex-col justify-center items-center gap-2 p-4">
                <h1 className="text-light text-4xl font-semibold">Hiruki</h1>
                <p className="text-light text-sm text-center text-opacity-50">
                    This site does not store any files on our server,
                    we only linked to the media which is hosted on 3rd party services.</p>
                <p className="text-light text-sm text-center">&copy;{new Date().getFullYear()}. Hiruki</p>
            </section>
        </>
    )
}