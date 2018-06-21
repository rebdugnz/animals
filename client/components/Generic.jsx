import React from 'react'

class Generic extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            desc:'a sweet component'
        }
    }

    render() {
        return (
            <div className="generic">
                <p> this is {this.state.desc} </p>
            </div>
        )
    }
}

export default Generic