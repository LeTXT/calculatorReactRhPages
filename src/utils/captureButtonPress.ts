import {calcResult} from "./calcResult"
import { addNumber } from "./addNumber"
import { addSymbol } from "./addSymbol"

export const captureButtonPress = (btn: string | number, setInputState: React.Dispatch<React.SetStateAction<string>>, setInputTop: React.Dispatch<React.SetStateAction<string>>, inputState: string, bool: boolean, setBool: React.Dispatch<React.SetStateAction<boolean>>) => {
    
    const inputValue: string = inputState
    const click = new Audio('click.mp3')

    click.volume = 0.5
    click.currentTime = 0.22

    click.pause()
    click.play()
    
    // Caso btn ser número
    if(typeof btn === 'number' || /^\d+(\.\d+)?$/.test(String(btn))) { 
        addNumber(btn, inputValue, setInputState, setInputTop, bool, setBool)
    } 
    // Caso btn for symbol
    if(typeof btn === 'string' && /^[^\w\s]+$/.test(btn)) { // Symbol
        addSymbol(btn, setInputState, inputValue, setBool)
    }
    if(btn === "RESULT" && /\d/.test(inputValue) && /[^\w\s]/.test(inputValue)) {
        calcResult(inputValue, setInputState, setBool, setInputTop)
    }
    if(btn === "DEL") {
        try {
            const delLast = String(inputValue).slice(0, -1)
            setInputState(delLast)
        } catch (error) {
            console.error(error);
            setInputState("Error")
        }
        
    }
    if(btn === "AC") {
        setInputState("")
    }
}