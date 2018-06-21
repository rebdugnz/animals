import React from 'react'
import data from '../../server/public/data'

class Category extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            desc:"catergory component"
        }
    }

    render() {
      console.log(this.props.match.params.category)
        return (
            <div className="Category">
                <p> this is {this.state.desc} </p>
            </div>
        )
    }
}

export default Category