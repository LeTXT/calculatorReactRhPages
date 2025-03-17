import './screen.scss'

interface ScreenProps {
    inputState: string,
    inputTop: string
}

function Screen({inputState, inputTop}: ScreenProps) {
    return (
        <div className='screenContainer'>
            <input className='firstInput' value={inputTop} readOnly />
            <input className='secondInput' value={inputState} readOnly />
        </div>
    )
}

export default Screen;