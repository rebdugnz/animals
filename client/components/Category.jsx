import React from 'react'
import data from '../../server/public/data'
import Animal from './Animal'

class Category extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            desc:"catergory component"
        }
    }

    render() {

      const category = this.props.match.params.category
      let backgroundClass = '';

      if (category == 'fish'){
        backgroundClass = 'fish'
      } else if (category == 'birds'){
        backgroundClass = 'bird'
      } else if (category == 'mammals'){
        backgroundClass = 'mammal'
      } else {
        backgroundClass = 'reptile'
      }

        return (
            <div className={backgroundClass}>
              <h3 className="Category">Category is......{category}!!!!!</h3>
              <h4 className="Category">Click an animal to play</h4>
                <Animal category={category} />
            </div>
        )
    }
}

export default Category
