import React from 'react'
import { UseGlobalContext } from './Context';

const Services = () => {
  const {Services} =UseGlobalContext();
  console.log(Services);
  return (
    <div>
      <h3>services</h3>
    </div>
  )
}

export default Services;
