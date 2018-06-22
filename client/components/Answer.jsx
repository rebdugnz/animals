import React from 'react'
import {Link} from 'react-router-dom'

class Answer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            buttonClicked:false,
        }

        this.onButtonPress = this.onButtonPress.bind(this);

    }

    onButtonPress() {

      this.setState({
        buttonClicked: true
      })
    }

    displayMore(bool){
      console.log(bool);
      const {category,name}=this.props.match.params
      if (bool) {
        return (
          <React.Fragment>
          <p> It's a {name}!</p>
          <Link to={`/info/${category}/${name}`}>More about {name}</Link>
          </React.Fragment>
        )
      }

    }

    render() {
        return (
            <div className="Answer">
                <p> What animal is it?? </p>
                <input type="text"/>
                <button onClick={this.onButtonPress} >???</button>
                {this.displayMore(this.state.buttonClicked)}
            </div>
        )
    }
}

export default Answer
