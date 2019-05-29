import React, { Component } from 'react'

 class Die extends Component {
    render() {
        return (
            <div >
                <i className = {`   fas fa-dice-${this.props.face} ${this.props.rolling ? "Die" : "Diegame"}`}/>
                
            </div>
        )
    }
}
export default Die