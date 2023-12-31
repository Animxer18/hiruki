import { Show, createResource } from "solid-js";
import { A, useParams, useSearchParams } from "@solidjs/router";
import { EpisodesLoader, StreamLoader, DownloadLoader } from "../components/Loader";
import Episodes from "../components/Episodes";

const getStream = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/stream/" + id)).json();
}

const getDownload = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V1 + "/download/" + id)).json();
}

const getEpisodes = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/episode/" + id)).json();
}

export default function Stream(props) {

    const params = useParams();
    const [query] = useSearchParams();

    const [stream] = createResource(() => params.episode, getStream);
    const [download] = createResource(() => params.episode, getDownload);
    const [episodes] = createResource(() => query.id, getEpisodes);

    return (
        <>
            <Show when={!stream.loading} fallback={<StreamLoader />} />
            <Show when={stream() && !stream.loading}>
                <section className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-2 px-3 md:px-4">
                    <div className="flex flex-col">
                        <h2 className="text-light text-xl font-medium">{stream().info.title}</h2>
                        <p className="text-light text-base text-opacity-50">
                            Currently watching episode {stream().info.episode}</p>
                    </div>
                    <A href={"/i/" + query.id} className="text-light bg-primary text-center rounded-sm w-full md:w-auto
                        pt-0.5 pb-1 px-2 hover:bg-opacity-75">Go Back</A>
                </section>
                <section className="flex justify-center items-center py-4 px-4">
                    <iframe
                        src={stream().plyr.main}
                        frameborder="0"
                        allowFullScreen={true}
                        className="w-full h-40 md:h-[450px] rounded-sm" />
                </section>
                <Show when={!download.loading} fallback={<DownloadLoader />} />
                <Show when={download() && !download.loading}>
                    <section className="flex justify-center items-center py-4 px-4">
                        <A href={download().download} target="_blank"
                            className="text-light bg-primary text-center rounded-sm w-full
                        pt-1 pb-1.5 px-2 hover:bg-opacity-75">Download Episode</A>
                    </section>
                </Show>
            </Show>
            <Show when={!episodes.loading} fallback={<EpisodesLoader count={new Array(24)} />}>
                <Show when={episodes() && !episodes.loading}>
                    <Episodes container="Episodes" data={episodes()} id={query.id} />
                </Show>
            </Show>
        </>
    )
}