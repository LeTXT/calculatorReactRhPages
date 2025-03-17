export const addNumber = (btn: string | number, inputValue: string, setInputState: React.Dispatch<React.SetStateAction<string>>, setInputTop: React.Dispatch<React.SetStateAction<string>>, bool: boolean, setBool: React.Dispatch<React.SetStateAction<boolean>>) => {
    
    if(!bool) {
        return setInputState((prevInput) => String(prevInput) + btn)
    } 
    if(bool) {
        // secundInput.value = input.value
        setInputTop(inputValue)
        setBool(false)
        setInputState(btn.toString())
    }

    return setInputState((prevInput) => String(prevInput) + btn)
}