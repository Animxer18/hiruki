import { Show, createResource, createSignal } from "solid-js";
import { useSearchParams } from "@solidjs/router";
import Cards from "../components/Cards";
import { CardsLoader } from "../components/Loader";

const getSearch = async (query) => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/search?q=" + query)).json();
}

const getTrending = async () => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/trending?limit=6")).json();
}

const getPopular = async () => {
    return (await fetch(import.meta.env.VITE_API_V2 + "/popular?limit=6")).json();
}

export default function Search(props) {

    const [query, setQuery] = useSearchParams();

    const [input, setInput] = createSignal("");

    const [search] = createResource(() => query.q, getSearch);
    const [trending] = createResource(getTrending);
    const [popular] = createResource(getPopular);

    const onSubmit = (e) => {
        e.preventDefault();
        setQuery({ q: input() })
    }

    return (
        <>
            <section className="flex flex-col justify-center items-center gap-4 my-8">
                <h2 className="text-light text-2xl font-medium">Search</h2>
                <form className="flex flex-col md:flex-row justify-center items-center 
                w-full gap-4 px-4" onSubmit={(e) => onSubmit(e)}>
                    <input type="text" placeholder="Search" onInput={(e) => setInput(e.target.value)}
                        className="text-light bg-subackground w-full md:w-96 outline-none rounded-sm pt-2.5 pb-3 px-4" />
                    <button type="submit"
                        className="text-light bg-primary rounded-sm 
                        pt-1.5 pb-2 md:pt-2.5 md:pb-3 px-4 hover:bg-opacity-75">Search</button>
                </form>
            </section>
            <Show when={query.q}>
                <Show when={!search.loading} fallback={<CardsLoader count={new Array(12)} />} />
                <Show when={search() && !search.loading}>
                    <Cards container={`Search Result: ${query.q}`} data={search()} />
                </Show>
                <Show when={search() && search().results.length === 0}>
                    <section className="flex justify-center items-center my-28">
                        <div className="flex flex-col items-center text-center gap-4 p-4">
                            <div className="flex flex-col">
                                <h2 className="text-primary text-6xl font-bold animate-bounce">No Result</h2>
                                <p className="text-light text-lg">No result found...</p>
                            </div>
                        </div>
                    </section>
                </Show>
            </Show>
            <Show when={!query.q}>
                <Cards container="Trending Now" data={trending()} />
                <Cards container="All Time Popular" data={popular()} />
            </Show>
        </>
    )
}