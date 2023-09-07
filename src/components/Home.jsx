import React from 'react'
import Banner from './Banner'
import Form from './Form'

const Home = () => {

  return (
    <div className="bg-white w-full lg:w-2/3 lg:max-h-screen lg:rounded-2xl lg:shadow-2xl flex lg:flex-row max-sm:flex-col-reverse max-md:gap-2">
      <Form className="w-1/2" />
      <Banner className="w-1/2" />
    </div>
  )
}

export default Home