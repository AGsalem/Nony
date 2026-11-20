import { useState } from "preact/hooks";
import { useContext } from "preact/hooks";
import { Theame } from "..";
export default function () {
    const { bg , setBg } = useContext(Theame)
    const [word, SetWord] = useState<boolean>(true)
    const BG = () => {
        setBg(!bg)
        SetWord(!word)
    }
    return (
        <div className={`${bg ? 'bg-white text-black' : "bg-black text-white"} grid justify-center text-2xl `}>
            <h1>welcom</h1>
            <button onClick={() => BG()}>{word ?  'Dark':'Light' }</button>
        </div>
    )
}