import { A } from "@solidjs/router";
import { For, Show } from "solid-js";
import { CardsLoader } from "./Loader";

export default function Cards(props) {
    return (
        <>
            <Show when={props.data} fallback={<CardsLoader count={new Array(6)} />}>
                <Show when={props.data.results.length > 0}>
                    <section className="flex flex-col my-4">
                        <div className="flex justify-start items-center py-2 px-3 md:px-4">
                            <h2 className="text-light text-xl font-medium">{props.container}</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-wrap justify-center gap-4">
                                <For each={props.data.results}>
                                    {(e, i) => (
                                        <A href={"/i/" + e.id} key={i()}>
                                            <img src={e.coverImage.large} alt={e.title.romaji} title={e.title.romaji}
                                                loading="eager" width="500" height="300"
                                                className="w-40 h-56 md:w-52 md:h-72 object-cover rounded-sm hover:scale-95" />
                                            <h2 className="text-light w-40 md:w-52 truncate">{e.title.romaji}</h2>
                                            <div className="flex w-40 md:w-52 justify-between items-center">
                                                <p className="text-light text-sm text-opacity-50">
                                                    {e.format === "TV_SHORT" ? "TV Short"
                                                        : e.format === "MOVIE" ? "Movie"
                                                            : e.format === "SPECIAL" ? "Special"
                                                                : e.format === "MUSIC" ? "Music"
                                                                    : e.format === "MANGA" ? "Manga"
                                                                        : e.format === "NOVEL" ? "Novel"
                                                                            : e.format === "ONE_SHOT" ? "One Shot"
                                                                                : e.format}</p>
                                                <Show when={e.seasonYear}
                                                    fallback={<p className="text-neutral-400 text-sm">
                                                        {e.status === "FINISHED" ? "Finished"
                                                            : e.status === "RELEASING" ? "Releasing"
                                                                : e.status === "NOT_YET_RELEASED" ? "TBA"
                                                                    : e.status === "CANCELLED" ? "Cancelled"
                                                                        : e.status}</p>}>
                                                    <p className="text-light text-sm text-opacity-50">{e.seasonYear}</p>
                                                </Show>
                                            </div>
                                        </A>
                                    )}
                                </For>
                            </div>
                        </div>
                    </section>
                </Show>
            </Show>
        </>
    )
}