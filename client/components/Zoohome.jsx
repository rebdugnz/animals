import React from 'react'
import {Link} from 'react-router-dom'
import animals from '../../server/public/data.js'

const Zoohome = (props) => {
  const categories = Object.keys(animals)
  console.log(categories);
  console.log(props);
        return (
            <div>
                {categories.map(animal => {
                  return <div key={animal}>
                    <h2>
                      <Link style={{textDecorationLine: 'none'}} to={`/${animal}`}>{animal}</Link>
                    </h2>
                    
                  </div>
                })}
            </div>
        )
}

export default Zoohome
