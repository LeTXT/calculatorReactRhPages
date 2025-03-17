const percentCalc = (inputValue: string) => {

    if (!inputValue) return ''
    
    // Procura o primeiro símbolo
    const searchSymbol: number = inputValue.search(/[^a-zA-Z0-9]/)
    if (searchSymbol === -1) return
    // Obtem o número até esse primeiro símbolo
    const searchResult: string = inputValue.substring(0, searchSymbol)
    // Obtem o símbolo
    const match = inputValue.match(/[^a-zA-Z0-9]/)
    if(!match) return
    const getSymbol: string = match[0]
    // Obtem o valor da porcentagem
    const searchPercent: string = inputValue.substring(searchSymbol + 1, inputValue.length -1)

    const percentValue: number = (Number(searchResult) * Number(searchPercent)) / 100

    // adiciona conta no input.value
    inputValue = searchResult + getSymbol + percentValue
     
}

export const calcResult = (inputValue: string | undefined, setInputState: React.Dispatch<React.SetStateAction<string>>, setBool: React.Dispatch<React.SetStateAction<boolean>>, setInputTop: React.Dispatch<React.SetStateAction<string>>) => {
    if (!inputValue) return
    try {
        
        // Caso seja porcentagem
        if(/%/.test(inputValue)) {

            inputValue = percentCalc(inputValue)
        }
            if (!inputValue) return
            const sanitizedInput = inputValue.replace(/÷/g, "/").replace(/×/g, "*")

            const result: number = new Function(`return ${sanitizedInput}`)()
            
            const toStringNumber: string = result.toString()

            const finalResult = toStringNumber.includes(".") ? result.toFixed(1) : result
            
            setBool(true)
            setInputTop(inputValue)
            setInputState(finalResult.toString())


    } catch (error) {
        console.error(error);
        setInputState("Error")
    }
}