import { useState } from "react"
import './home.scss'

import Screen from "../sections/sreen/Screen";
import Buttons from "../sections/buttons/Buttons";

function Home() {
    const [inputTop, setInputTop] = useState<string>("")
    const [inputState, setInputState] = useState<string>("");
    
    return (
        <div className='homeContainer'>
            <div className='calculatorContainer'>
                <Screen inputState={inputState} inputTop={inputTop} />
                <Buttons setInputState={setInputState} inputState={inputState} setInputTop={setInputTop} />
            </div>
        </div>
    )
}

export default Home