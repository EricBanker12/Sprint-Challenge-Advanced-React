import React from 'react'
import axios from 'axios'

import './App.css'

import Navbar from './components/Navbar'
import Player from './components/Player'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/players`)
            .then(resp => {
                // console.log(resp)
                this.setState({players: resp.data})
            })
            .catch(console.error)
    }

    render() {
        return (
            <div className='App'>
                <Navbar />
                <section className="row">
                    {this.state.players.map(player => <Player key={player.id} {...player} />)}
                </section>
            </div>
        )
    }
}

export default App
