import { Show, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import { EpisodesLoader } from "./Loader";

export default function Episodes(props) {

    const [count, setCount] = createSignal(24);

    return (
        <>
            <Show when={props.data} fallback={<EpisodesLoader count={new Array(24)} />}>
                <Show when={props.data.episodes.length > 0}>
                    <section className="flex flex-col my-4">
                        <div className="flex justify-start items-center py-2 px-5 md:px-4">
                            <h2 className="text-white text-xl font-medium">{props.container}</h2>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-wrap justify-center gap-4">
                                <For each={props.data.episodes.slice(0, count())}>
                                    {(e, i) => (
                                        <A href={"/e/" + e.id + "?id=" + props.id} key={i()}>
                                            <div className="text-white bg-subackground border-transparent border-2 
                                        text-sm font-medium flex justify-center items-center text-center 
                                        w-24 h-10 md:w-24 md:h-12 rounded-md 
                                        hover:border-primary hover:cursor-pointer">EP {e.number}</div>
                                        </A>
                                    )}
                                </For>
                                <Show when={props.data.episodes.length > 24 && count() === 24}>
                                    <div className="w-full px-4">
                                        <button type="button" onClick={() => setCount(props.data.episodes.length)}
                                            className="text-white bg-subackground w-full rounded-md 
                                        py-1 hover:bg-primary">View More</button>
                                    </div>
                                </Show>
                            </div>
                        </div>
                    </section>
                </Show>
            </Show>
        </>
    )
}