import React, { Component } from 'react'
import Input from './components/refs/Input'

class FocusInput extends component {
    constuctor(props) {
        super(props)

        this.conponentRef = React.createRef()
    }

    ClickHandler = () => {
        this.conponentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input ref = {this.conponentRef}/>
                <button onClick = {this.clickHandler}>focus input</button> 
            </div>
        )
    }
}
