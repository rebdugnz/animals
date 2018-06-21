import React from 'react'

class Frontpage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            desc:'a sweet component'
        }
    }

    render() {
        return (
            <div className="frontPage">
                <p> this is {this.state.desc} </p>
            </div>
        )
    }
}

export default Frontpage
