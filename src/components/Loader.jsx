export function ViewLoader(props) {
    return (
        <>
            <section>
                <div className="bg-white bg-opacity-25 w-full h-64 rounded-md animate-pulse" />
            </section>
        </>
    )
}

export function CardsLoader(props) {
    return (
        <>
            <section className="flex flex-col my-4">
                <div className="flex justify-start items-center py-2 px-3 md:px-4">
                    <div className="bg-white bg-opacity-25 w-60 h-8 rounded-md animate-pulse" />
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex flex-wrap justify-center gap-4">
                        <For each={props.count}>
                            {(e, i) => (
                                <div className="space-y-2" key={i()}>
                                    <div
                                        className="bg-white bg-opacity-25 w-40 h-56 md:w-52 md:h-72 
                                        rounded-md animate-pulse" />
                                    <div
                                        className="bg-white bg-opacity-25 w-40 h-10 md:w-52 md:h-10 
                                        rounded-md animate-pulse" />
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </section>
        </>
    )
}

export function InfoLoader(props) {
    return (
        <>
            <section className="flex justify-center items-center p-4">
                <div className="bg-white bg-opacity-25 w-full h-28 md:h-44 rounded-md animate-pulse" />
            </section>
            <section className="flex flex-col md:flex-row gap-4 p-4">
                <div className="hidden md:flex flex-col items-center text-center w-56 gap-2">
                    <div className="bg-white bg-opacity-25 w-52 h-72 rounded-md animate-pulse" />
                    <div className="bg-white bg-opacity-25 w-52 h-8 rounded-md animate-pulse" />
                    <div className="bg-white bg-opacity-25 w-52 h-8 rounded-md animate-pulse" />
                </div>
                <div className="flex md:flex-1 flex-col gap-2">
                    <div className="bg-white bg-opacity-25 w-52 h-6 rounded-md animate-pulse" />
                    <div className="bg-white bg-opacity-25 w-full md:w-72 h-8 rounded-md animate-pulse" />
                    <div className="bg-white bg-opacity-25 w-52 h-6 rounded-md animate-pulse" />
                    <div className="bg-white bg-opacity-25 w-full md:w-72 h-8 rounded-md animate-pulse" />
                    <div className="bg-white bg-opacity-25 w-full h-40 rounded-md animate-pulse" />
                    <div className="bg-white bg-opacity-25 w-full md:w-72 h-8 rounded-md animate-pulse" />
                    <div className="bg-white bg-opacity-25 w-full md:w-72 h-8 rounded-md animate-pulse" />
                </div>
            </section>
        </>
    )
}

export function EpisodesLoader(props) {
    return (
        <>
            <section className="flex flex-col my-4">
                <div className="flex justify-start items-center py-4 px-5 md:px-4">
                    <div className="bg-white bg-opacity-25 w-60 h-8 rounded-md animate-pulse" />
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex flex-wrap justify-center gap-4">
                        <For each={props.count}>
                            {(e, i) => (
                                <div key={i()}>
                                    <div
                                        className="bg-white bg-opacity-25 w-24 h-10 md:w-24 md:h-12 
                                        rounded-md animate-pulse" />
                                </div>
                            )}
                        </For>
                        <div className="w-full px-4">
                            <div className="bg-white bg-opacity-25 w-full h-8 rounded-md animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export function StreamLoader(props) {
    return (
        <>
            <section className="flex justify-start p-4">
                <div className="bg-white bg-opacity-25 w-64 h-12 rounded-md animate-pulse" />
            </section>
            <section className="flex justify-center items-center py-4 px-4">
                <div className="bg-white bg-opacity-25 w-full h-40 md:h-[450px] rounded-md animate-pulse" />
            </section>
            <section className="flex justify-center items-center py-4 px-4">
                <div className="bg-white bg-opacity-25 w-full h-10 rounded-md animate-pulse" />
            </section>
        </>
    )
}

export function DownloadLoader(props) {
    return (
        <>
            <section className="flex justify-center items-center py-4 px-4">
                <div className="bg-white bg-opacity-25 w-full h-10 rounded-md animate-pulse" />
            </section>
        </>
    )
}