import { Show, createResource } from "solid-js";
import { useParams, useSearchParams } from "@solidjs/router";
import { EpisodesLoader, StreamLoader } from "../components/Loader";
import Episodes from "../components/Episodes";

const getStream = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/stream/" + id)).json();
}

const getEpisodes = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/episode/" + id)).json();
}

export default function Stream(props) {

    const params = useParams();
    const [query] = useSearchParams();

    const [stream] = createResource(() => params.episode, getStream);
    const [episodes] = createResource(() => query.id, getEpisodes);

    return (
        <>
            <Show when={!stream.loading} fallback={<StreamLoader />} />
            <Show when={stream() && !stream.loading}>
                <section className="flex flex-col justify-start py-2 px-3 md:px-4">
                    <h2 className="text-white text-xl font-medium">{stream().info.title}</h2>
                    <p className="text-white text-base text-opacity-50">
                        Currently watching episode {stream().info.episode}</p>
                </section>
                <section className="flex justify-center items-center py-4 px-4">
                    <iframe
                        src={stream().plyr.main}
                        frameborder="0"
                        allowFullScreen={true}
                        className="w-full h-40 md:h-[450px] rounded-md" />
                </section>
            </Show>
            <Show when={!episodes.loading} fallback={<EpisodesLoader count={new Array(24)} />}>
                <Show when={episodes() && !episodes.loading}>
                    <Episodes container="Episodes" data={episodes()} id={query.id} />
                </Show>
            </Show>
        </>
    )
}