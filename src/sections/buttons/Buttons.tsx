import { useState } from "react"
import { btn } from '../../assets/btnArray'
import { captureButtonPress } from '../../utils/captureButtonPress'
import './button.scss'

interface ButtonProps {
    setInputState: React.Dispatch<React.SetStateAction<string>>,
    inputState: string,
    setInputTop: React.Dispatch<React.SetStateAction<string>>
}


function Buttons({setInputState, inputState, setInputTop}: ButtonProps) {
    const [bool, setBool] = useState<boolean>(false)

    return (
        <div className='buttonsContainer'>
            {btn.map((item, index) => (
                <button key={index} onClick={() => captureButtonPress(item, setInputState, setInputTop, inputState, bool, setBool)}>
                    {item}
                </button>
            ))}
        </div>
    )
}

export default Buttons;