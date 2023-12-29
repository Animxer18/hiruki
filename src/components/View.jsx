import { Show } from "solid-js";
import { SliderProvider, Slider } from "solid-slider";
import { autoplay } from "solid-slider/plugins/autoplay";
import "solid-slider/slider.css";
import { ViewLoader } from "./Loader";

export default function View(props) {
    return (
        <>
            <section className="hidden md:flex p-4">
                <SliderProvider>
                    <Slider options={{ loop: true, drag: true }} plugins={[autoplay(5000, {})]}>
                        <Show when={props.data} fallback={<ViewLoader />}>
                            <For each={props.data.results}>
                                {(e, i) => (
                                    <Show when={e.bannerImage}>
                                        <div key={i()} className="relative">
                                            <img src={e.bannerImage} alt={e.title.romaji} title={e.title.romaji}
                                                loading="eager" width="500" height="300"
                                                className="w-full h-64 object-cover rounded-md opacity-35" />
                                            <div className="absolute top-0 flex flex-col gap-2 p-4">
                                                <h2 className="text-white text-2xl font-semibold">{e.title.romaji}</h2>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-white text-sm font-semibold">{e.format}</p>
                                                    <span className="text-white text-opacity-50 text-sm">❖</span>
                                                    <p className="text-white text-sm font-semibold">{e.status}</p>
                                                </div>
                                                <p innerHTML={e.description}
                                                    className="text-white text-opacity-75 w-full h-36 
                                                    overflow-y-auto pr-2" />
                                            </div>
                                        </div>
                                    </Show>
                                )}
                            </For>
                        </Show>
                    </Slider>
                </SliderProvider>
            </section>
        </>
    )
}