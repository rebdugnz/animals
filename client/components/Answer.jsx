import React from 'react'

class Answer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            desc:'a sweet component'
        }
    }

    render() {
        return (
            <div className="Answer">
                <p> What animal is it? </p>
                <a href='./birds/kiwi/info'>linky link</a>

            </div>
        )
    }
}

export default Answer