import React from 'react'
import Person from './Person';

const NameList = () => {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 30,
            skill: "Angular"
        },
        {
            id: 2,
            name: "Clark",
            age: 25,
            skill: "React"
        },
        {
            id: 3,
            name: "Diana",
            age: 28,
            skill: "Vue"
        },
    ];
    // const PersonsList = persons.map(person => {
    //     return (
    //         <h2 key={person.id}>I am {person.name}, I am {person.age} years old, I know {person.skill}</h2>
    //     )
    // });
    const PersonsList = persons.map(person => <Person key={person.id} person={person}></Person>)
    console.log(PersonsList)
    return (
        <div>
        {
           PersonsList
        }
        </div>
    )
}

export default NameList
