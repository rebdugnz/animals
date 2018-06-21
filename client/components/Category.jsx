import React from 'react'

class Category extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            desc:'a sweet component'
        }
    }

    render() {
        return (
            <div className="Category">
                <p> this is {this.state.desc} </p>
            </div>
        )
    }
}

export default Category