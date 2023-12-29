import { A } from "@solidjs/router";
import { For, Show } from "solid-js";

export default function Cards(props) {
    return (
        <>
            <section className="flex flex-col my-4">
                <div className="flex justify-start items-center py-2 px-4">
                    <h2 className="text-white text-xl font-medium">{props.container}</h2>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex flex-wrap justify-center gap-4">
                        <Show when={props.data}>
                            <For each={props.data.results}>
                                {(e, i) => (
                                    <A href={"/i/" + e.id} key={i()}>
                                        <img src={e.coverImage.large} alt={e.title.romaji} title={e.title.romaji}
                                            loading="eager" width="500" height="300"
                                            className="w-40 h-56 md:w-52 md:h-72 object-cover rounded-md hover:scale-95" />
                                        <h2 className="text-white w-40 md:w-52 truncate">{e.title.romaji}</h2>
                                        <div className="flex w-40 md:w-52 justify-between items-center">
                                            <p className="text-neutral-400 text-sm">{e.format}</p>
                                            <Show when={e.seasonYear}
                                                fallback={<p className="text-neutral-400 text-sm">Unknown</p>}>
                                                <p className="text-neutral-400 text-sm">{e.seasonYear}</p>
                                            </Show>
                                        </div>
                                    </A>
                                )}
                            </For>
                        </Show>
                    </div>
                </div>
            </section>
        </>
    )
}