import React from 'react'
import axios from 'axios'

import './App.css'

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

            </div>
        )
    }
}

export default App
