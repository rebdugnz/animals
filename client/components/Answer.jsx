import React from 'react'
import {Link} from 'react-router-dom'
import data from '../../server/public/data'
import Sound from 'react-sound';

class Answer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            buttonClicked:false,
            soundPlaying:false,
        }

        this.onButtonPress = this.onButtonPress.bind(this);
        this.soundPlayerArea = this.soundPlayerArea.bind(this);
        this.playSound = this.playSound.bind(this);

    }

    onButtonPress() {

      this.setState({
        buttonClicked: true
      })
    }

    displayMore(bool){
      
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

    soundPlayerArea(sound_file) {
        if (sound_file){
            return (
            <React.Fragment>
            <p> this is where we play {sound_file} v4</p>
            <button onClick={this.playSound}>Play the sound!</button>
           {
               
               (this.state.soundPlaying) && <Sound url={sound_file} playStatus={Sound.status.PLAYING} onError={((errorCode, description) => console.log(errorCode, description) )}/>

           } 
            </React.Fragment>
            )}
        
    }

    playSound(){

        this.setState({
            soundPlaying:!this.state.soundPlaying,
        })

        const {category,name} =this.props.match.params;
        const animal = data[category].find( (animal) => animal.name = name);
        const {sound, sound_file} = animal
        return <Sound url={sound_file} playStatus={Sound.status.PLAYING} onError={((errorCode, description) => console.log(errorCode, description) )}/>
    }

    textSound(sound){
        if (sound){
            return <p> this animal makes a {sound} sound!</p>
        }
    }

    render() {
        const {category,name} =this.props.match.params;
        const animal = data[category].find( (animal) => animal.name = name);
        const {sound, sound_file} = animal
        console.log(sound, ':', sound_file)
        return (
            <div className="Answer">
                {this.textSound(sound)}
                {this.soundPlayerArea(sound_file)}
                <p> What animal is it?? </p>
                <input type="text"/>
                <button onClick={this.onButtonPress} >???</button>
                {this.displayMore(this.state.buttonClicked)}
            </div>
        )
    }
}

export default Answer
