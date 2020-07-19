import React, { Component } from 'react'
import Sound from 'react-sound';
import love from '../../Sounds/Love_Spell.mp3'
import happy from '../../Sounds/Peace_And_Happy.mp3'
import tranquility from '../../Sounds/Tranquility.mp3'

export class SoundsControl extends Component {
    state = {
        sound_status: Sound.status.PLAYING,
        love_volume: 0,
        happy_volume:0,
        tranquality_volume:0
    }

    componentDidMount() {
        this.setState({ love_volume: this.props.love_volume })
        if (this.props.love_volume < 0) {
            this.setState({ love_volume: 0 })
        }
        if (this.props.love_volume > 100) {
            this.setState({ love_volume: 100 })
        }

        this.setState({ happy_volume: this.props.happy_volume })
        if (this.props.happy_volume < 0) {
            this.setState({ happy_volume: 0 })
        }
        if (this.props.happy_volume > 100) {
            this.setState({ happy_volume: 100 })
        }

        this.setState({ tranquality_volume: this.props.tranquality_volume })
        if (this.props.tranquality_volume < 0) {
            this.setState({ tranquality_volume: 0 })
        }
        if (this.props.tranquality_volume > 100) {
            this.setState({ tranquality_volume: 100 })
        }
    }

    stop = () => {
        this.setState({ sound_status: Sound.status.PAUSE })
    }

    render() {
        return (
            <div className="wrap" style={{flexDirection:"column",textAlign:"center"}} >
                <Sound
                    url={love}
                    playStatus={this.state.sound_status}
                    playFromPosition={0}
                    volume={this.state.love_volume}
                />
                <Sound
                    url={happy}
                    playStatus={this.state.sound_status}
                    playFromPosition={0}
                    volume={this.state.happy_volume}
                />
                 <Sound
                    url={tranquility}
                    playStatus={this.state.sound_status}
                    playFromPosition={0}
                    volume={this.state.tranquality_volume}
                />
                <div>
                    <div>
                        Love Spell mp3: (Volume : {this.state.love_volume} )
                    </div>
                    <div>
                        Happy and Peace Full mp3: (Volume : {this.state.happy_volume} )
                    </div>
                    <div>
                        Tranquility mp3: (Volume : {this.state.tranquality_volume} )
                    </div>
                </div>

                <div>
                    <button onClick={this.stop} >
                        STOP
                    </button>
                </div>
            </div>
        )
    }
}

export default SoundsControl
