import { useState, useEffect } from "preact/hooks";
import { render } from "preact";

const dom = document.getElementById("tabs") as HTMLInputElement;

interface Block {
    id: string;
    title: string;
    content: string;
    background: string;
    color: string;
}

function App() {
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [active, setActive] = useState<any>(null);

    const getBlocks = () => {
        const raw = dom.getAttribute("data-blocks")?.replace(/\s\s+/g, " ");
        const data = raw?.split("%")?.reduce((arr: [], item: string) => {
            item = item.trim().replaceAll("'", `"`);

            if (item.length > 0)
                arr.push( JSON.parse(item) );
            
            return arr;
        }, []) || [];
        const first = data.at(0);

        setBlocks(data);

        if (first) setActive(first["id"]);
    }

    useEffect(() => {
        getBlocks();
    }, []);

    return (
        <>
            <header class="grid grid-flow-col auto-cols-fr divide-x shadow-sm">
                { blocks.map((block: Block) => 
                    <button
                        onClick={ () => setActive(block.id) }
                        style={ active === block.id && { background: block.background, color: block.color }}
                        className={merge("tab-button py-3 px-4 text-uppercase font-semibold", active === block.id ? "" : "hover:bg-slate-100")}
                        data-tab={ block.id }
                        for={ block.id }
                    >
                        { block.title }
                    </button>
                )}
            </header>

            { blocks.map((block: Block) => 
                <div
                    id={ block.id }
                    className={ merge("tab-content content p-2", active === block.id ? "" : "hidden")}
                >
                    { block.content }
                </div>
            )}
        </>
    )
}

if (dom)
    render(<App />, dom);

function merge(...arr) {
    return arr.join(" ");
}