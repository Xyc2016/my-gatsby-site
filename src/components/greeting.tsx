import React from 'react'

// Defining the <Greeting> component
const Greeting = ({name}: {name: string}) => {
  return (
    <p>Hi {name}!</p>
  )
}

export default Greeting