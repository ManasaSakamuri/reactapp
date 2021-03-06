import react, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display,setDisplay] = useState(true)
    return (
        <div>
            <button onClick = {
                () => setDisplay(!display)
            }
            >Toggle display</button>
            {display && <HookMouse/>} {/**i want to show/hide hookMouse component on click of this button*/}
        </div>
    )
}

export default MouseContainer