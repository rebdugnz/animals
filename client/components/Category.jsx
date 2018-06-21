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
      const category = this.props.match.params.category
      console.log(category)
        return (
            <div className="Category">
                <p> this is {this.state.desc} </p>
                <p> we need to render the {category} </p>
            </div>
        )
    }
}

export default Category