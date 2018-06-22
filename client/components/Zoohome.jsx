import React from 'react'
import {Link} from 'react-router-dom'
import animals from '../../server/public/data.js'

const Zoohome = (props) => {
  const categories = Object.keys(animals)
  const data = animals
        return (
            <div className='zoohome'>
                {categories.map(animal => {
                  return <div className="individualAnimal" key={animal}>
                    <Link style={{textDecorationLine: 'none'}} to={`/${animal}`}>
                    <h2>{animal}</h2>
                    <img src={data[animal][0].silhouette} />
                  </Link>
                  </div>
                })}
            </div>
        )
}

export default Zoohome
