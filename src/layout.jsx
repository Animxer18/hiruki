import { A } from "@solidjs/router";

export default function Layout(props) {
    return (
        <>
            <section className="flex justify-around items-center p-4">
                <A href="/" className="text-primary text-3xl font-semibold lowercase hover:text-white">Hiruki</A>
                <div className="hidden md:flex items-center gap-4">
                    <A href="/" className="text-white text-sm font-medium hover:text-primary">Home</A>
                    <A href="/" className="text-white text-sm font-medium hover:text-primary">This Season</A>
                    <A href="/" className="text-white text-sm font-medium hover:text-primary">Schedule</A>
                </div>
                <A href="/" className="text-white text-sm font-medium hover:underline">Search</A>
            </section>
            {props.children}
            <section className="bg-subackground flex flex-col md:flex-row justify-evenly md:items-center gap-4 p-4">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <h1 className="text-white text-sm opacity-50">
                            This site does not store any files on our server..</h1>
                        <p className="text-white text-sm opacity-50">
                            We only linked to the media which is hosted on 3rd party services.</p>
                    </div>
                    <h2 className="text-white text-3xl font-medium lowercase">Hiruki</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="flex flex-col gap-2">
                        <A href="/" className="text-white text-base md:text-sm font-medium 
                        hover:text-primary">Home</A>
                        <A href="/" className="text-white text-base md:text-sm font-medium 
                        hover:text-primary">This Season</A>
                        <A href="/" className="text-white text-base md:text-sm font-medium 
                        hover:text-primary">Schedule</A>
                    </div>
                    <div className="flex flex-col gap-2">
                        <A href="/" className="text-white text-base md:text-sm font-medium 
                        hover:text-primary">DMCA</A>
                        <A href="/" className="text-white text-base md:text-sm font-medium 
                        hover:text-primary">Donate</A>
                        <A href="/" className="text-white text-base md:text-sm font-medium 
                        hover:text-primary">Github</A>
                    </div>
                </div>
            </section>
        </>
    )
}