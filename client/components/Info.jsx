import React from 'react'
import {Link} from 'react-router-dom'
import animals from '../../server/public/data.js'

const Info = (props) => {
  const data = animals
  const name = props.match.params.name
  const category = data[props.match.params.category]
  let animal = category.find(item => item.name === name)
  console.log(animal);
        return (
            <div>
                <h2> It's a {name}</h2>
                <img src={animal.img} />
                <p>Find some info here!: <a target="_blank" href={animal.facts}>{animal.facts}</a></p>
                <Link to='/'>Back to Home Page</Link>
            </div>
        )
}

export default Info
