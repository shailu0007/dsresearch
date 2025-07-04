import React from 'react'

const ServiceSub = ({stockcashregular}) => {
  return (
    <div>
      <h2>{stockcashregular.name}</h2>
      <p>{stockcashregular.description}</p>
      <img src={stockcashregular.image} alt={stockcashregular.name} />
    </div>
  )
}

export default ServiceSub
