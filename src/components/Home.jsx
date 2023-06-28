import { useState } from 'react'
import Landing from './Landing'
import formValues from '../App'
import Form from './Form'
import Error from './Error'
import Thanks from './Thanks'


const Home = ({currentPage, name, age, email, incrementPage,backButton,handleChange,reducePage}) => {
  // Most all of your work for this lab will be done here in the HomePage component.

  // Set up conditional rendering below to determine which component to show on our home page!
  if (currentPage === 0) {
    return (
      <div className="Landing">
          <Landing 
            currentPage={0}
            name={formValues.name}
            age={formValues.age}
            email={formValues.email}
            incrementPage={incrementPage}
            
            handleChange={handleChange}
          />
      </div>
    )
    
  }
else if(currentPage === 1){
  return (
    <Form 
    currentPage={1}
    name={formValues.name}
    age={formValues.age}
    email={formValues.email}
    incrementPage={incrementPage}
    reducePage={reducePage}
    handleChange={handleChange}
    />
  )
}
else if(currentPage === 2 && age > 18 ){
  return (
    <Thanks 
    currentPage={2}
    name={formValues.name}
    age={formValues.age}
    email={formValues.email}
    incrementPage={incrementPage}
    reducePage={reducePage}
    handleChange={handleChange}
    />
  )
}
else {
  return (
    <Error
    reducePage={reducePage}
    />
  )
}
    
}

export default Home
