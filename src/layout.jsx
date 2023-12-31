import { A } from "@solidjs/router";

export default function Layout(props) {
    return (
        <>
            <section className="flex justify-around items-center p-4">
                <A href="/" className="text-primary text-3xl font-semibold lowercase hover:text-light">Hiruki</A>
                <div className="flex items-center gap-4">
                    <A href="/" className="text-light text-sm font-medium hover:text-primary">Home</A>
                    <A href="/search" className="text-light text-sm font-medium hover:text-primary">Search</A>
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