import { A } from "@solidjs/router";

export default function Error(props) {
    return (
        <>
            <section className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-center text-center gap-4 p-4">
                    <div className="flex flex-col">
                        <h2 className="text-primary text-8xl font-bold animate-bounce">404</h2>
                        <p className="text-light text-lg">Something went wrong...</p>
                    </div>
                    <A href="/" className="text-light bg-primary text-lg rounded-md 
                    py-1 px-4 hover:bg-opacity-75">Go Home</A>
                </div>
            </section>
        </>
    )
}