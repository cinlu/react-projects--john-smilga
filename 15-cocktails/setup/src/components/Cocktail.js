import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, id}) => {

  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name}/>
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <p> blah blah blah </p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary'> 
          details 
        </Link> 
      </div>
    </article>
  )
}

export default Cocktail
