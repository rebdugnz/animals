import React from 'react'
import {Link} from 'react-router-dom'
import animals from '../../server/public/data.js'

const Info = (props) => {
  const data = animals
  const name = props.match.params.name
  const category = data[props.match.params.category]

  console.log(category);

        return (
            <div>
                <h2> Welcome to the {name} page</h2>
                <img src={category[0].img} />
                <p>Find some info here!: <a target="_blank" href={category[0].facts}>{category[0].facts}</a></p>
            </div>
        )
}

export default Info
