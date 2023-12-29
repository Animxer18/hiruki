import { For, Show, createResource } from "solid-js";
import { A, useParams } from "@solidjs/router";
import Cards from "../components/Cards";

const getInfo = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/info/" + id)).json();
}

const getRecommendations = async (id) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/recommendations/" + id + "?limit=6")).json();
}

export default function Info(props) {

    const params = useParams();

    const [info] = createResource(() => params.id, getInfo);
    const [recommendations] = createResource(() => params.id, getRecommendations);

    return (
        <>
            <Show when={info()}>
                <section className="flex justify-center items-center p-4">
                    <img src={info().bannerImage} alt={info().title.romaji}
                        className="w-full h-28 md:h-44 object-cover rounded-md opacity-35" />
                </section>
                <section className="flex flex-col md:flex-row items-center gap-4 p-4">
                    <div className="hidden md:flex flex-col items-center text-center w-56 gap-2">
                        <img src={info().coverImage.large} alt={info().title.romaji}
                            className="w-52 h-72 object-cover rounded-md" />
                        <A href={"/e/" + params.id + "?id=" + info().id_provider.idGogo}
                            className="text-white border-success border-2 w-52 rounded-md 
                                pt-0.5 pb-1 px-2 hover:bg-success">Watch Now</A>
                        <A href={"https://myanimelist.net/anime/" + info().idMal} target="_blank"
                            className="text-white border-primary border-2 w-52 rounded-md 
                                pt-0.5 pb-1 px-2 hover:bg-primary">View on MAL</A>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-2">
                        <p className="text-white text-base opacity-50">{info().season} {info().year}</p>
                        <h2 className="text-white text-2xl font-bold">{info().title.romaji}</h2>
                        <div className="flex flex-row items-center gap-2">
                            <p className="text-white text-base opacity-50">{info().format}</p>
                            <p className="text-white text-sm">❖</p>
                            <p className="text-white text-base opacity-50">{info().status}</p>
                            <p className="text-white text-sm">❖</p>
                            <p className="text-white text-base opacity-50">{info().score.averageScore}%</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <For each={info().genres}>
                                {(genre, i) => <button type="button" key={i()}
                                    className="text-white bg-primary rounded-md 
                                        pt-0.5 pb-1 px-2">{genre}</button>
                                }
                            </For>
                        </div>
                        <div innerHTML={info().description}
                            className="text-white bg-subackground text-base rounded-md 
                                w-full h-40 overflow-y-auto p-2" />
                        <div className="flex md:hidden flex-col items-center text-center gap-2">
                            <A href={"/e/" + params.id + "?id=" + info().id_provider.idGogo}
                                className="text-white border-success border-2 w-full rounded-sm 
                                pt-0.5 pb-1 px-2 hover:bg-success">Watch Now</A>
                            <A href={"https://myanimelist.net/anime/" + info().idMal} target="_blank"
                                className="text-white border-primary border-2 w-full rounded-sm 
                                pt-0.5 pb-1 px-2 hover:bg-primary">View on MAL</A>
                        </div>
                    </div>
                </section>
            </Show>
            <Show when={recommendations()}>
                <Cards container="Recommendations" data={recommendations()} />
            </Show>
        </>
    )
}