import { For, Show, createResource } from "solid-js";
import { A, useParams } from "@solidjs/router";
import { CardsLoader, EpisodesLoader, InfoLoader } from "../components/Loader";
import Episodes from "../components/Episodes";
import Cards from "../components/Cards";

const getInfo = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/info/" + id)).json();
}

const getEpisodes = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/episode/" + id)).json();
}

const getRecommendations = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/recommendations/" + id + "?limit=6")).json();
}

export default function Info(props) {

    const params = useParams();

    const [info] = createResource(() => params.id, getInfo);
    const [episodes] = createResource(() => params.id, getEpisodes);
    const [recommendations] = createResource(() => params.id, getRecommendations);

    return (
        <>
            <Show when={!info.loading} fallback={<InfoLoader />} />
            <Show when={info() && !info.loading}>
                <Show when={info().bannerImage}>
                    <section className="flex justify-center items-center p-4">
                        <img src={info().bannerImage} alt={info().title.romaji} title={info().title.romaji}
                            loading="eager" width="500" height="300"
                            className="w-full h-28 md:h-52 object-cover rounded-sm opacity-35" />
                    </section>
                </Show>
                <section className="flex flex-col md:flex-row items-center gap-4 p-4">
                    <div className="hidden md:flex flex-col items-center text-center w-56 gap-2">
                        <img src={info().coverImage.large} alt={info().title.romaji} title={info().title.romaji}
                            loading="eager" width="500" height="300"
                            className="w-52 h-72 object-cover rounded-sm" />
                        <A href={info().siteUrl} target="_blank"
                            className="text-light bg-primary w-52 rounded-sm 
                                pt-0.5 pb-1 px-2 hover:bg-opacity-75">View on Anilist</A>
                        <A href={"https://myanimelist.net/anime/" + info().idMal} target="_blank"
                            className="text-light bg-primary w-52 rounded-sm 
                            pt-0.5 pb-1 px-2 hover:bg-opacity-75">View on MAL</A>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-2">
                        <Show when={info().season && info().year}
                            fallback={<p className="text-light text-base opacity-50">Unknown</p>}>
                            <p className="text-light text-base opacity-50">{info().season} {info().year}</p>
                        </Show>
                        <h2 className="text-light text-2xl font-bold">{info().title.romaji}</h2>
                        <div className="flex flex-row items-center gap-2">
                            <Show when={info().format}>
                                <p className="text-light text-base">
                                    {info().format === "TV_SHORT" ? "TV Short"
                                        : info().format === "MOVIE" ? "Movie"
                                            : info().format === "SPECIAL" ? "Special"
                                                : info().format === "MUSIC" ? "Music"
                                                    : info().format === "MANGA" ? "Manga"
                                                        : info().format === "NOVEL" ? "Novel"
                                                            : info().format === "ONE_SHOT" ? "One Shot"
                                                                : info().format}</p>
                                <p className="text-light text-sm opacity-75">❖</p>
                            </Show>
                            <Show when={info().status}>
                                <p className="text-light text-base">
                                    {info().status === "FINISHED" ? "Finished"
                                        : info().status === "RELEASING" ? "Releasing"
                                            : info().status === "NOT_YET_RELEASED" ? "TBA"
                                                : info().status === "CANCELLED" ? "Cancelled"
                                                    : info().status}</p>
                            </Show>
                            <Show when={info().score.averageScore}>
                                <p className="text-light text-sm opacity-75">❖</p>
                                <p className="text-light text-base">{info().score.averageScore}%</p>
                            </Show>
                        </div>
                        <Show when={info().genres}>
                            <div className="flex flex-wrap items-center gap-2">
                                <For each={info().genres}>
                                    {(genre, i) => <button type="button" key={i()}
                                        className="text-light bg-primary rounded-sm 
                                        pt-0.5 pb-1 px-2">{genre}</button>
                                    }
                                </For>
                            </div>
                        </Show>
                        <Show when={info().description}>
                            <div innerHTML={info().description}
                                className="text-light text-base rounded-sm w-full h-40 overflow-y-auto pr-2" />
                        </Show>
                        <div className="flex md:hidden flex-col items-center text-center gap-2">
                            <A href={info().siteUrl} target="_blank"
                                className="text-light bg-primary w-full rounded-sm 
                                pt-0.5 pb-1 px-2 hover:bg-opacity-75">View on Anilist</A>
                            <A href={"https://myanimelist.net/anime/" + info().idMal} target="_blank"
                                className="text-light bg-primary w-full rounded-sm 
                                pt-0.5 pb-1 px-2 hover:bg-opacity-75">View on MAL</A>
                        </div>
                    </div>
                </section>
            </Show>
            <Show when={!episodes.loading} fallback={<EpisodesLoader count={new Array(24)} />}>
                <Show when={episodes() && !episodes.loading}>
                    <Episodes container="Episodes" data={episodes()} id={params.id} />
                </Show>
            </Show>
            <Show when={!recommendations.loading} fallback={<CardsLoader count={new Array(6)} />} />
            <Show when={recommendations() && !recommendations.loading}>
                <Cards container="Recommendations" data={recommendations()} />
            </Show>
        </>
    )
}