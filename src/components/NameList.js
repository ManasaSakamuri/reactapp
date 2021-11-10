import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'manasa',
            age: 23,
            skill: 'react'
        },
        {
            id: 1,
            name: 'sakamuri',
            age: 23,
            skill: 'flutter'
        },
        {
            id: 1,
            name: 'manu',
            age: 22,
            skill: 'java'
        },
        {
            id: 1,
            name: 'babbi',
            age: 22,
            skill: 'spring'
        }
    ]



    /* const names = ['manasa', 'sakamuri', 'manu', 'dxc','react']
    const namesList = names.map(name => <h2>{name}</h2>) */
    const personList = persons.map(person => (<Person human = {person}></Person>))

    return (
        <div>{personList}</div>
    )
}

export default NameList