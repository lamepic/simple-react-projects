import React from 'react'
import Person from './Person'

function List({data}) {
  return (
    <div className='person-list'>
        {data.map(person => {
            return <Person key={person.id} name={person.name} age={person.age} image={person.image} />
        })}
    </div>
  )
}

export default List