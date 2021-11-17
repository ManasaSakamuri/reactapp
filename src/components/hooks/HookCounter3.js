import React, { useState } from 'react'

function HookCounter3() {
    const[name,setName] = useState({ firstName: '',lastName:''})
    return (
        <from>
            <input type = 'text'
            value = {name.firstName}
            onChange = { e => setName({...name,firstName: e.target.value})}
            />
            <input type = 'text'
            value = {name.lastName}
            onChange = { e => setName({...name,lastName: e.target.value})}
            />
            <h2>your first name is --{name.firstName}</h2>
            <h2>your lastname is --{name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>

        </from>
    )
}

export default HookCounter3